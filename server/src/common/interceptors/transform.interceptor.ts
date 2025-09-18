import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

interface Response<T> {
  statusCode: number;
  message: string;
  data: T | null;
}

export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const response = context.switchToHttp().getResponse<Response<T>>();

    return next.handle().pipe(
      map((data: T) => {
        const value: unknown = data;

        const hasStringMessage = (
          input: unknown,
        ): input is { message?: string } =>
          typeof input === "object" &&
          input !== null &&
          ("message" in (input as Record<string, unknown>)
            ? typeof (input as { message?: unknown }).message === "string"
            : true);

        const hasData = (input: unknown): input is { data: T } =>
          typeof input === "object" &&
          input !== null &&
          "data" in (input as Record<string, unknown>);

        const message =
          hasStringMessage(value) &&
          typeof (value as { message?: string }).message === "string"
            ? (value as { message?: string }).message!
            : "Request successful";

        const payload: T = hasData(value) ? (value as { data: T }).data : data;

        // 🚨 Prevent `{ message }`-only objects being duplicated into `data`
        if (
          typeof value === "object" &&
          value !== null &&
          "message" in value &&
          Object.keys(value).length === 1
        ) {
          return {
            statusCode: response.statusCode,
            message,
            data: null,
          };
        }

        return {
          statusCode: response.statusCode,
          message,
          data: payload,
        };
      }),
    );
  }
}

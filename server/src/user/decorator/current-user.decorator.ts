import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";

const getCurrentUserByContext = (context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest<Request>();

  return request.currentUser;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);

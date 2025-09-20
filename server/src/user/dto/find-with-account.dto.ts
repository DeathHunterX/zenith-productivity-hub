import {
  IsEmail,
  IsOptional,
  IsUUID,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
@ValidatorConstraint({ name: "UserIdOrEmail", async: false })
class UserIdOrEmailConstraint implements ValidatorConstraintInterface {
  validate(_: any, args: ValidationArguments) {
    const obj = args.object as FindUserDto;
    return !!(obj.userId || obj.email); // must have at least one
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultMessage(_: ValidationArguments) {
    return "Either userId or email must be provided";
  }
}

export class FindUserDto {
  @IsOptional()
  @IsUUID()
  userId?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @Validate(UserIdOrEmailConstraint)
  _atLeastOne?: boolean;
}

import { z } from "zod";
import { changePasswordSchema } from "./settings.validation";

export const signInSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 8 characters long." })
    .max(100, { message: "Password cannot exceed 100 characters." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character.",
    }),
});

export const signUpSchema = z
  .object({
    first_name: z.string().min(1, { message: "First name is required" }),
    last_name: z.string().min(1, { message: "Last name is required" }),
    email: z.email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .max(24, { message: "Password cannot exceed 24 characters." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Password must contain at least one special character.",
      }),
    confirm_password: z
      .string()
      .min(8, {
        message: "Confirm password must be at least 8 characters long.",
      })
      .max(24, { message: "Confirm password cannot exceed 24 characters." })
      .regex(/[A-Z]/, {
        message: "Confirm password must contain at least one uppercase letter.",
      })
      .regex(/[a-z]/, {
        message: "Confirm password must contain at least one lowercase letter.",
      })
      .regex(/[0-9]/, {
        message: "Confirm password must contain at least one number.",
      })
      .regex(/[^a-zA-Z0-9]/, {
        message:
          "Confirm password must contain at least one special character.",
      }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match.",
    path: ["confirm_password"],
  });

export const resetPasswordSchema = changePasswordSchema.omit({
  old_password: true,
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
export type SignInSchemaType = z.infer<typeof signInSchema>;
export type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;

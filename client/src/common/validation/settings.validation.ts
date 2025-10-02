import z from "zod";

export const accountSchema = z.object({
  avatar: z.string().optional(),
  first_name: z.string().min(1, { message: "First name is required" }),
  last_name: z.string().min(1, { message: "Last name is required" }),
  email: z.email({ message: "Invalid email address" }),
  country: z.string().optional(),
  timezone: z.string().optional(),
  city: z.string().optional(),
});

export const securitySchema = z.object({
  password: z.string().min(1, { message: "Password is required" }),
  confirm_password: z
    .string()
    .min(1, { message: "Confirm password is required" }),
});

export const changePasswordSchema = z
  .object({
    old_password: z.string().min(1, { message: "Password is required" }),
    new_password: z
      .string()
      .min(8, {
        message: "New password must be at least 8 characters long.",
      })
      .max(24, { message: "New password cannot exceed 24 characters." })
      .regex(/[A-Z]/, {
        message: "New password must contain at least one uppercase letter.",
      })
      .regex(/[a-z]/, {
        message: "New password must contain at least one lowercase letter.",
      })
      .regex(/[0-9]/, {
        message: "New password must contain at least one number.",
      })
      .regex(/[^a-zA-Z0-9]/, {
        message: "New password must contain at least one special character.",
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
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords do not match.",
    path: ["confirm_password"],
  });

export type AccountSchemaType = z.infer<typeof accountSchema>;
export type SecuritySchemaType = z.infer<typeof securitySchema>;
export type ChangePasswordSchemaType = z.infer<typeof changePasswordSchema>;

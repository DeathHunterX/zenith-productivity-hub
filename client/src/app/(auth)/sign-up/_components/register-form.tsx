"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useForm } from "react-hook-form";

// Validations
import {
  signUpSchema,
  SignUpSchemaType,
} from "@/common/validation/auth.validation";

// Form Fields
import InputField from "@/components/shared/form-field/input-field";

// UI Components
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

// API
import { useSignUp } from "@/features/auth/api/use-sign-up";

const RegisterForm = () => {
  const tSignUp = useTranslations("auth.signUp");

  const { mutate: signUp, isPending } = useSignUp();

  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  function onSubmit(values: SignUpSchemaType) {
    signUp(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <InputField
              nameInSchema="first_name"
              label={tSignUp("form.firstName")}
              type="text"
              disabled={isPending}
            />
            <InputField
              nameInSchema="last_name"
              label={tSignUp("form.lastName")}
              type="text"
              disabled={isPending}
            />
          </div>
          <InputField
            nameInSchema="email"
            label={tSignUp("form.email")}
            placeholder="Enter your email"
            type="email"
            disabled={isPending}
          />

          <InputField
            nameInSchema="password"
            label={tSignUp("form.password")}
            placeholder="Enter your password"
            type="password"
            disabled={isPending}
          />

          <InputField
            nameInSchema="confirm_password"
            label={tSignUp("form.confirmPassword")}
            placeholder="Enter your confirm password"
            type="password"
            disabled={isPending}
          />
        </div>

        <Button type="submit" className="w-full" disabled={isPending}>
          {tSignUp("form.register")}
        </Button>
      </form>

      <p className="text-sm leading-relaxed">
        {tSignUp("actions.alreadyHaveAccount")}{" "}
        <Link
          href={"/sign-in"}
          className="font-semibold hover:underline text-blue-500 dark:text-blue-400"
        >
          {tSignUp("actions.signIn")}
        </Link>
      </p>
    </Form>
  );
};

export default RegisterForm;

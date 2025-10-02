"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

// Validations
import {
  signInSchema,
  SignInSchemaType,
} from "@/common/validation/auth.validation";

// Form Fields
import InputField from "@/components/shared/form-field/input-field";

// UI Components
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

// API
import { useSignIn } from "@/features/auth/api/use-sign-in";

const LoginForm = () => {
  const tSignIn = useTranslations("auth.signIn");

  const searchParams = useSearchParams();
  const router = useRouter();

  const { mutate: signIn, isPending } = useSignIn();

  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: SignInSchemaType) {
    signIn(values, {
      onSuccess: () => {
        const callbackUrl = searchParams.get("callbackUrl");
        const destination = callbackUrl || "/dashboard";
        router.push(destination);
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-6">
          <InputField
            nameInSchema="email"
            label={tSignIn("form.email")}
            placeholder="Enter your email"
            type="email"
            disabled={isPending}
          />

          <InputField
            nameInSchema="password"
            label={tSignIn("form.password")}
            placeholder="Enter your password"
            type="password"
            disabled={isPending}
          />
        </div>

        <Button type="submit" className="w-full" disabled={isPending}>
          {tSignIn("form.login")}
        </Button>
      </form>

      <p className="text-sm leading-relaxed">
        {tSignIn("actions.areYouNew")}{" "}
        <Link
          href={"/sign-up"}
          className="font-semibold hover:underline text-blue-500 dark:text-blue-400"
        >
          {tSignIn("actions.createAccount")}
        </Link>
      </p>
    </Form>
  );
};

export default LoginForm;

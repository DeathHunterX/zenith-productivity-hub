import { useTranslations } from "next-intl";

import SocialMediaForm from "@/components/shared/form/social-media-form";
import AuthWrapper from "@/components/shared/wrapper/auth-wrapper";
import LoginForm from "./_components/login-form";

const LoginPage = () => {
  const tSignIn = useTranslations("auth.signIn");
  return (
    <AuthWrapper
      title={tSignIn("title")}
      description={tSignIn("description")}
      form={<LoginForm />}
      socialMedia={<SocialMediaForm />}
    />
  );
};

export default LoginPage;

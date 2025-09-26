import SocialMediaForm from "@/components/shared/form/social-media-form";
import AuthWrapper from "@/components/shared/wrapper/auth-wrapper";
import { useTranslations } from "next-intl";
import RegisterForm from "./_components/register-form";

const LoginPage = () => {
  const tSignUp = useTranslations("auth.signUp");
  return (
    <AuthWrapper
      title={tSignUp("title")}
      description={tSignUp("description")}
      form={<RegisterForm />}
      socialMedia={<SocialMediaForm />}
    />
  );
};

export default LoginPage;

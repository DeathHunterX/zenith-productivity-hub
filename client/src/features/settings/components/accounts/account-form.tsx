"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

// Redux
import { useAppSelector } from "@/common/redux/store";

// Icons
import { Save } from "lucide-react";

// Components
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";

// Validations
import {
  accountSchema,
  AccountSchemaType,
} from "@/common/validation/settings.validation";

// Form Fields
import AvatarSection from "./avatar";
import EmailSection from "./email";
import LocationSection from "./location";
import NameSection from "./name";

const AccountForm = () => {
  const userInfo = useAppSelector((state) => state.user.info);

  const tAccount = useTranslations("settings.account");

  const form = useForm({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      country: "",
      timezone: "",
      city: "",
      avatar: "",
    },
  });

  useEffect(() => {
    if (userInfo) {
      form.reset({
        first_name: userInfo.full_name.split(" ")[0],
        last_name: userInfo.full_name.split(" ")[1],
        email: userInfo.email,
        country: userInfo.country || "",
        city: userInfo.city || "",
        avatar: userInfo.image || "",
      });
    }
  }, [userInfo, form]);

  async function onSubmit(values: AccountSchemaType) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="bg-white dark:bg-muted-foreground/7 p-5 rounded-xl">
          <div className="flex flex-row justify-between items-center">
            <div className="space-y-1">
              <h4 className="font-semibold">{tAccount("title")}</h4>
              <p>{tAccount("description")}</p>
            </div>

            <Button type="submit">
              <Save />
              {tAccount("form.save")}
            </Button>
          </div>

          <Separator className="my-4" />

          <div className="mb-6">
            <AvatarSection />
            <Separator className="my-8" />

            <NameSection />
            <Separator className="my-8" />

            <EmailSection />
            <Separator className="my-8" />

            <LocationSection />
          </div>
        </div>
      </form>
    </Form>
  );
};

export default AccountForm;

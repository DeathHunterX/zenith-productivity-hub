"use client";
import {
  changePasswordSchema,
  ChangePasswordSchemaType,
} from "@/common/validation/settings.validation";
import InputField from "@/components/shared/form-field/input-field";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const ChangePasswordSection = () => {
  return (
    <section className=" grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="col-span-1 md:col-span-4">
        <h5 className="font-semibold">Change Password</h5>
        <p>
          Enter a new password to secure your account. You&apos;ll be prompted
          to use this password when signing in.
        </p>
      </div>

      <div className="col-span-1 md:col-span-8">
        <div className="flex items-center justify-end h-full">
          <Dialog>
            <DialogTrigger asChild className="w-fit">
              <Button variant="outline">Change Password</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Change Password</DialogTitle>
                <DialogDescription>
                  Enter a new password to secure your account. You&apos;ll be
                  prompted to use this password when signing in.
                </DialogDescription>
              </DialogHeader>
              <Separator />
              <ChangePasswordForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

const ChangePasswordForm = () => {
  const form = useForm<ChangePasswordSchemaType>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      old_password: "",
      new_password: "",
      confirm_password: "",
    },
  });
  const { errors } = form.formState;

  async function onSubmit(values: ChangePasswordSchemaType) {
    console.log(errors);
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-6 mb-6">
          <InputField
            nameInSchema="old_password"
            label="Old Password"
            type="password"
          />
          <InputField
            nameInSchema="new_password"
            label="New Password"
            type="password"
          />

          <div className="">
            <p>Please add all necessary characters to create safe password</p>
            <ul className="list-disc list-inside">
              <li>Minimum 8 characters</li>
              <li>At least one uppercase letter</li>
              <li>At least one lowercase letter</li>
              <li>At least one number</li>
              <li>At least one special character</li>
            </ul>
          </div>
          <InputField
            nameInSchema="confirm_password"
            label="Confirm Password"
            type="password"
          />
        </div>

        <Button type="submit" className="w-full">
          Change Password
        </Button>
      </form>
    </Form>
  );
};

export default ChangePasswordSection;

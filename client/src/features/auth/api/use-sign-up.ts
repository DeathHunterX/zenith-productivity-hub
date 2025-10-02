import { SignUpSchemaType } from "@/common/validation/auth.validation";
import { publicApi } from "@/lib/api/axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useSignUp = () => {
  const navigate = useRouter();
  const mutation = useMutation({
    mutationFn: async (data: SignUpSchemaType) => {
      const { first_name, last_name, email, password } = data;

      const full_name = `${first_name} ${last_name}`;
      const response = await publicApi.post("/auth/sign-up", {
        full_name,
        email,
        password,
      });

      return response;
    },
    onSuccess: () => {
      toast.success("Signed up successfully");
      navigate.push("/sign-in");
    },
    onError: (error) => {
      toast.error("Signed up failed");
      console.error(error);
    },
  });

  return mutation;
};

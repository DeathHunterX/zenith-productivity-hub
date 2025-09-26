import { SignInSchemaType } from "@/common/validation/auth.validation";
import { api } from "@/lib/api/axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useSignIn = () => {
  const navigate = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: SignInSchemaType) => {
      const response = await api.post("/auth/sign-in", data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Signed in successfully");
      navigate.push("/dashboard");
    },
    onError: (error) => {
      toast.error("Signed in failed");
      console.error(error);
    },
  });

  return mutation;
};

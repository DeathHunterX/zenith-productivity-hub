import { SignInSchemaType } from "@/common/validation/auth.validation";
import { publicApi } from "@/lib/api/axios";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useSignIn = () => {
  const mutation = useMutation({
    mutationFn: async (data: SignInSchemaType) => {
      const response = await publicApi.post("/auth/sign-in", data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Signed in successfully");
    },
    onError: (error) => {
      toast.error("Signed in failed");
      console.error(error);
    },
  });

  return mutation;
};

import { api } from "@/lib/api/axios";
import { useMutation } from "@tanstack/react-query";

export const useSignOut = () => {
  const mutation = useMutation({
    mutationFn: async () => {
      const response = await api.post("/auth/sign-out");
      return response.data;
    },
    onSuccess: () => {
      window.location.href = "/sign-in";
    },
    onError: () => {
      window.location.href = "/sign-in";
    },
  });

  return mutation;
};

import { api } from "@/lib/api/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetMe = () => {
  const query = useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const response = await api.get("/user/me");

      return response.data;
    },
  });

  return query;
};

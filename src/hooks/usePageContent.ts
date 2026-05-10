import { useQuery } from "@tanstack/react-query";
import { useGetContentByPage } from "./useContent";

export const usePageContent = (page: string) => {
  return useQuery({
    queryKey: ["content", "page", page],
    queryFn: async () => {
      const response = await useGetContentByPage(page);
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: !!page,
  });
};

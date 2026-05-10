import { useQuery } from "@tanstack/react-query";
import { getAllJobs } from "../api/jobs.api";

export const useGetAllJobsForCareers = () => {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const response = await getAllJobs();
      // Only return active jobs for careers page
      return response.data.filter(job => job.isActive !== false);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};

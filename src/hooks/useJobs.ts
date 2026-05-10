import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
  type UpdateJobPayload,
  type CreateJobPayload,
} from "../api/jobs.api";

export const useGetAllJobs = () => {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: getAllJobs,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useGetJobById = (id: string) => {
  return useQuery({
    queryKey: ["job", id],
    queryFn: () => getJobById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useCreateJob = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
    onError: (error) => {
      console.error("Error creating job:", error);
    },
  });
};

export const useUpdateJob = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateJobPayload }) =>
      updateJob(id, payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["job", variables.id] });
    },
    onError: (error) => {
      console.error("Error updating job:", error);
    },
  });
};

export const useDeleteJob = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
    onError: (error) => {
      console.error("Error deleting job:", error);
    },
  });
};

export type { UpdateJobPayload, CreateJobPayload };

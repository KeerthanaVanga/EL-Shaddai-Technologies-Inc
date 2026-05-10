import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllSubmissions,
  getSubmissionById,
  createSubmission,
  updateSubmission,
  markSubmissionAsRead,
  deleteSubmission,
  type UpdateSubmissionPayload,
} from "../api/submissions.api";

export const useGetAllSubmissions = () => {
  return useQuery({
    queryKey: ["submissions"],
    queryFn: getAllSubmissions,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useGetSubmissionById = (id: string) => {
  return useQuery({
    queryKey: ["submission", id],
    queryFn: () => getSubmissionById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useCreateSubmission = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createSubmission,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["submissions"] });
    },
    onError: (error) => {
      console.error("Error creating submission:", error);
    },
  });
};

export const useUpdateSubmission = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateSubmissionPayload }) =>
      updateSubmission(id, payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["submissions"] });
      queryClient.invalidateQueries({ queryKey: ["submission", variables.id] });
    },
    onError: (error) => {
      console.error("Error updating submission:", error);
    },
  });
};

export const useMarkSubmissionAsRead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: markSubmissionAsRead,
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ["submissions"] });
      queryClient.invalidateQueries({ queryKey: ["submission", id] });
    },
    onError: (error) => {
      console.error("Error marking submission as read:", error);
    },
  });
};

export const useDeleteSubmission = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteSubmission,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["submissions"] });
    },
    onError: (error) => {
      console.error("Error deleting submission:", error);
    },
  });
};

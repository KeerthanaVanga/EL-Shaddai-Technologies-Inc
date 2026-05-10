import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getAllContent,
  getContentByPage,
  getContentById,
  createContent,
  updateContent,
  deleteContent,
  type Content,
  type CreateContentPayload,
  type UpdateContentPayload,
} from "../api/content.api";

export const useGetAllContent = () => {
  return useQuery({
    queryKey: ["content"],
    queryFn: async () => {
      const response = await getAllContent();
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useGetContentByPage = (page: string) => {
  return useQuery({
    queryKey: ["content", "page", page],
    queryFn: async () => {
      const response = await getContentByPage(page);
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: !!page,
  });
};

export const useGetContentById = (id: string) => {
  return useQuery({
    queryKey: ["content", id],
    queryFn: async () => {
      const response = await getContentById(id);
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: !!id,
  });
};

export const useCreateContent = () => {
  return useMutation({
    mutationFn: createContent,
    onSuccess: () => {
      console.log("Content created successfully");
    },
    onError: (error) => {
      console.error("Error creating content:", error);
    },
  });
};

export const useUpdateContent = () => {
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateContentPayload }) => 
      updateContent(id, payload),
    onSuccess: () => {
      console.log("Content updated successfully");
    },
    onError: (error) => {
      console.error("Error updating content:", error);
    },
  });
};

export const useDeleteContent = () => {
  return useMutation({
    mutationFn: deleteContent,
    onSuccess: () => {
      console.log("Content deleted successfully");
    },
    onError: (error) => {
      console.error("Error deleting content:", error);
    },
  });
};

// Export types for use in components
export type { Content, CreateContentPayload, UpdateContentPayload };

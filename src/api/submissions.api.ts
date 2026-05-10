import api from "../lib/axios";
import { API_ROUTES } from "../routes/api.routes";

export interface Submission {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateSubmissionPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface UpdateSubmissionPayload {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  isRead?: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const getAllSubmissions = async (): Promise<ApiResponse<Submission[]>> => {
  const response = await api.get<ApiResponse<Submission[]>>(API_ROUTES.SUBMISSIONS.GET_ALL);
  
  if (!response.data.success) {
    throw new Error(response.data.message);
  }
  
  return response.data;
};

export const getSubmissionById = async (id: string): Promise<ApiResponse<Submission>> => {
  const response = await api.get<ApiResponse<Submission>>(API_ROUTES.SUBMISSIONS.GET_BY_ID(id));
  
  if (!response.data.success) {
    throw new Error(response.data.message);
  }
  
  return response.data;
};

export const createSubmission = async (payload: CreateSubmissionPayload): Promise<ApiResponse<Submission>> => {
  const response = await api.post<ApiResponse<Submission>>(API_ROUTES.SUBMISSIONS.CREATE, payload);
  
  if (!response.data.success) {
    throw new Error(response.data.message);
  }
  
  return response.data;
};

export const updateSubmission = async (id: string, payload: UpdateSubmissionPayload): Promise<ApiResponse<Submission>> => {
  const response = await api.put<ApiResponse<Submission>>(API_ROUTES.SUBMISSIONS.UPDATE(id), payload);
  
  if (!response.data.success) {
    throw new Error(response.data.message);
  }
  
  return response.data;
};

export const markSubmissionAsRead = async (id: string): Promise<ApiResponse<Submission>> => {
  const response = await api.patch<ApiResponse<Submission>>(API_ROUTES.SUBMISSIONS.MARK_AS_READ(id));
  
  if (!response.data.success) {
    throw new Error(response.data.message);
  }
  
  return response.data;
};

export const deleteSubmission = async (id: string): Promise<ApiResponse<void>> => {
  const response = await api.delete<ApiResponse<void>>(API_ROUTES.SUBMISSIONS.DELETE(id));
  
  if (!response.data.success) {
    throw new Error(response.data.message);
  }
  
  return response.data;
};

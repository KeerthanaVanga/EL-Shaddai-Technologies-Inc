import api from "../lib/axios";
import { API_ROUTES } from "../routes/api.routes";

export interface Job {
  id: string;
  title: string;
  department?: string;
  description?: string;
  requirements?: string;
  location?: string;
  type?: string;
  salary?: string;
  isActive?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateJobPayload {
  title: string;
  department?: string;
  description?: string;
  requirements?: string;
  location?: string;
  type?: string;
  salary?: string;
  isActive?: boolean;
}

export interface UpdateJobPayload {
  title?: string;
  department?: string;
  description?: string;
  requirements?: string;
  location?: string;
  type?: string;
  salary?: string;
  isActive?: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const getAllJobs = async (): Promise<ApiResponse<Job[]>> => {
  const response = await api.get<ApiResponse<Job[]>>(API_ROUTES.JOBS.GET_ALL);
  
  if (!response.data.success) {
    throw new Error(response.data.message);
  }
  
  return response.data;
};

export const getJobById = async (id: string): Promise<ApiResponse<Job>> => {
  const response = await api.get<ApiResponse<Job>>(API_ROUTES.JOBS.GET_BY_ID(id));
  
  if (!response.data.success) {
    throw new Error(response.data.message);
  }
  
  return response.data;
};

export const createJob = async (payload: CreateJobPayload): Promise<ApiResponse<Job>> => {
  const response = await api.post<ApiResponse<Job>>(API_ROUTES.JOBS.CREATE, payload);
  
  if (!response.data.success) {
    throw new Error(response.data.message);
  }
  
  return response.data;
};

export const updateJob = async (id: string, payload: UpdateJobPayload): Promise<ApiResponse<Job>> => {
  const response = await api.put<ApiResponse<Job>>(API_ROUTES.JOBS.UPDATE(id), payload);
  
  if (!response.data.success) {
    throw new Error(response.data.message);
  }
  
  return response.data;
};

export const deleteJob = async (id: string): Promise<ApiResponse<void>> => {
  const response = await api.delete<ApiResponse<void>>(API_ROUTES.JOBS.DELETE(id));
  
  if (!response.data.success) {
    throw new Error(response.data.message);
  }
  
  return response.data;
};

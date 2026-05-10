import api from "../lib/axios";
import { API_ROUTES } from "../routes/api.routes";

export interface Content {
  id: string;
  page: string;
  section: string;
  title?: string;
  heading?: string;
  description?: string;
  imageUrl?: string;
  buttonText?: string;
  buttonLink?: string;
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateContentPayload {
  page: string;
  section: string;
  title?: string;
  heading?: string;
  description?: string;
  imageUrl?: string;
  buttonText?: string;
  buttonLink?: string;
  isActive?: boolean;
  order?: number;
}

export interface UpdateContentPayload {
  page?: string;
  section?: string;
  title?: string;
  heading?: string;
  description?: string;
  imageUrl?: string;
  buttonText?: string;
  buttonLink?: string;
  isActive?: boolean;
  order?: number;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const getAllContent = async (): Promise<ApiResponse<Content[]>> => {
  const response = await api.get<ApiResponse<Content[]>>(API_ROUTES.CONTENT.GET_ALL);
  return response.data;
};

export const getContentByPage = async (page: string): Promise<ApiResponse<Content[]>> => {
  const response = await api.get<ApiResponse<Content[]>>(API_ROUTES.CONTENT.GET_BY_PAGE(page));
  return response.data;
};

export const getContentById = async (id: string): Promise<ApiResponse<Content>> => {
  const response = await api.get<ApiResponse<Content>>(API_ROUTES.CONTENT.GET_BY_ID(id));
  return response.data;
};

export const createContent = async (payload: CreateContentPayload): Promise<ApiResponse<Content>> => {
  const response = await api.post<ApiResponse<Content>>(API_ROUTES.CONTENT.CREATE, payload);
  return response.data;
};

export const updateContent = async (id: string, payload: UpdateContentPayload): Promise<ApiResponse<Content>> => {
  const response = await api.put<ApiResponse<Content>>(API_ROUTES.CONTENT.UPDATE(id), payload);
  return response.data;
};

export const deleteContent = async (id: string): Promise<ApiResponse<null>> => {
  const response = await api.delete<ApiResponse<null>>(API_ROUTES.CONTENT.DELETE(id));
  return response.data;
};

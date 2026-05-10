import api from "../lib/axios";
import { API_ROUTES } from "../routes/api.routes";

export interface ContactSubmission {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
}

export interface CreateContactPayload {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const createContactSubmission = async (payload: CreateContactPayload): Promise<ApiResponse<ContactSubmission>> => {
  const response = await api.post<ApiResponse<ContactSubmission>>(API_ROUTES.SUBMISSIONS.CREATE, payload);
  return response.data;
};

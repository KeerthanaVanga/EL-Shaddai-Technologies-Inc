import api from "../lib/axios";
import { API_ROUTES } from "../routes/api.routes";

export interface Product {
  id: string;
  name: string;
  tagline?: string;
  description: string;
  features?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductPayload {
  name: string;
  tagline?: string;
  description: string;
  features?: string;
}

export interface UpdateProductPayload {
  name?: string;
  tagline?: string;
  description?: string;
  features?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const getAllProducts = async (): Promise<ApiResponse<Product[]>> => {
  const response = await api.get<ApiResponse<Product[]>>(API_ROUTES.PRODUCTS.GET_ALL);
  
  if (!response.data.success) {
    throw new Error(response.data.message);
  }
  
  return response.data;
};

export const getProductById = async (id: string): Promise<ApiResponse<Product>> => {
  const response = await api.get<ApiResponse<Product>>(API_ROUTES.PRODUCTS.GET_BY_ID(id));
  
  if (!response.data.success) {
    throw new Error(response.data.message);
  }
  
  return response.data;
};

export const createProduct = async (payload: CreateProductPayload): Promise<ApiResponse<Product>> => {
  const response = await api.post<ApiResponse<Product>>(API_ROUTES.PRODUCTS.CREATE, payload);
  
  if (!response.data.success) {
    throw new Error(response.data.message);
  }
  
  return response.data;
};

export const updateProduct = async (id: string, payload: UpdateProductPayload): Promise<ApiResponse<Product>> => {
  const response = await api.put<ApiResponse<Product>>(API_ROUTES.PRODUCTS.UPDATE(id), payload);
  
  if (!response.data.success) {
    throw new Error(response.data.message);
  }
  
  return response.data;
};

export const deleteProduct = async (id: string): Promise<ApiResponse<void>> => {
  const response = await api.delete<ApiResponse<void>>(API_ROUTES.PRODUCTS.DELETE(id));
  
  if (!response.data.success) {
    throw new Error(response.data.message);
  }
  
  return response.data;
};

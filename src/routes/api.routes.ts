// src/constants/api.routes.ts

export const API_ROUTES = {
  AUTH: {
    REGISTER: "/auth/register",
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    ME: "/auth/me",
    REFRESH: "/auth/refresh",
  },

  USERS: {
    GET_ALL: "/users",
    GET_BY_ID: (id: string) => `/users/${id}`,
    CREATE: "/users",
    UPDATE: (id: string) => `/users/${id}`,
    DELETE: (id: string) => `/users/${id}`,
  },

  BOOKINGS: {
    GET_ALL: "/bookings",
    TODAY: "/bookings/today",
    COMPLETED: "/bookings/completed",
  },

  SERVICES: {
    GET_ALL: "/services",
    CREATE: "/services",
    UPDATE: (id: string) => `/services/${id}`,
  },

  PRODUCTS: {
    GET_ALL: "/products",
    GET_BY_ID: (id: string) => `/products/${id}`,
    CREATE: "/products",
    UPDATE: (id: string) => `/products/${id}`,
    DELETE: (id: string) => `/products/${id}`,
  },

  JOBS: {
    GET_ALL: "/jobs",
    GET_BY_ID: (id: string) => `/jobs/${id}`,
    CREATE: "/jobs",
    UPDATE: (id: string) => `/jobs/${id}`,
    DELETE: (id: string) => `/jobs/${id}`,
  },

  SUBMISSIONS: {
    GET_ALL: "/contacts",
    GET_BY_ID: (id: string) => `/contacts/${id}`,
    CREATE: "/contacts",
    UPDATE: (id: string) => `/contacts/${id}`,
    DELETE: (id: string) => `/contacts/${id}`,
    MARK_AS_READ: (id: string) => `/contacts/${id}/read`,
  },

  CONTENT: {
    GET_ALL: "/content",
    GET_BY_PAGE: (page: string) => `/content/page/${page}`,
    GET_BY_ID: (id: string) => `/content/${id}`,
    CREATE: "/content",
    UPDATE: (id: string) => `/content/${id}`,
    DELETE: (id: string) => `/content/${id}`,
  },
};

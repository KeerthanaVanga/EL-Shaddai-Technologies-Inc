import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastProvider } from "./components/ui/Toast";
import RootLayout from "./components/layout/RootLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import WhyUsPage from "./pages/WhyUsPage";
import CareersPage from "./pages/CareersPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/TanStack";

const router = createBrowserRouter([
  // ── Public site (with navbar + footer) ──
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "careers", element: <CareersPage /> },
      { path: "why-us", element: <WhyUsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  // ── Admin (standalone, no public navbar/footer) ──
  { path: "/admin", element: <AdminLoginPage /> },
  { path: "/admin/dashboard", element: <AdminDashboardPage /> },
]);

export default function App() {
  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ToastProvider>
  );
}

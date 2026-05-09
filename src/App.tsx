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

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true,         element: <HomePage /> },
      { path: "about",       element: <AboutPage /> },
      { path: "services",    element: <ServicesPage /> },
      { path: "products",    element: <ProductsPage /> },
      { path: "careers",     element: <CareersPage /> },
      { path: "why-us",      element: <WhyUsPage /> },
      { path: "contact",     element: <ContactPage /> },
      { path: "admin",       element: <AdminLoginPage /> },
      { path: "*",           element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return (
    <ToastProvider>
      <RouterProvider router={router} />
    </ToastProvider>
  );
}

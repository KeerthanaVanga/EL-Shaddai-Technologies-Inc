import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { company } from "../../config/company";

export default function RootLayout() {
  const { pathname } = useLocation();
  
  useEffect(() => { 
    window.scrollTo({ top: 0, behavior: "smooth" }); 
    
    // Update document title dynamically
    const currentLink = company.navLinks.find(link => link.href === pathname);
    if (currentLink && currentLink.href !== "/") {
      document.title = `${currentLink.label} | ${company.name}`;
    } else {
      document.title = company.name;
    }
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1"><Outlet /></div>
      <Footer />
    </div>
  );
}

import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BookingModalProvider } from "./components/BookingModalContext";
import { BookingModal } from "./components/BookingModal";
import { ScrollToHash } from "./components/ScrollToHash";
import Home from "./pages/Home";
import TreatmentPage from "./pages/TreatmentPage";
import AllServices from "./pages/AllServices";

// Extend the Window interface for TypeScript support
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_TRACKING_ID = "AW-18433213089";

function GoogleTagTracker() {
  const location = useLocation();

  // 1. Load the Google Tag script once when the app mounts
  useEffect(() => {
    // Prevent duplicate script injection
    if (!document.querySelector(`script[src*="${GA_TRACKING_ID}"]`)) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script);
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };

    window.gtag("js", new Date());
    window.gtag("config", GA_TRACKING_ID);
  }, []);

  // 2. Track page views whenever the React Router path changes
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <GoogleTagTracker />
      <BookingModalProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<AllServices />} />
            <Route path="/treatments/:slug" element={<TreatmentPage />} />
          </Routes>
          <Footer />
          <BookingModal />
        </div>
      </BookingModalProvider>
    </BrowserRouter>
  );
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BookingModalProvider } from "./components/BookingModalContext";
import { BookingModal } from "./components/BookingModal";
import { ScrollToHash } from "./components/ScrollToHash";
import Home from "./pages/Home";
import TreatmentPage from "./pages/TreatmentPage";

export default function App() {
  return (
    <BrowserRouter>
      <BookingModalProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/treatments/:slug" element={<TreatmentPage />} />
          </Routes>
          <Footer />
          <BookingModal />
        </div>
      </BookingModalProvider>
    </BrowserRouter>
  );
}

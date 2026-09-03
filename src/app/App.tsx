import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Mission } from "./components/Mission";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { BookingModalProvider } from "./components/BookingModalContext";
import { BookingModal } from "./components/BookingModal";
import { WhatsAppFAB } from "./components/WhatsAppFAB";

export default function App() {
  return (
    <BookingModalProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <Mission />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
        <BookingModal />
        <WhatsAppFAB />
      </div>
    </BookingModalProvider>
  );
}

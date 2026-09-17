"use client";
import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type BookingModalContextValue = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const BookingModalContext = createContext<BookingModalContextValue | null>(null);

const BOOKING_HASH = "#book-appointment";

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const openModal = useCallback(() => {
    setIsOpen(true);
    if (location.hash !== BOOKING_HASH) {
      navigate(
        { pathname: location.pathname, search: location.search, hash: "book-appointment" },
        { replace: false }
      );
    }
  }, [navigate, location.pathname, location.search, location.hash]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    if (location.hash === BOOKING_HASH) {
      navigate({ pathname: location.pathname, search: location.search }, { replace: true });
    }
  }, [navigate, location.pathname, location.search, location.hash]);

  return (
    <BookingModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return ctx;
}

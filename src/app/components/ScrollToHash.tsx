"use client";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useBookingModal } from "./BookingModalContext";

export function ScrollToHash() {
  const location = useLocation();
  const { openModal } = useBookingModal();
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    if (location.hash === "#book-appointment") {
      openModal();
      return;
    }

    const pathnameChanged = prevPathname.current !== location.pathname;
    prevPathname.current = location.pathname;

    if (!location.hash) {
      // Only reset scroll on an actual page change — clearing the hash on the
      // same page (e.g. closing the booking modal) shouldn't jump the user.
      if (pathnameChanged) {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      }
      return;
    }

    const id = location.hash.slice(1);
    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (!el) return false;
      const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
      window.scrollTo({ top, behavior: "smooth" });
      return true;
    };

    if (!scrollToTarget()) {
      const timer = setTimeout(scrollToTarget, 120);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash, location.key]);

  return null;
}

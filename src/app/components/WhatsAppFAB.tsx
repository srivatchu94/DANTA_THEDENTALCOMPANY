"use client";
import { useBookingModal } from "./BookingModalContext";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="currentColor" aria-hidden="true">
      <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.373.68 4.588 1.857 6.457L4 29l7.73-1.815A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.7a9.63 9.63 0 0 1-4.906-1.34l-.352-.21-4.59 1.078 1.096-4.472-.23-.366A9.63 9.63 0 0 1 5.3 15c0-5.905 4.8-10.7 10.704-10.7 5.903 0 10.7 4.795 10.7 10.7 0 5.905-4.797 10.7-10.7 10.7Zm5.86-8.01c-.32-.16-1.895-.936-2.19-1.043-.294-.107-.508-.16-.722.16-.213.32-.827 1.043-1.014 1.258-.187.213-.374.24-.694.08-.32-.16-1.35-.498-2.572-1.588-.951-.848-1.593-1.895-1.78-2.215-.187-.32-.02-.493.14-.653.144-.144.32-.374.48-.56.16-.187.213-.32.32-.534.107-.213.053-.4-.027-.56-.08-.16-.722-1.74-.99-2.383-.26-.626-.526-.541-.722-.55l-.615-.011c-.213 0-.56.08-.854.4-.294.32-1.12 1.096-1.12 2.674s1.147 3.102 1.307 3.316c.16.213 2.257 3.446 5.47 4.833.764.33 1.36.527 1.825.674.767.244 1.465.21 2.017.127.615-.092 1.895-.775 2.163-1.522.267-.748.267-1.388.187-1.522-.08-.133-.293-.213-.613-.373Z" />
    </svg>
  );
}

export function WhatsAppFAB() {
  const { openModal } = useBookingModal();

  return (
    <button
      onClick={openModal}
      aria-label="Book an appointment via WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-0 rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-105"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
      <span className="relative flex items-center gap-0 overflow-hidden rounded-full">
        <span className="flex items-center justify-center w-14 h-14 flex-shrink-0">
          <WhatsAppIcon />
        </span>
        <span className="max-w-0 group-hover:max-w-[10rem] overflow-hidden whitespace-nowrap text-sm tracking-wide transition-all duration-300 group-hover:pr-5">
          Book on WhatsApp
        </span>
      </span>
    </button>
  );
}

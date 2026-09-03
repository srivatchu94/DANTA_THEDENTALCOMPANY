"use client";
import { useState } from "react";
import { User, Phone, Stethoscope, Send, CheckCircle2, X, AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
} from "./ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useBookingModal } from "./BookingModalContext";
import { CONTACT_WHATSAPP_NUMBER } from "./contact-info";

type Status = "idle" | "submitting" | "sent" | "error";

export function BookingModal() {
  const { isOpen, closeModal } = useBookingModal();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [problem, setProblem] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function reset() {
    setName("");
    setPhone("");
    setProblem("");
    setStatus("idle");
  }

  function handleOpenChange(open: boolean) {
    if (!open) {
      closeModal();
      setTimeout(reset, 300);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !problem.trim()) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim(), problem: problem.trim() }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      setTimeout(() => {
        closeModal();
        setTimeout(reset, 300);
      }, 2200);
    } catch {
      setStatus("error");
    }
  }

  function fallbackWhatsAppUrl() {
    const lines = [
      "Hello Danta – The Dental Company! I'd like to book an appointment.",
      "",
      `*Name:* ${name.trim()}`,
      `*Phone:* ${phone.trim()}`,
      `*Concern:* ${problem.trim()}`,
    ];
    return `https://wa.me/${CONTACT_WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-black/50 backdrop-blur-sm" />
        <DialogPrimitive.Content
          className="fixed top-[50%] left-[50%] z-50 w-full max-w-[calc(100%-2rem)] sm:max-w-md translate-x-[-50%] translate-y-[-50%] rounded-2xl border border-[#e5d9cf] bg-[#fdfaf6] shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#c4975a]/12 rounded-full blur-[80px] pointer-events-none" />

          {/* Header */}
          <div className="relative flex items-start justify-between px-7 pt-7 pb-5 border-b border-[#e5d9cf]">
            <div>
              <div className="inline-flex items-center gap-2 border border-[#c4975a]/40 px-3.5 py-1 rounded-full mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c4975a] animate-pulse" />
                <span className="text-[10px] text-[#8a7060] tracking-widest uppercase">Book an Appointment</span>
              </div>
              <DialogPrimitive.Title
                className="text-2xl text-[#2a1f1a] leading-tight"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                Let&apos;s Get You <span className="italic text-[#c4975a]">Scheduled</span>
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="text-[#8a7060] text-sm mt-1.5">
                Share a few details and our team will get in touch to book your appointment.
              </DialogPrimitive.Description>
            </div>
            <DialogClose className="w-9 h-9 flex-shrink-0 rounded-xl border border-[#e5d9cf] flex items-center justify-center text-[#8a7060] hover:text-[#2a1f1a] hover:border-[#c4975a]/50 transition-all duration-200">
              <X className="w-4 h-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>

          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center gap-4 py-16 px-8">
              <div className="w-16 h-16 rounded-full bg-[#c4975a]/10 border border-[#c4975a]/30 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#c4975a]" />
              </div>
              <p className="text-[#2a1f1a] text-lg" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                Request Sent!
              </p>
              <p className="text-[#8a7060] text-sm text-center max-w-xs">
                Our team will get in touch with you on WhatsApp shortly to confirm your appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-7 space-y-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs text-[#8a7060] tracking-widest uppercase flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-[#c4975a]" />
                  Your Name <span className="text-[#c4975a]">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Priya Sundaram"
                  required
                  className="bg-white border border-[#e5d9cf] focus:border-[#c4975a] rounded-xl px-4 py-3 text-sm text-[#2a1f1a] placeholder-[#b5a090] outline-none transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-[#8a7060] tracking-widest uppercase flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#c4975a]" />
                  Phone Number <span className="text-[#c4975a]">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 98765 43210"
                  required
                  className="bg-white border border-[#e5d9cf] focus:border-[#c4975a] rounded-xl px-4 py-3 text-sm text-[#2a1f1a] placeholder-[#b5a090] outline-none transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-[#8a7060] tracking-widest uppercase flex items-center gap-2">
                  <Stethoscope className="w-3.5 h-3.5 text-[#c4975a]" />
                  Concern / Problem <span className="text-[#c4975a]">*</span>
                </label>
                <textarea
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  placeholder="Tell us briefly what's troubling you…"
                  required
                  rows={3}
                  className="bg-white border border-[#e5d9cf] focus:border-[#c4975a] rounded-xl px-4 py-3 text-sm text-[#2a1f1a] placeholder-[#b5a090] outline-none transition-colors duration-200 resize-none"
                />
              </div>

              {status === "error" && (
                <div className="flex items-start gap-2.5 bg-[#7c2d3e]/8 border border-[#7c2d3e]/25 rounded-xl px-4 py-3">
                  <AlertCircle className="w-4 h-4 text-[#7c2d3e] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-[#7c2d3e] leading-relaxed">
                    We couldn&apos;t send that automatically.{" "}
                    <a
                      href={fallbackWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-medium"
                    >
                      Message us directly on WhatsApp
                    </a>{" "}
                    instead.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={!name.trim() || !phone.trim() || !problem.trim() || status === "submitting"}
                className="group relative w-full overflow-hidden bg-[#25D366] disabled:opacity-40 disabled:cursor-not-allowed text-white px-8 py-3.5 rounded-xl shadow-md hover:shadow-[#25D366]/30 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2.5"
              >
                <Send className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform duration-300" />
                <span className="text-sm tracking-wide relative z-10">
                  {status === "submitting" ? "Sending…" : "Book Appointment"}
                </span>
              </button>
            </form>
          )}
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}

"use client";
import { useState } from "react";
import { User, Phone, Stethoscope, Send, CheckCircle2, X, AlertCircle, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
} from "./ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useBookingModal } from "./BookingModalContext";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from "./contact-info";

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
      }, 3200);
    } catch {
      setStatus("error");
    }
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
                For enquiries, share your details below — or call us directly for immediate assistance.
              </DialogPrimitive.Description>
            </div>
            <DialogClose className="w-9 h-9 flex-shrink-0 rounded-xl border border-[#e5d9cf] flex items-center justify-center text-[#8a7060] hover:text-[#2a1f1a] hover:border-[#c4975a]/50 transition-all duration-200">
              <X className="w-4 h-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>

          {status !== "sent" && (
            <div className="px-7 pt-5">
              <a
                href={CONTACT_PHONE_TEL}
                className="group flex items-center justify-between gap-4 bg-[#7c2d3e]/8 border border-[#7c2d3e]/25 hover:border-[#7c2d3e]/45 hover:bg-[#7c2d3e]/12 rounded-xl pl-4 pr-5 py-3.5 transition-all duration-300"
              >
                <div className="flex items-center gap-3.5">
                  <div className="relative w-11 h-11 rounded-full bg-[#7c2d3e] flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone className="w-5 h-5 text-white" />
                    <span className="absolute inset-0 rounded-full bg-[#7c2d3e] animate-ping opacity-30 pointer-events-none" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#7c2d3e] uppercase tracking-widest font-semibold mb-0.5">
                      Prefer to talk right away?
                    </p>
                    <p className="text-lg text-[#2a1f1a] font-extrabold tracking-wide group-hover:text-[#7c2d3e] transition-colors">
                      {CONTACT_PHONE_DISPLAY}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#7c2d3e] flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <div className="flex items-center gap-3 mt-5">
                <div className="h-px flex-1 bg-[#e5d9cf]" />
                <span className="text-[10px] text-[#b5a090] uppercase tracking-widest">Or send us your details</span>
                <div className="h-px flex-1 bg-[#e5d9cf]" />
              </div>
            </div>
          )}

          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center gap-4 py-16 px-8">
              <div className="w-16 h-16 rounded-full bg-[#c4975a]/10 border border-[#c4975a]/30 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#c4975a]" />
              </div>
              <p className="text-[#2a1f1a] text-lg" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                Thank You!
              </p>
              <p className="text-[#8a7060] text-sm text-center max-w-xs leading-relaxed">
                Your details have been received. Our team will get in touch with you shortly to book your appointment — you can expect a quick call from us soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="px-7 pt-5 pb-7 space-y-5">
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
                    We couldn&apos;t send that automatically. Please{" "}
                    <a href={CONTACT_PHONE_TEL} className="underline font-medium">
                      call us directly at {CONTACT_PHONE_DISPLAY}
                    </a>{" "}
                    instead.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={!name.trim() || !phone.trim() || !problem.trim() || status === "submitting"}
                className="group relative w-full overflow-hidden bg-[#c4975a] disabled:opacity-40 disabled:cursor-not-allowed text-white px-8 py-3.5 rounded-xl shadow-md hover:shadow-[#c4975a]/30 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2.5"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#b8844a] to-[#d4a86a] opacity-0 group-hover:opacity-100 transition-opacity" />
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

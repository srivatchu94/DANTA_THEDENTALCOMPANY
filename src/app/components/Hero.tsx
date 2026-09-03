import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, TrendingUp, Crown, Star, ArrowRight } from "lucide-react";
import { useBookingModal } from "./BookingModalContext";

export function Hero() {
  const { openModal } = useBookingModal();
  return (
    <section id="home" className="relative overflow-hidden bg-[#faf5ef] pt-36 md:pt-48 pb-24">
      {/* Subtle warm background orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c4975a]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7c2d3e]/6 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative top ornament line */}
      <div className="absolute top-[130px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4975a]/20 to-transparent" />

      <div className="w-full px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white border border-[#e5d9cf] px-5 py-2.5 rounded-full shadow-sm">
              <div className="flex -space-x-1.5">
                {["#c4975a", "#7c2d3e", "#b5a090"].map((c, i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white" style={{ backgroundColor: c }} />
                ))}
              </div>
              <span className="text-xs text-[#8a7060] tracking-wide">Bespoke Dental Artistry in Chennai</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#c4975a]" />
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="leading-[1.1]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                <span className="block text-6xl lg:text-7xl text-[#2a1f1a]">Craft Your</span>
                <span className="block text-6xl lg:text-7xl italic text-[#c4975a]">Perfect</span>
                <span className="block text-6xl lg:text-7xl text-[#2a1f1a]">Smile</span>
              </h1>
              <p className="text-lg text-[#8a7060] max-w-md leading-relaxed pt-2">
                Where artistry meets clinical excellence. Danta delivers bespoke dental care with precision, warmth, and an unwavering commitment to beauty.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button onClick={openModal} className="group relative overflow-hidden bg-[#2a1f1a] text-[#d4b896] px-9 py-4 rounded-xl shadow-lg hover:shadow-[#2a1f1a]/30 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center gap-3">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3a2f2a] to-[#2a1f1a] opacity-0 group-hover:opacity-100 transition-opacity" />
                <Calendar className="w-5 h-5 relative z-10 group-hover:rotate-6 transition-transform duration-300" />
                <span className="relative z-10 text-base tracking-wide">Book Appointment</span>
              </button>
              <button className="group bg-white text-[#2a1f1a] px-9 py-4 rounded-xl border-2 border-[#e5d9cf] hover:border-[#c4975a] transition-all duration-300 flex items-center gap-3 hover:shadow-md">
                <span className="text-base tracking-wide">Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-[#c4975a]" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { icon: TrendingUp, value: "98%", label: "Success Rate", color: "#c4975a" },
                { icon: Crown, value: "6+", label: "Years Exp.", color: "#7c2d3e" },
                { icon: Star, value: "5.0", label: "Patient Rating", color: "#b5a090" },
              ].map(({ icon: Icon, value, label, color }, i) => (
                <div key={i} className="group bg-white rounded-2xl p-4 border border-[#e5d9cf] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <Icon className="w-4 h-4 mb-2" style={{ color }} />
                  <p className="text-2xl font-semibold" style={{ color, fontFamily: "var(--font-heading)" }}>{value}</p>
                  <p className="text-xs text-[#8a7060] mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative group">
            {/* Warm glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#c4975a]/20 via-[#7c2d3e]/10 to-[#c4975a]/20 rounded-[3rem] blur-3xl group-hover:blur-2xl transition-all duration-700" />

            <div className="relative">
              {/* Gold border frame */}
              <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-br from-[#c4975a] via-[#d4b896] to-[#c4975a] opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative bg-[#fdfaf6] rounded-[2rem] p-2.5 shadow-2xl">
                <div className="overflow-hidden rounded-[1.7rem]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1764004450351-37fb72cb8e8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBtb2Rlcm58ZW58MXx8fHwxNzY1OTA3NTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Modern dental clinic"
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Floating rating card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl px-6 py-4 shadow-xl border border-[#e5d9cf] flex items-center gap-4 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-[#7c2d3e]/10 border border-[#7c2d3e]/20 flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#7c2d3e] fill-[#7c2d3e]" />
                </div>
                <div>
                  <p className="text-xs text-[#8a7060] mb-0.5">Patient Rating</p>
                  <p className="text-sm font-semibold text-[#2a1f1a]" style={{ fontFamily: "var(--font-heading)" }}>5.0 · Excellent</p>
                </div>
              </div>

              {/* Floating tech badge */}
              <div className="absolute -top-6 -right-6 bg-[#2a1f1a] text-[#d4b896] rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-[#c4975a] animate-pulse" />
                <div>
                  <p className="text-[10px] text-[#d4b896]/60 uppercase tracking-wider">Technology</p>
                  <p className="text-xs font-medium">Next Gen Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ornament */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4975a]/20 to-transparent" />
    </section>
  );
}

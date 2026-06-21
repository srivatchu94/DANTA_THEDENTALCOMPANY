import { Calendar, Phone, Mail, MapPin, Clock } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-[#2a1f1a]">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #c4975a 1px, transparent 0)", backgroundSize: "40px 40px" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4975a]/40 to-transparent" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-[#c4975a]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-[#7c2d3e]/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="w-full px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 border border-[#c4975a]/40 px-5 py-2 rounded-full mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c4975a] animate-pulse" />
              <span className="text-xs text-[#d4b896]/70 tracking-widest uppercase">Ready to Start?</span>
            </div>

            <h2 className="text-5xl lg:text-6xl leading-tight mb-6 text-white" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
              Transform<br />
              <span className="italic text-[#c4975a]">Your Smile</span><br />
              Today
            </h2>

            <p className="text-[#8a7060] leading-relaxed mb-10 max-w-md">
              Book your appointment and experience the difference of professional, compassionate dental care delivered with warmth and precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <button className="group relative overflow-hidden bg-[#c4975a] text-white px-9 py-4 rounded-xl shadow-lg hover:shadow-[#c4975a]/30 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3">
                <div className="absolute inset-0 bg-gradient-to-r from-[#b8844a] to-[#d4a86a] opacity-0 group-hover:opacity-100 transition-opacity" />
                <Calendar className="w-5 h-5 relative z-10 group-hover:rotate-6 transition-transform duration-300" />
                <span className="relative z-10 text-sm tracking-wide">Schedule Appointment</span>
              </button>
              <button className="group border border-[#c4975a]/40 text-[#d4b896] px-9 py-4 rounded-xl hover:border-[#c4975a] hover:bg-[#c4975a]/10 transition-all duration-300 flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 group-hover:rotate-6 transition-transform duration-300" />
                <span className="text-sm tracking-wide">Call Us Now</span>
              </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "15K+", label: "Happy Patients" },
                { value: "6+", label: "Years Exp." },
                { value: "98%", label: "Satisfaction" },
                { value: "50+", label: "Specialists" },
              ].map((stat, i) => (
                <div key={i} className="group cursor-pointer">
                  <p className="text-3xl text-[#c4975a] mb-1 group-hover:scale-110 transition-transform origin-left" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-[#8a7060] uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-[#c4975a]/30 to-[#7c2d3e]/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative bg-[#fdfaf6] rounded-2xl p-8 shadow-2xl border border-[#e5d9cf]">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#c4975a]/10 border border-[#c4975a]/30 rounded-2xl mb-4">
                  <MapPin className="w-8 h-8 text-[#c4975a]" />
                </div>
                <h3 className="text-2xl text-[#2a1f1a] mb-1" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>Visit Us Today</h3>
                <p className="text-sm text-[#8a7060]">We&apos;d love to see you smile</p>
              </div>

              <div className="space-y-3">
                {[
                  { icon: MapPin, label: "Location", value: "S.No.271/15, 2/387A, First Floor, Sathyavani Muthu Street, Gerugambakkam Main Road, Chennai – 600128", accent: "#c4975a" },
                  { icon: Phone, label: "Phone", value: "+91 80560 10278", accent: "#7c2d3e" },
                  { icon: Mail, label: "Email", value: "info@danta.com", accent: "#b5a090" },
                ].map(({ icon: Icon, label, value, accent }, i) => (
                  <div key={i} className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-[#f3ece4] transition-colors duration-200 cursor-pointer">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: `${accent}12`, border: `1.5px solid ${accent}30` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: accent }} />
                    </div>
                    <div>
                      <p className="text-[11px] text-[#8a7060] uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-sm text-[#2a1f1a]">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-[#f3ece4] rounded-xl p-5 border border-[#e5d9cf]">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-[#c4975a]" />
                  <h4 className="text-sm text-[#2a1f1a]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>Office Hours</h4>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    ["Monday – Friday", "8:00 AM – 6:00 PM"],
                    ["Saturday", "9:00 AM – 4:00 PM"],
                    ["Sunday", "Closed"],
                  ].map(([day, hours], i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-[#8a7060]">{day}</span>
                      <span className={hours === "Closed" ? "text-[#7c2d3e]" : "text-[#2a1f1a]"}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4975a]/40 to-transparent" />
    </section>
  );
}

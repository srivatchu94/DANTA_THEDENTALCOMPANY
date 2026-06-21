import { Smile, Shield, Sparkles, Scan, Stethoscope, Heart, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "General Dentistry",
    description: "Comprehensive checkups, cleanings & preventive care to maintain your oral health.",
    accent: "#c4975a",
    bg: "#fdf8f2",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with whitening, veneers & advanced aesthetic procedures.",
    accent: "#7c2d3e",
    bg: "#fdf2f4",
  },
  {
    icon: Shield,
    title: "Restorative Care",
    description: "Dental implants, crowns & bridges to restore both function and beauty.",
    accent: "#b5a090",
    bg: "#f9f5f2",
  },
  {
    icon: Scan,
    title: "Digital Imaging",
    description: "State-of-the-art 3D scanning for precise diagnosis and treatment planning.",
    accent: "#c4975a",
    bg: "#fdf8f2",
  },
  {
    icon: Stethoscope,
    title: "Orthodontics",
    description: "Braces and clear aligners to perfectly align your teeth and bite.",
    accent: "#7c2d3e",
    bg: "#fdf2f4",
  },
  {
    icon: Heart,
    title: "Emergency Care",
    description: "Same-day urgent appointments for dental emergencies and pain relief.",
    accent: "#b5a090",
    bg: "#f9f5f2",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 bg-[#f3ece4] overflow-hidden">
      {/* Background ornaments */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4975a]/30 to-transparent" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-[#c4975a]/6 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#7c2d3e]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="w-full px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-white border border-[#e5d9cf] px-5 py-2 rounded-full mb-6 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c4975a]" />
            <span className="text-xs text-[#8a7060] tracking-widest uppercase">Our Services</span>
          </div>
          <h2 className="text-5xl lg:text-6xl leading-tight mb-5 text-[#2a1f1a]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
            Comprehensive<br />
            <span className="italic text-[#c4975a]">Dental Solutions</span>
          </h2>
          <p className="text-[#8a7060] leading-relaxed">
            From routine care to advanced procedures, we offer everything you need for a healthy, radiant smile.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div
                className="relative h-full rounded-2xl p-8 border border-[#e5d9cf] hover:border-transparent hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
                style={{ backgroundColor: service.bg }}
              >
                {/* Hover glow layer */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ boxShadow: `inset 0 0 0 1.5px ${service.accent}40` }}
                />
                {/* Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />

                {/* Icon */}
                <div className="mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-400"
                    style={{ backgroundColor: `${service.accent}15`, border: `1.5px solid ${service.accent}30` }}
                  >
                    <service.icon className="w-7 h-7" style={{ color: service.accent }} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-xl mb-3 text-[#2a1f1a]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                  {service.title}
                </h3>
                <p className="text-sm text-[#8a7060] leading-relaxed mb-6">{service.description}</p>

                <button className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300" style={{ color: service.accent }}>
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                </button>

                {/* Decorative corner shape */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-[60px] rounded-tr-2xl opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ backgroundColor: service.accent }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#8a7060] text-sm mb-5">Explore our full range of specialized treatments</p>
          <button className="group bg-[#2a1f1a] text-[#d4b896] px-9 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center gap-3 mx-auto">
            <span className="text-sm tracking-wide">View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4975a]/30 to-transparent" />
    </section>
  );
}

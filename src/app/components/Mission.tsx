import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Target, Zap, Users, CheckCircle2, Award, Star, Shield } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Patient-Centered Care",
    description: "Your comfort and satisfaction drive everything we do, every single day.",
    accent: "#c4975a",
  },
  {
    icon: Zap,
    title: "Advanced Technology",
    description: "Cutting-edge equipment for precise, efficient, and painless treatments.",
    accent: "#7c2d3e",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly qualified professionals passionate about your oral health journey.",
    accent: "#b5a090",
  },
];

const commitments = [
  "Digital transformation in comprehensive patient care delivery",
  "Empowering dental professionals with efficient management systems",
  "Ensuring maximum data security and patient privacy protection",
  "Fostering continuous innovation in dental healthcare excellence",
];

export function Mission() {
  return (
    <section id="mission" className="relative py-28 bg-[#faf5ef] overflow-hidden">
      <div className="absolute top-20 left-20 w-80 h-80 bg-[#c4975a]/7 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#7c2d3e]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="w-full px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Image collage */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-7 relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-[#c4975a]/30 to-[#7c2d3e]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-2xl border-2 border-[#e5d9cf] shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwc21pbGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjU4OTQ3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Professional dentist"
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="col-span-5 flex items-start">
                <div className="bg-[#2a1f1a] rounded-2xl p-6 text-center w-full shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <Award className="w-10 h-10 text-[#c4975a] mx-auto mb-3" />
                  <p className="text-4xl text-[#d4b896]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>6+</p>
                  <p className="text-[10px] text-[#8a7060] mt-1 uppercase tracking-wider">Years Excellence</p>
                </div>
              </div>

              <div className="col-span-5 relative group">
                <div className="relative overflow-hidden rounded-2xl border-2 border-[#e5d9cf] shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1655636248613-37fe4583a573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjYXJlJTIwdG9vdGh8ZW58MXx8fHwxNzY1OTcyMzE3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Dental care"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="col-span-7 relative group">
                <div className="relative overflow-hidden rounded-2xl border-2 border-[#e5d9cf] shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1765222385024-5d7304e609f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzY1ODY4OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Medical team"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-8 py-5 shadow-xl border border-[#e5d9cf] flex items-center gap-8 hover:scale-105 transition-transform duration-300 cursor-pointer whitespace-nowrap">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-[#7c2d3e] fill-[#7c2d3e]" />
                <div>
                  <p className="text-xl text-[#c4975a]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>5.0</p>
                  <p className="text-[10px] text-[#8a7060] uppercase tracking-wider">Patient Rating</p>
                </div>
              </div>
              <div className="w-px h-10 bg-[#e5d9cf]" />
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#c4975a]" />
                <div>
                  <p className="text-xl text-[#7c2d3e]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>98%</p>
                  <p className="text-[10px] text-[#8a7060] uppercase tracking-wider">Success Rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-white border border-[#e5d9cf] px-5 py-2 rounded-full mb-6 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#7c2d3e]" />
              <span className="text-xs text-[#8a7060] tracking-widest uppercase">Our Mission</span>
            </div>

            <h2 className="text-5xl lg:text-6xl leading-tight mb-6 text-[#2a1f1a]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
              Transforming<br />
              <span className="italic text-[#c4975a]">Dental Care</span><br />
              with Innovation
            </h2>

            <p className="text-[#8a7060] leading-relaxed mb-10">
              We provide comprehensive and compassionate dental care through innovative technology, making healthcare seamless for practitioners and accessible for every patient.
            </p>

            {/* Feature cards */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="group flex items-start gap-5 bg-white rounded-2xl p-5 border border-[#e5d9cf] hover:border-[#c4975a]/40 hover:shadow-md transition-all duration-300">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${feature.accent}12`, border: `1.5px solid ${feature.accent}30` }}
                  >
                    <feature.icon className="w-5 h-5" style={{ color: feature.accent }} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#2a1f1a] mb-1" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>{feature.title}</h4>
                    <p className="text-sm text-[#8a7060] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Commitments */}
            <div className="bg-[#2a1f1a] rounded-2xl p-7 shadow-lg">
              <div className="flex items-center gap-3 mb-5">
                <CheckCircle2 className="w-5 h-5 text-[#c4975a]" />
                <h4 className="text-[#d4b896]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>Our Commitments</h4>
              </div>
              <ul className="space-y-3">
                {commitments.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c4975a] mt-2 flex-shrink-0" />
                    <span className="text-sm text-[#8a7060] leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

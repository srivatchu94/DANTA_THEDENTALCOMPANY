import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoSrc from "@/imports/unnamed__1_.jpg";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, CONTACT_EMAIL, CONTACT_EMAIL_HREF, CONTACT_INSTAGRAM_URL } from "./contact-info";

export function Footer() {
  return (
    <footer className="relative bg-[#1e1410] text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c4975a]/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7c2d3e]/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="w-full px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#c4975a]/50 shadow-md flex-shrink-0">
                <ImageWithFallback src={logoSrc} alt="Danta logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg text-white" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>Danta</h3>
                <p className="text-[10px] text-[#8a7060] tracking-[0.15em] uppercase">The Dental Company</p>
              </div>
            </div>
            <p className="text-[#8a7060] text-sm leading-relaxed mb-6">
              Your trusted partner for comprehensive dental care and beautiful, lasting smiles. Excellence in every visit.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: CONTACT_INSTAGRAM_URL },
                { icon: Linkedin, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="w-9 h-9 rounded-lg border border-[#c4975a]/20 flex items-center justify-center text-[#8a7060] hover:text-[#c4975a] hover:border-[#c4975a]/50 transition-all duration-200 hover:scale-110">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-sm mb-5 flex items-center gap-2" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
              <span className="w-0.5 h-5 bg-[#c4975a] rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {["Home", "Services", "Mission", "Contact", "Blog", "Careers"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-[#8a7060] hover:text-[#c4975a] transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-[#c4975a]/40 rounded-full group-hover:bg-[#c4975a] transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm mb-5 flex items-center gap-2" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
              <span className="w-0.5 h-5 bg-[#7c2d3e] rounded-full" />
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {["General Dentistry", "Cosmetic Dentistry", "Orthodontics", "Restorative Care", "Digital Imaging", "Emergency Care"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-[#8a7060] hover:text-[#c4975a] transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-[#7c2d3e]/40 rounded-full group-hover:bg-[#c4975a] transition-colors" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm mb-5 flex items-center gap-2" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
              <span className="w-0.5 h-5 bg-[#b5a090] rounded-full" />
              Get in Touch
            </h4>
            <ul className="space-y-4">
              {[
                { icon: MapPin, value: "S.No.271/15, 2/387A, First Floor, Sathyavani Muthu Street, Gerugambakkam Main Road, Chennai – 600128", color: "#c4975a", href: undefined },
                { icon: Phone, value: CONTACT_PHONE_DISPLAY, color: "#7c2d3e", href: CONTACT_PHONE_TEL },
                { icon: Mail, value: CONTACT_EMAIL, color: "#b5a090", href: CONTACT_EMAIL_HREF },
              ].map(({ icon: Icon, value, color, href }, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-[#c4975a]/30 transition-colors">
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>
                  {href ? (
                    <a href={href} className="text-sm text-[#8a7060] hover:text-[#c4975a] leading-relaxed pt-1 transition-colors">{value}</a>
                  ) : (
                    <p className="text-sm text-[#8a7060] leading-relaxed pt-1">{value}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#8a7060] text-xs flex items-center gap-2">
              © 2024 Danta — The Dental Company. Made with
              <Heart className="w-3.5 h-3.5 text-[#7c2d3e] fill-[#7c2d3e]" />
              for your smile.
            </p>
            <div className="flex items-center gap-5">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l, i, arr) => (
                <span key={l} className="flex items-center gap-5">
                  <a href="#" className="text-[#8a7060] hover:text-[#c4975a] text-xs transition-colors">{l}</a>
                  {i < arr.length - 1 && <span className="text-[#3a2f2a]">·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

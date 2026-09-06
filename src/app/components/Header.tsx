"use client";
import { Phone, Mail, Clock, Calendar, Home, Briefcase, Target, MessageCircle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import clinicLogo from "@/imports/Clinic_Logo.jpg";
import { useBookingModal } from "./BookingModalContext";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, CONTACT_EMAIL, CONTACT_EMAIL_HREF } from "./contact-info";

export function Header() {
  const { openModal } = useBookingModal();
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "services", "mission", "testimonials", "contact"];
      const scrollMid = window.scrollY + window.innerHeight * 0.35;
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollMid) {
          setActiveTab(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "mission", label: "Mission", icon: Target },
    { id: "contact", label: "Contact", icon: MessageCircle },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── Top contact strip ── */}
      <div className="relative bg-[#2a1f1a] overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg,#c4975a 0,#c4975a 1px,transparent 0,transparent 40px)",
          }}
        />
        <div className="relative w-full px-4">
          <div className="flex items-center justify-between py-2.5">
            <div className="flex items-center gap-5">
              <a href={CONTACT_PHONE_TEL} className="group flex items-center gap-2 text-[#d4b896]/80 hover:text-[#c4975a] transition-colors duration-300">
                <div className="w-7 h-7 rounded-lg border border-[#c4975a]/25 flex items-center justify-center group-hover:border-[#c4975a]/60 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs tracking-wide">{CONTACT_PHONE_DISPLAY}</span>
              </a>
              <a href={CONTACT_EMAIL_HREF} className="hidden sm:flex items-center gap-2 text-[#d4b896]/80 hover:text-[#c4975a] transition-colors duration-300 group">
                <div className="w-7 h-7 rounded-lg border border-[#c4975a]/25 flex items-center justify-center group-hover:border-[#c4975a]/60 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs tracking-wide">{CONTACT_EMAIL}</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-[#d4b896]/70">
              <Clock className="w-3.5 h-3.5 text-[#c4975a]" />
              <span className="text-xs tracking-wide">Mon–Sat: 10AM – 8PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main nav bar ── */}
      <div className={`transition-all duration-500 ${
        scrolled
          ? "bg-[#faf5ef]/92 backdrop-blur-2xl shadow-lg shadow-[#c4975a]/10 border-b border-[#e5d9cf]"
          : "bg-[#faf5ef]/96 backdrop-blur-xl border-b border-[#e5d9cf]/50"
      }`}>
        <div className="w-full px-4">
          <div className="flex items-center justify-between py-2.5">

            {/* ── Brand with embossed logo ── */}
            <div className="flex items-center gap-3 md:gap-5 cursor-pointer group">
              {/* Embossed logo badge */}
              <div className="relative flex-shrink-0">
                {/* Ambient glow, always on */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#c4975a]/40 to-[#7c2d3e]/25 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Dark embossed container */}
                <div
                  className="relative w-[64px] h-[64px] md:w-[104px] md:h-[104px] rounded-full overflow-hidden"
                  style={{
                    background: "radial-gradient(ellipse at 35% 25%, #2e2418 0%, #1a1008 60%, #120c06 100%)",
                    boxShadow:
                      "0 6px 24px rgba(0,0,0,0.65), 0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(196,151,90,0.25), inset 0 -1px 0 rgba(0,0,0,0.6), 0 0 0 1.5px rgba(196,151,90,0.35)",
                  }}
                >
                  {/* Noise / grain texture overlay */}
                  <div
                    className="absolute inset-0 z-10 rounded-full pointer-events-none"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
                      backgroundSize: "200px 200px",
                      opacity: 0.6,
                      mixBlendMode: "overlay",
                    }}
                  />
                  {/* Spotlight highlight from top-left */}
                  <div
                    className="absolute inset-0 z-20 rounded-full pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at 30% 20%, rgba(255,230,180,0.12) 0%, transparent 55%)",
                    }}
                  />
                  {/* The actual logo image */}
                  <ImageWithFallback
                    src={clinicLogo}
                    alt="Danta – The Dental Company"
                    className="w-full h-full object-cover scale-[1.08]"
                    style={{ mixBlendMode: "screen", opacity: 0.92 }}
                  />
                </div>
              </div>

              {/* Brand text */}
              <div className="group-hover:translate-x-0.5 transition-transform duration-300">
                <h1
                  className="text-[1.75rem] md:text-[3.1rem] tracking-[0.1em] md:tracking-[0.12em] uppercase leading-none"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
                >
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(105deg, #a87040 0%, #e8c98a 32%, #c4975a 52%, #f0d9a0 68%, #a87040 100%)",
                      filter: "drop-shadow(0 2px 10px rgba(196,151,90,0.45))",
                    }}
                  >
                    DANTA
                  </span>
                </h1>
                <div className="flex items-center gap-2 md:gap-2.5 mt-[3px] md:mt-1.5">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c4975a]/45" />
                  <span className="text-[9px] md:text-[13px] tracking-[0.2em] md:tracking-[0.26em] text-[#8a7060] uppercase whitespace-nowrap">
                    The Dental Company
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c4975a]/45" />
                </div>
              </div>
            </div>

            {/* ── Tab nav ── */}
            <nav className="hidden md:flex items-center">
              <div className="flex items-center gap-1 bg-[#f3ece4] rounded-xl p-1 border border-[#e5d9cf]">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setActiveTab(item.id)}
                      className={`relative px-5 py-2.5 rounded-lg text-sm transition-all duration-300 flex items-center gap-2 ${
                        isActive
                          ? "bg-[#2a1f1a] text-[#d4b896] shadow-md"
                          : "text-[#8a7060] hover:text-[#2a1f1a] hover:bg-white/70"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </nav>

            {/* ── Book CTA ── */}
            <div className="hidden md:block">
              <button onClick={openModal} className="group relative overflow-hidden bg-[#c4975a] text-white px-7 py-3 rounded-xl shadow-md hover:shadow-[#c4975a]/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.03]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#b8844a] to-[#d4a86a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-2">
                  <Calendar className="w-4 h-4 group-hover:rotate-6 transition-transform duration-300" />
                  <span className="text-sm tracking-wide">Book Now</span>
                </div>
              </button>
            </div>

            {/* ── Mobile toggle ── */}
            <button
              className="md:hidden w-10 h-10 rounded-xl border border-[#e5d9cf] flex items-center justify-center text-[#2a1f1a] hover:bg-[#f3ece4] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[#e5d9cf] bg-[#faf5ef] px-4 py-4 space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => { setActiveTab(item.id); setMobileOpen(false); }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#2a1f1a] hover:bg-[#f3ece4] transition-colors"
                >
                  <Icon className="w-4 h-4 text-[#c4975a]" />
                  <span className="text-sm">{item.label}</span>
                </a>
              );
            })}
            <button
              onClick={() => { openModal(); setMobileOpen(false); }}
              className="w-full mt-2 bg-[#c4975a] text-white px-6 py-3 rounded-xl text-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Now
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

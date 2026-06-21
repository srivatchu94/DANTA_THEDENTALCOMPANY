"use client";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Plus, X, Send, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import clinicLogo from "@/imports/Clinic_Logo.jpg";

type Review = {
  name: string;
  role: string;
  rating: number;
  text: string;
  initials: string;
  accent: string;
};

const ACCENT_CYCLE = ["#c4975a", "#7c2d3e", "#b5a090"];

const SEED_REVIEWS: Review[] = [
  {
    name: "Priya Sundaram",
    role: "Smile Makeover Patient",
    rating: 5,
    text: "I had severe dental anxiety before coming to Danta. The team made me feel completely at ease, and my smile transformation exceeded every expectation. The precision and artistry in my veneers is truly remarkable.",
    initials: "PS",
    accent: "#c4975a",
  },
  {
    name: "Rahul Mohan",
    role: "Orthodontic Patient",
    rating: 5,
    text: "Spotlessly clean clinic and absolutely painless procedures. The invisible aligners they recommended have worked flawlessly and the progress has been faster than I expected. Professional at every step.",
    initials: "RM",
    accent: "#7c2d3e",
  },
  {
    name: "Kavitha Rajan",
    role: "Family Patient",
    rating: 5,
    text: "We bring the entire family here – from my 8-year-old to my parents. The doctors are gentle, thorough, and always take the time to explain treatment plans clearly. Best dental clinic in Chennai.",
    initials: "KR",
    accent: "#b5a090",
  },
  {
    name: "Arjun Prakash",
    role: "Implant Patient",
    rating: 5,
    text: "The advanced 3D imaging technology and the expertise of the team made my implant procedure quick and comfortable. Six months later and it feels completely natural. I cannot recommend Danta enough.",
    initials: "AP",
    accent: "#c4975a",
  },
  {
    name: "Sunitha Krishnan",
    role: "Teeth Whitening Patient",
    rating: 5,
    text: "I was skeptical about teeth whitening but the results are stunning. Four shades brighter in one session with zero sensitivity. The clinic environment feels luxurious and the staff are warm and welcoming.",
    initials: "SK",
    accent: "#7c2d3e",
  },
  {
    name: "Deepak Venkat",
    role: "Root Canal Patient",
    rating: 5,
    text: "Had a root canal and felt nothing the whole time. The doctor checked in throughout and made sure I was comfortable. What I feared would be traumatic was surprisingly smooth. Thank you, Danta!",
    initials: "DV",
    accent: "#b5a090",
  },
];

function getInitials(name: string): string {
  return name
    .trim()
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? "fill-[#c4975a] text-[#c4975a]" : "text-[#3a2f25]"}`}
        />
      ))}
    </div>
  );
}

function InteractiveStar({ index, value, onChange }: { index: number; value: number; onChange: (v: number) => void }) {
  const [hover, setHover] = useState(0);
  const filled = (hover || value) > index;
  return (
    <button
      type="button"
      onClick={() => onChange(index + 1)}
      onMouseEnter={() => setHover(index + 1)}
      onMouseLeave={() => setHover(0)}
      className="transition-transform hover:scale-125 duration-150"
    >
      <Star className={`w-7 h-7 transition-colors duration-150 ${filled ? "fill-[#c4975a] text-[#c4975a]" : "text-[#3a2f25] hover:text-[#c4975a]/50"}`} />
    </button>
  );
}

function InitialAvatar({ initials, accent }: { initials: string; accent: string }) {
  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0 shadow-md"
      style={{ backgroundColor: accent }}
    >
      {initials || "?"}
    </div>
  );
}

export function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>(SEED_REVIEWS);
  const [activeIndex, setActiveIndex] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  const visibleCount = 3;
  const prev = () => setActiveIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setActiveIndex((i) => (i + 1) % reviews.length);
  const visible = Array.from({ length: Math.min(visibleCount, reviews.length) }, (_, i) =>
    reviews[(activeIndex + i) % reviews.length]
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newReview: Review = {
      name: name.trim(),
      role: role.trim() || "Danta Patient",
      rating,
      text: text.trim(),
      initials: getInitials(name),
      accent: ACCENT_CYCLE[reviews.length % ACCENT_CYCLE.length],
    };

    setReviews((prev) => [newReview, ...prev]);
    setActiveIndex(0);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormOpen(false);
      setName("");
      setRole("");
      setRating(5);
      setText("");
    }, 2200);
  }

  function handleClose() {
    setFormOpen(false);
    setSubmitted(false);
    setName("");
    setRole("");
    setRating(5);
    setText("");
  }

  return (
    <section id="testimonials" className="relative py-28 bg-[#2a1f1a] overflow-hidden">
      {/* Background dot texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #c4975a 1px, transparent 0)", backgroundSize: "36px 36px" }}
      />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#c4975a]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#7c2d3e]/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4975a]/40 to-transparent" />

      <div className="w-full px-4 relative z-10">

        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#c4975a]/30 px-5 py-2 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c4975a] animate-pulse" />
              <span className="text-xs text-[#d4b896]/60 tracking-widest uppercase">Patient Stories</span>
            </div>
            <h2 className="text-5xl lg:text-6xl leading-tight text-white" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
              What Our<br />
              <span className="italic text-[#c4975a]">Patients Say</span>
            </h2>
          </div>

          <div className="flex items-center gap-8">
            {/* Aggregate rating */}
            <div className="text-right">
              <p className="text-5xl text-[#c4975a]" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>5.0</p>
              <StarRow count={5} />
              <p className="text-xs text-[#8a7060] mt-1 tracking-wide">{reviews.length} reviews</p>
            </div>
            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button onClick={prev} className="w-11 h-11 rounded-full border border-[#c4975a]/30 flex items-center justify-center text-[#c4975a] hover:bg-[#c4975a]/10 hover:border-[#c4975a]/60 transition-all duration-200">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={next} className="w-11 h-11 rounded-full border border-[#c4975a]/30 flex items-center justify-center text-[#c4975a] hover:bg-[#c4975a]/10 hover:border-[#c4975a]/60 transition-all duration-200">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Review cards ── */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {visible.map((review, i) => (
            <div
              key={`${activeIndex}-${i}-${review.name}`}
              className="group relative bg-[#1e1410] rounded-2xl p-7 border border-[#3a2f25] hover:border-[#c4975a]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
            >
              <div className="absolute top-5 right-6 opacity-10 group-hover:opacity-20 transition-opacity" style={{ color: review.accent }}>
                <Quote className="w-10 h-10" />
              </div>
              <StarRow count={review.rating} />
              <p className="text-[#8a7060] text-sm leading-relaxed mt-5 mb-7 line-clamp-5">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-[#3a2f25] to-transparent mb-5" />
              <div className="flex items-center gap-3">
                <InitialAvatar initials={review.initials} accent={review.accent} />
                <div>
                  <p className="text-white text-sm font-medium" style={{ fontFamily: "var(--font-heading)" }}>{review.name}</p>
                  <p className="text-[#8a7060] text-xs mt-0.5">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Dot indicators ── */}
        <div className="flex items-center justify-center gap-2 mb-14">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 ${i === activeIndex ? "w-6 h-2 bg-[#c4975a]" : "w-2 h-2 bg-[#3a2f25] hover:bg-[#c4975a]/40"}`}
            />
          ))}
        </div>

        {/* ── Add Review CTA / Form ── */}
        <div className="relative">
          {!formOpen ? (
            /* Collapsed state — invite button */
            <div className="flex flex-col items-center gap-4">
              <p className="text-[#8a7060] text-sm">Had a great experience with us?</p>
              <button
                onClick={() => setFormOpen(true)}
                className="group flex items-center gap-3 border border-[#c4975a]/40 text-[#c4975a] px-8 py-3.5 rounded-xl hover:bg-[#c4975a]/10 hover:border-[#c4975a]/70 transition-all duration-300 hover:scale-[1.02]"
              >
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                <span className="text-sm tracking-wide">Share Your Experience</span>
              </button>
            </div>
          ) : (
            /* Expanded form */
            <div className="relative bg-[#1e1410] rounded-2xl border border-[#3a2f25] overflow-hidden">
              {/* Form header */}
              <div className="flex items-center justify-between px-8 py-5 border-b border-[#3a2f25]">
                <div>
                  <h3 className="text-white text-lg" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                    Share Your Experience
                  </h3>
                  <p className="text-[#8a7060] text-xs mt-0.5">Your feedback helps other patients find great care</p>
                </div>
                <button
                  onClick={handleClose}
                  className="w-9 h-9 rounded-xl border border-[#3a2f25] flex items-center justify-center text-[#8a7060] hover:text-white hover:border-[#c4975a]/40 transition-all duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {submitted ? (
                /* Success state */
                <div className="flex flex-col items-center justify-center gap-4 py-16 px-8">
                  <div className="w-16 h-16 rounded-full bg-[#c4975a]/10 border border-[#c4975a]/30 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#c4975a]" />
                  </div>
                  <p className="text-white text-lg" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                    Thank You!
                  </p>
                  <p className="text-[#8a7060] text-sm text-center max-w-xs">
                    Your review has been added. It means the world to us.
                  </p>
                </div>
              ) : (
                /* Form fields */
                <form onSubmit={handleSubmit} className="p-8 grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-[#8a7060] tracking-widest uppercase">
                      Your Name <span className="text-[#c4975a]">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Priya Sundaram"
                      required
                      className="bg-[#2a1f1a] border border-[#3a2f25] focus:border-[#c4975a]/60 rounded-xl px-4 py-3 text-sm text-white placeholder-[#5a4535] outline-none transition-colors duration-200"
                    />
                  </div>

                  {/* Treatment */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-[#8a7060] tracking-widest uppercase">
                      Treatment / Role
                    </label>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g. Smile Makeover Patient"
                      className="bg-[#2a1f1a] border border-[#3a2f25] focus:border-[#c4975a]/60 rounded-xl px-4 py-3 text-sm text-white placeholder-[#5a4535] outline-none transition-colors duration-200"
                    />
                  </div>

                  {/* Star rating */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-xs text-[#8a7060] tracking-widest uppercase">
                      Your Rating <span className="text-[#c4975a]">*</span>
                    </label>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <InteractiveStar key={i} index={i} value={rating} onChange={setRating} />
                      ))}
                      <span className="ml-3 text-sm text-[#8a7060]">
                        {["", "Poor", "Fair", "Good", "Great", "Excellent!"][rating]}
                      </span>
                    </div>
                  </div>

                  {/* Review text */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-xs text-[#8a7060] tracking-widest uppercase">
                      Your Review <span className="text-[#c4975a]">*</span>
                    </label>
                    <textarea
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Tell us about your experience at Danta — we'd love to hear from you…"
                      required
                      rows={4}
                      className="bg-[#2a1f1a] border border-[#3a2f25] focus:border-[#c4975a]/60 rounded-xl px-4 py-3 text-sm text-white placeholder-[#5a4535] outline-none transition-colors duration-200 resize-none"
                    />
                    <p className="text-[11px] text-[#5a4535] text-right">{text.length} / 500</p>
                  </div>

                  {/* Submit */}
                  <div className="md:col-span-2 flex items-center justify-end gap-4">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="text-sm text-[#8a7060] hover:text-white transition-colors px-4 py-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={!name.trim() || !text.trim()}
                      className="group relative overflow-hidden bg-[#c4975a] disabled:opacity-40 disabled:cursor-not-allowed text-white px-8 py-3 rounded-xl shadow-md hover:shadow-[#c4975a]/30 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center gap-2.5"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#b8844a] to-[#d4a86a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Send className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform duration-300" />
                      <span className="text-sm tracking-wide relative z-10">Post Review</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

        {/* ── Bottom embossed logo badge ── */}
        <div className="mt-20 flex flex-col items-center gap-6">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#c4975a]/20 via-[#7c2d3e]/10 to-[#c4975a]/20 blur-2xl" />
            <div
              className="relative w-36 h-36 rounded-full overflow-hidden"
              style={{
                background: "radial-gradient(ellipse at 35% 25%, #2e2418 0%, #1a1008 60%, #0e0804 100%)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.8), 0 8px 20px rgba(0,0,0,0.5), inset 0 2px 0 rgba(196,151,90,0.3), inset 0 -2px 0 rgba(0,0,0,0.7), 0 0 0 2px rgba(196,151,90,0.4), 0 0 0 4px rgba(196,151,90,0.1)",
              }}
            >
              <div className="absolute inset-0 z-10 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")", backgroundSize: "200px 200px", mixBlendMode: "overlay" }} />
              <div className="absolute inset-0 z-20 pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(255,220,150,0.18) 0%, transparent 55%)" }} />
              <ImageWithFallback src={clinicLogo} alt="Danta – The Dental Company" className="w-full h-full object-cover scale-[1.05]" style={{ mixBlendMode: "screen", opacity: 0.94 }} />
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl tracking-[0.2em] uppercase bg-clip-text text-transparent" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, backgroundImage: "linear-gradient(105deg, #a87040 0%, #e8c98a 35%, #c4975a 55%, #f0d9a0 75%, #a87040 100%)" }}>
              DANTA
            </p>
            <p className="text-[10px] tracking-[0.3em] text-[#8a7060] uppercase mt-1">The Dental Company</p>
          </div>
          <p className="text-[#8a7060] text-sm max-w-md text-center leading-relaxed">
            Transforming smiles across Chennai with precision, care, and artistry since 2018.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4975a]/40 to-transparent" />
    </section>
  );
}

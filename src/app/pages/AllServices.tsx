import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { treatments } from "../data/treatments";
import { usePageMeta } from "../hooks/usePageMeta";

const ACCENTS = [
  { accent: "#c4975a", bg: "#fdf8f2" },
  { accent: "#7c2d3e", bg: "#fdf2f4" },
  { accent: "#b5a090", bg: "#f9f5f2" },
];

export default function AllServices() {
  usePageMeta(
    "All Treatments | DANTA – The Dental Company",
    "The complete range of dental treatments at DANTA – The Dental Company in Chennai: implants, orthodontics, cosmetic dentistry, root canal, pediatric care, emergency care and more."
  );

  return (
    <main className="relative overflow-hidden bg-[#faf5ef] pt-36 md:pt-48 pb-24">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c4975a]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7c2d3e]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-[#e5d9cf] px-5 py-2 rounded-full mb-6 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c4975a]" />
            <span className="text-xs text-[#8a7060] tracking-widest uppercase">All Treatments</span>
          </div>
          <h1
            className="text-5xl lg:text-6xl leading-tight mb-5 text-[#2a1f1a]"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
          >
            Every Treatment,
            <br />
            <span className="italic text-[#c4975a]">One Place</span>
          </h1>
          <p className="text-[#8a7060] leading-relaxed">
            {treatments.length} dental treatments, each with a dedicated page — tap any one to learn what it
            involves and who it's for.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {treatments.map((t, index) => {
            const { accent, bg } = ACCENTS[index % ACCENTS.length];
            const Icon = t.icon;
            return (
              <Link key={t.slug} to={`/treatments/${t.slug}`} className="group relative block">
                <div
                  className="relative h-full rounded-2xl p-7 border border-[#e5d9cf] hover:border-transparent hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer overflow-hidden"
                  style={{ backgroundColor: bg }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{ boxShadow: `inset 0 0 0 1.5px ${accent}40` }}
                  />
                  <div className="mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-all duration-400"
                      style={{ backgroundColor: `${accent}15`, border: `1.5px solid ${accent}30` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: accent }} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-lg mb-2 text-[#2a1f1a]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                    {t.title}
                  </h3>
                  <p className="text-sm text-[#8a7060] leading-relaxed mb-5">{t.tagline}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300" style={{ color: accent }}>
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}

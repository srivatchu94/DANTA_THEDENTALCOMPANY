import { useParams, Navigate, Link } from "react-router-dom";
import { Calendar, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { treatments, getTreatmentBySlug } from "../data/treatments";
import { usePageMeta } from "../hooks/usePageMeta";
import { useBookingModal } from "../components/BookingModalContext";

export default function TreatmentPage() {
  const { slug } = useParams();
  const treatment = getTreatmentBySlug(slug);
  const { openModal } = useBookingModal();

  usePageMeta(
    treatment ? `${treatment.title} in Chennai | DANTA – The Dental Company` : undefined,
    treatment ? `${treatment.tagline} ${treatment.description[0]}` : undefined
  );

  if (!treatment) {
    return <Navigate to="/" replace />;
  }

  const Icon = treatment.icon;
  const related = treatments.filter((t) => t.slug !== treatment.slug).slice(0, 3);

  return (
    <main className="relative overflow-hidden bg-[#faf5ef] pt-36 md:pt-48 pb-24">
      {/* Ambient background, matching Hero */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c4975a]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7c2d3e]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full px-4 relative z-10 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <Link
          to="/#services"
          className="inline-flex items-center gap-2 text-sm text-[#8a7060] hover:text-[#c4975a] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Treatments</span>
        </Link>

        {/* Hero intro */}
        <div className="flex items-start gap-5 mb-8">
          <div
            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
            style={{ backgroundColor: "#c4975a15", border: "1.5px solid #c4975a30" }}
          >
            <Icon className="w-8 h-8 md:w-9 md:h-9 text-[#c4975a]" strokeWidth={1.5} />
          </div>
          <div>
            <h1
              className="text-4xl md:text-5xl leading-tight text-[#2a1f1a] mb-2"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              {treatment.title}
            </h1>
            <p className="text-lg text-[#c4975a] italic">{treatment.tagline}</p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl border border-[#e5d9cf] shadow-sm p-8 md:p-10 mb-8">
          <div className="space-y-4 mb-8">
            {treatment.description.map((para, i) => (
              <p key={i} className="text-[#8a7060] leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#e5d9cf] to-transparent mb-8" />

          <h2
            className="text-lg text-[#2a1f1a] mb-5"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
          >
            Why Patients Choose This
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {treatment.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#c4975a] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#2a1f1a]">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* In-content CTA */}
        <div className="bg-[#2a1f1a] rounded-2xl p-8 md:p-10 text-center mb-16">
          <h3
            className="text-2xl md:text-3xl text-white mb-3"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
          >
            Ready to Get Started?
          </h3>
          <p className="text-[#8a7060] mb-7 max-w-md mx-auto">
            Book your appointment and our team will reach out to guide you through the next steps for{" "}
            {treatment.title.replace("®", "")}.
          </p>
          <button
            onClick={openModal}
            className="group relative overflow-hidden bg-[#c4975a] text-white px-9 py-4 rounded-xl shadow-lg hover:shadow-[#c4975a]/30 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] inline-flex items-center gap-3"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#b8844a] to-[#d4a86a] opacity-0 group-hover:opacity-100 transition-opacity" />
            <Calendar className="w-5 h-5 relative z-10 group-hover:rotate-6 transition-transform duration-300" />
            <span className="relative z-10 text-sm tracking-wide">Book Appointment</span>
          </button>
        </div>

        {/* Related treatments */}
        <div>
          <h3
            className="text-xl text-[#2a1f1a] mb-5"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
          >
            Explore Other Treatments
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((t) => {
              const RelIcon = t.icon;
              return (
                <Link
                  key={t.slug}
                  to={`/treatments/${t.slug}`}
                  className="group bg-white rounded-xl border border-[#e5d9cf] hover:border-[#c4975a]/50 hover:shadow-md transition-all duration-300 p-5"
                >
                  <RelIcon className="w-5 h-5 text-[#c4975a] mb-3" strokeWidth={1.5} />
                  <p className="text-sm text-[#2a1f1a] mb-1" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                    {t.title}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#8a7060] group-hover:text-[#c4975a] transition-colors">
                    Learn more
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

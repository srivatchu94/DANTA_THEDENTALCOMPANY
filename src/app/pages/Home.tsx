import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Mission } from "../components/Mission";
import { Testimonials } from "../components/Testimonials";
import { CTA } from "../components/CTA";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta();
  return (
    <main>
      <Hero />
      <Services />
      <Mission />
      <Testimonials />
      <CTA />
    </main>
  );
}

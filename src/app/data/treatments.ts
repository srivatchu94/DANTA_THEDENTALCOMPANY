import { Anchor, Sparkles, Smile, Syringe, SunMedium, Scissors, Layers, type LucideIcon } from "lucide-react";

export type Treatment = {
  slug: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  description: string[];
  benefits: string[];
};

export const treatments: Treatment[] = [
  {
    slug: "dental-implants",
    title: "Dental Implants",
    tagline: "A permanent, natural-looking way to replace missing teeth.",
    icon: Anchor,
    description: [
      "Dental implants replace missing teeth from the root up. A titanium implant is placed in the jawbone and topped with a custom-crafted crown, giving you a replacement tooth that looks, feels, and functions like your own.",
      "Unlike bridges or dentures, implants don't rely on neighboring teeth for support — they stand on their own, built to last for years with proper care.",
    ],
    benefits: [
      "Looks and feels like a natural tooth",
      "Preserves jawbone health and facial structure",
      "No impact on neighboring healthy teeth",
      "Built to last with proper care",
    ],
  },
  {
    slug: "invisalign-clear-aligners",
    title: "Invisalign® & Clear Aligners",
    tagline: "Straighten your teeth without a single metal wire.",
    icon: Sparkles,
    description: [
      "Invisalign® and clear aligners gently guide your teeth into place using a series of custom, virtually invisible trays — no brackets, no wires, and no one has to know you're straightening your smile.",
      "Each set of aligners is planned around your unique bite, so you always know what to expect before treatment even begins.",
    ],
    benefits: [
      "Nearly invisible, removable trays",
      "Easier to eat, brush and floss than braces",
      "Custom-planned for your bite, start to finish",
      "Comfortable, predictable results",
    ],
  },
  {
    slug: "smile-designing",
    title: "Smile Designing",
    tagline: "A personalized blueprint for your ideal smile.",
    icon: Smile,
    description: [
      "Smile Designing combines your facial features, bite, and personal preferences into a custom digital plan before any treatment begins.",
      "Using advanced imaging, we map out exactly how your new smile will look — so you can see and approve the result before we start any work.",
    ],
    benefits: [
      "Preview your new smile before treatment",
      "Fully personalized to your face and features",
      "Combines multiple treatments into one cohesive plan",
      "Precision planning reduces surprises",
    ],
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    tagline: "Relieve pain and save your natural tooth.",
    icon: Syringe,
    description: [
      "When decay or infection reaches the inner pulp of a tooth, root canal treatment removes the damaged tissue, cleans and seals the root canal, and restores the tooth with a crown.",
      "It relieves pain and lets you keep your natural tooth, rather than losing it to extraction — using a modern, gentle technique.",
    ],
    benefits: [
      "Eliminates pain from infected or damaged teeth",
      "Saves your natural tooth instead of extraction",
      "Modern, gentle technique",
      "Usually completed in one or two comfortable visits",
    ],
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    tagline: "A brighter smile, safely, in a single visit.",
    icon: SunMedium,
    description: [
      "Professional teeth whitening lifts years of stains from coffee, tea, and everyday life, brightening your smile several shades in a single in-clinic session.",
      "It's far faster and more even than over-the-counter kits, with minimal sensitivity and results supervised by our dental team throughout.",
    ],
    benefits: [
      "Visible results in one visit",
      "Safe, dentist-supervised application",
      "Even, natural-looking brightness",
      "Long-lasting with simple aftercare",
    ],
  },
  {
    slug: "wisdom-tooth-extraction",
    title: "Wisdom Tooth Extraction",
    tagline: "Comfortable, precise removal when wisdom teeth cause trouble.",
    icon: Scissors,
    description: [
      "When wisdom teeth are impacted, crowded, or causing pain, removing them prevents bigger problems down the line.",
      "We use digital imaging to plan a precise, minimally invasive extraction, keeping you comfortable before, during, and after the procedure.",
    ],
    benefits: [
      "Prevents crowding, infection and impaction",
      "Digital imaging for precise planning",
      "Gentle, comfort-focused approach",
      "Clear aftercare guidance for fast healing",
    ],
  },
  {
    slug: "full-mouth-rehabilitation",
    title: "Full Mouth Rehabilitation",
    tagline: "Rebuilding your entire smile, function and confidence.",
    icon: Layers,
    description: [
      "Full Mouth Rehabilitation combines multiple treatments — from implants and crowns to root canals and orthodontics — into one coordinated plan for patients who need comprehensive restoration.",
      "It's designed for people who want a complete, long-term solution to widespread dental issues, rather than scattered, one-off fixes.",
    ],
    benefits: [
      "One coordinated plan, not scattered treatments",
      "Restores both function and appearance",
      "Tailored entirely to your specific needs",
      "A long-term solution to complex dental issues",
    ],
  },
];

export function getTreatmentBySlug(slug: string | undefined): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

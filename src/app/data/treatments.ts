import {
  Stethoscope,
  Wand2,
  Anchor,
  Layers,
  Sparkles as ClearAlignersIcon,
  Move,
  Syringe,
  Sparkles,
  Gem,
  Crown,
  SunMedium,
  Zap,
  HeartPulse,
  Scissors,
  Baby,
  Puzzle,
  Leaf,
  Siren,
  Smile,
  type LucideIcon,
} from "lucide-react";

export type Treatment = {
  slug: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  image: string;
  description: string[];
  benefits: string[];
};

export const treatments: Treatment[] = [
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    tagline: "Routine care that keeps small problems from becoming big ones.",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: [
      "General dentistry covers the everyday checkups, cleanings, and preventive care that keep your teeth and gums healthy for the long run — the foundation everything else builds on.",
      "Regular visits let us catch issues like cavities or early gum disease while they're still small, simple, and inexpensive to treat.",
    ],
    benefits: [
      "Routine checkups and professional cleanings",
      "Early detection of cavities and gum issues",
      "Personalized preventive care plans",
      "The foundation for lifelong oral health",
    ],
  },
  {
    slug: "smile-designing",
    title: "Smile Designing",
    tagline: "A personalized blueprint for your ideal smile.",
    icon: Smile,
    image: "https://images.unsplash.com/photo-1667133295315-820bb6481730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
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
    slug: "digital-smile-makeovers",
    title: "Digital Smile Makeovers",
    tagline: "See your future smile before treatment even begins.",
    icon: Wand2,
    image: "https://images.unsplash.com/photo-1777443726993-8f9c8e96e46e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: [
      "Using advanced digital imaging, we simulate exactly how your smile will look after treatment — before a single procedure starts, turning guesswork into a clear, shared plan.",
      "From minor cosmetic tweaks to a full transformation, a digital preview lets you approve the outcome in advance, so there are no surprises on treatment day.",
    ],
    benefits: [
      "Preview your results before committing",
      "Combines photography, imaging and planning software",
      "Makes complex treatment plans easy to understand",
      "A confident, informed decision every time",
    ],
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    tagline: "A permanent, natural-looking way to replace missing teeth.",
    icon: Anchor,
    image: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
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
    slug: "full-mouth-rehabilitation",
    title: "Full Mouth Rehabilitation",
    tagline: "Rebuilding your entire smile, function and confidence.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1562330743-fbc6ef07ca78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
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
  {
    slug: "invisalign-clear-aligners",
    title: "Invisalign® & Clear Aligners",
    tagline: "Straighten your teeth without a single metal wire.",
    icon: ClearAlignersIcon,
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
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
    slug: "orthodontics",
    title: "Orthodontics",
    tagline: "Straighter teeth, a healthier bite, a more confident smile.",
    icon: Move,
    image: "https://images.unsplash.com/photo-1720685193964-4529228a33c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: [
      "Orthodontic treatment corrects crowded, crooked, or misaligned teeth and improves how your upper and lower jaw meet. Whether traditional braces or modern clear aligners suit you best, we design a plan around your specific bite and goals.",
      "Beyond aesthetics, proper alignment makes teeth easier to clean and reduces long-term wear — a healthier smile, not just a straighter one.",
    ],
    benefits: [
      "Corrects crowding, gaps and bite issues",
      "Choice of braces or clear aligners",
      "Improves long-term oral health, not just looks",
      "Treatment plans built around your goals",
    ],
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    tagline: "Relieve pain and save your natural tooth.",
    icon: Syringe,
    image: "https://images.unsplash.com/photo-1522849696084-818b29dfe210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
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
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    tagline: "Refine and enhance the smile you already have.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: [
      "Cosmetic dentistry covers the full range of treatments that improve how your smile looks — from whitening and bonding to veneers and subtle reshaping. Every plan starts with what you want to change.",
      "Because it's about enhancement rather than necessity, cosmetic treatment is always tailored to your comfort level, timeline and budget.",
    ],
    benefits: [
      "Whitening, veneers, bonding and reshaping",
      "Fully personalized to your goals",
      "Natural-looking, confidence-building results",
      "Options for every budget and timeline",
    ],
  },
  {
    slug: "veneers",
    title: "Veneers",
    tagline: "Thin, custom shells for an instantly flawless smile.",
    icon: Gem,
    image: "https://images.unsplash.com/photo-1694345162188-2e5c06fe75e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: [
      "Veneers are ultra-thin, custom-made shells bonded to the front of your teeth to correct chips, gaps, discoloration, or shape — all in as little as two visits.",
      "Each veneer is color-matched and shaped to blend naturally with your other teeth, so the result looks like your smile, only better.",
    ],
    benefits: [
      "Corrects chips, gaps, and discoloration at once",
      "Natural, color-matched finish",
      "Durable, stain-resistant material",
      "Dramatic results in very few visits",
    ],
  },
  {
    slug: "crowns-bridges",
    title: "Crowns & Bridges",
    tagline: "Rebuild broken or missing teeth, seamlessly.",
    icon: Crown,
    image: "https://images.unsplash.com/photo-1756364405980-e705da6a3da6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: [
      "A crown caps and protects a damaged or weakened tooth, while a bridge replaces one or more missing teeth by anchoring to the teeth on either side. Both are custom-crafted to match your bite.",
      "Modern materials make crowns and bridges strong, comfortable, and virtually indistinguishable from natural teeth.",
    ],
    benefits: [
      "Restores strength to damaged teeth",
      "Replaces missing teeth without surgery",
      "Custom-matched color and shape",
      "Built to handle everyday biting and chewing",
    ],
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    tagline: "A brighter smile, safely, in a single visit.",
    icon: SunMedium,
    image: "https://images.unsplash.com/photo-1655807946138-811bb2340d34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
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
    slug: "laser-dentistry",
    title: "Laser Dentistry",
    tagline: "Advanced, minimally-invasive treatment for greater comfort.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: [
      "Laser dentistry uses focused light energy instead of traditional drills for many procedures — from treating gum disease to reshaping soft tissue. It's often more precise and less invasive.",
      "Because lasers minimize bleeding and trauma to surrounding tissue, many patients experience faster healing and less discomfort after treatment.",
    ],
    benefits: [
      "Minimally invasive, precise treatment",
      "Reduced bleeding and faster healing",
      "Often requires little to no anesthesia",
      "Used across multiple treatment types",
    ],
  },
  {
    slug: "gum-therapy",
    title: "Gum Therapy",
    tagline: "Healthy gums are the foundation of a healthy smile.",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1660732205495-f65510d8180e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: [
      "Gum therapy treats and prevents gum disease — from early gingivitis to more advanced periodontal issues — through deep cleaning, scaling, and ongoing care.",
      "Left untreated, gum disease is a leading cause of tooth loss in adults. Regular gum therapy catches problems early and keeps them from progressing.",
    ],
    benefits: [
      "Treats and prevents gum disease",
      "Deep cleaning below the gumline",
      "Protects long-term tooth stability",
      "Fresh breath and a healthier mouth",
    ],
  },
  {
    slug: "oral-surgery",
    title: "Oral Surgery",
    tagline: "Skilled surgical care, planned and performed with precision.",
    icon: Scissors,
    image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: [
      "Oral surgery covers a range of procedures — from tooth extractions to more complex jaw and soft-tissue treatments — all performed with careful planning and modern imaging.",
      "Whether it's a single tooth or a more involved procedure, we walk you through what to expect at every step, before and after.",
    ],
    benefits: [
      "Digital imaging for precise planning",
      "Comfort-focused, gentle approach",
      "Covers a wide range of surgical needs",
      "Clear guidance for recovery",
    ],
  },
  {
    slug: "wisdom-tooth-extraction",
    title: "Wisdom Tooth Extraction",
    tagline: "Comfortable, precise removal when wisdom teeth cause trouble.",
    icon: Scissors,
    image: "https://images.unsplash.com/photo-1602932213623-cc17e9541bb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
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
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    tagline: "Gentle, friendly dental care for growing smiles.",
    icon: Baby,
    image: "https://images.unsplash.com/photo-1758205307836-0829c799890b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: [
      "From a child's very first checkup to their teenage years, pediatric dentistry focuses on making every visit comfortable, positive, and educational — building good habits that last a lifetime.",
      "Our gentle approach helps even nervous first-time visitors feel at ease, with plenty of patience and age-appropriate explanations along the way.",
    ],
    benefits: [
      "A calm, friendly experience for kids",
      "Age-appropriate preventive care",
      "Builds lifelong healthy habits",
      "Patient, reassuring approach for first visits",
    ],
  },
  {
    slug: "prosthodontics",
    title: "Prosthodontics",
    tagline: "Rebuilding what's missing, restoring how you eat and smile.",
    icon: Puzzle,
    image: "https://images.unsplash.com/photo-1530213709681-b7e537c923cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: [
      "Prosthodontics is the specialty focused on replacing missing or damaged teeth — through crowns, bridges, dentures, and implant-supported restorations — designed to function and look like natural teeth.",
      "It's often the final, finishing step in more complex treatment plans, bringing function and confidence back together.",
    ],
    benefits: [
      "Replaces missing or damaged teeth",
      "Custom-fitted for comfort and function",
      "Combines with implants, crowns or bridges",
      "Restores both bite and appearance",
    ],
  },
  {
    slug: "periodontics",
    title: "Periodontics",
    tagline: "Specialized care for the gums and bone that support your teeth.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1664529845843-b4192b8246fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: [
      "Periodontics focuses specifically on the health of your gums, ligaments, and the bone that anchors your teeth — treating everything from mild inflammation to advanced gum disease.",
      "Because gum health directly affects how long your teeth last, periodontal care is a key part of any long-term dental plan.",
    ],
    benefits: [
      "Specialized gum and bone health care",
      "Treats mild to advanced gum disease",
      "Protects the foundation of your teeth",
      "Helps prevent future tooth loss",
    ],
  },
  {
    slug: "endodontics",
    title: "Endodontics",
    tagline: "Expert care for the inside of your tooth.",
    icon: Syringe,
    image: "https://images.unsplash.com/photo-1643660527217-b5e025ac642e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: [
      "Endodontics is the specialty dedicated to treating the soft inner tissue of the tooth — most commonly through root canal treatment — relieving pain and saving teeth that would otherwise need removal.",
      "With modern techniques, endodontic treatment is far more comfortable than its reputation suggests, and highly effective at preserving your natural tooth.",
    ],
    benefits: [
      "Specialized care for tooth pain and infection",
      "Saves teeth from extraction",
      "Modern, comfortable techniques",
      "High long-term success rate",
    ],
  },
  {
    slug: "emergency-dental-care",
    title: "Emergency Dental Care",
    tagline: "Same-day relief when dental pain can't wait.",
    icon: Siren,
    image: "https://images.unsplash.com/photo-1592400400196-bf709e32aa88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: [
      "Dental emergencies — a knocked-out tooth, sudden severe pain, a broken crown — need fast attention. We offer same-day emergency appointments to relieve pain and address urgent problems quickly.",
      "If you're unsure whether your situation is an emergency, call us — we'll help you figure out the right next step immediately.",
    ],
    benefits: [
      "Same-day emergency appointments",
      "Fast pain relief and stabilization",
      "Guidance over the phone before you arrive",
      "Care for knocked-out, broken or infected teeth",
    ],
  },
];

export function getTreatmentBySlug(slug: string | undefined): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

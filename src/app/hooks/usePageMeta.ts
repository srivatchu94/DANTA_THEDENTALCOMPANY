"use client";
import { useEffect } from "react";

const DEFAULT_TITLE = "DANTA – The Dental Company | Advanced Dentistry in Chennai";
const DEFAULT_DESCRIPTION =
  "Multi-speciality dental care in Chennai — Smile Designing, Dental Implants, Invisalign®, Root Canal Treatment, Cosmetic Dentistry, Orthodontics, Pediatric Dentistry & more. Advanced, ethical, affordable dentistry for all ages.";

export function usePageMeta(title?: string, description?: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title ?? DEFAULT_TITLE;

    const descTag = document.querySelector('meta[name="description"]');
    const prevDescription = descTag?.getAttribute("content") ?? null;
    if (descTag) descTag.setAttribute("content", description ?? DEFAULT_DESCRIPTION);

    return () => {
      document.title = prevTitle;
      if (descTag && prevDescription !== null) descTag.setAttribute("content", prevDescription);
    };
  }, [title, description]);
}

"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const animatedElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate]"),
    );

    if (animatedElements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.16,
      },
    );

    animatedElements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
      observer.observe(element);
    });

    const fallback = window.setTimeout(() => {
      animatedElements.forEach((element) => {
        if (!element.classList.contains("is-visible")) {
          const rect = element.getBoundingClientRect();
          const isNearViewport = rect.top < window.innerHeight * 1.25;

          if (isNearViewport) {
            element.classList.add("is-visible");
            observer.unobserve(element);
          }
        }
      });
    }, 900);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return null;
}

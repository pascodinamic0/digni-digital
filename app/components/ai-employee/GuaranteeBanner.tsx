"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { useLanguage } from "@/app/context/LocaleContext";
import { translations } from "@/app/config/translations";

export default function GuaranteeBanner() {
  const language = useLanguage();
  const t = translations[language].aiEmployeePage.guarantee;

  return (
    <section className="relative isolate overflow-hidden bg-surface py-12 sm:py-16 border-b border-[var(--software-border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl bg-[var(--software-canvas)] border border-accent/20 rounded-2xl p-6 sm:p-10 text-center shadow-sm relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[120%] bg-accent/5 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 border border-accent/20 mb-6">
              <ShieldCheck className="h-6 w-6 text-accent" strokeWidth={2} />
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-text mb-4">
              {t.title}
            </h2>

            <p className="text-lg leading-relaxed text-muted max-w-2xl mx-auto font-medium">
              {t.body}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/app/context/LocaleContext";
import { translations } from "@/app/config/translations";

export default function WhyDigniSection() {
  const language = useLanguage();
  const t = translations[language].aiEmployeePage.whyDigni;

  return (
    <section className="relative isolate overflow-hidden bg-[var(--software-canvas)] py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-xl leading-8 text-muted font-medium">
            {t.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 bg-surface border border-[var(--software-border)] rounded-2xl p-8 sm:p-10 shadow-sm"
        >
          <div className="space-y-6 text-lg leading-relaxed text-text">
            {t.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 pt-10 border-t border-[var(--software-border)]">
            <h3 className="text-xl font-semibold text-text mb-6">
              {t.listHeading}
            </h3>
            <ul className="space-y-4">
              {t.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-success shrink-0 mr-3" />
                  <span className="text-lg text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 pt-10 border-t border-[var(--software-border)] space-y-4 text-lg font-medium text-text text-center sm:text-left">
            {t.footer.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

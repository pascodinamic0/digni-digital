"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/app/context/LocaleContext";
import { translations } from "@/app/config/translations";
import { cn } from "@/lib/utils";

export default function AiEmployeeFAQ() {
  const language = useLanguage();
  const t = translations[language].aiEmployeePage.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative isolate overflow-hidden bg-[var(--software-canvas)] py-24 sm:py-32 border-t border-[var(--software-border)]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            {t.title}
          </h2>
        </div>

        <div className="space-y-4">
          {t.questions.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={index}
                className="bg-surface border border-[var(--software-border)] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
                >
                  <span className="text-lg font-semibold text-text">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted transition-transform duration-200",
                      isOpen && "transform rotate-180",
                    )}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pt-0 text-muted leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

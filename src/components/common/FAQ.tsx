"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type FAQProps = {
  title?: string;
  items: FAQItem[];
};

export function FAQ({ title, items }: FAQProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-[20px]">
      <div className="container mx-auto">
        {title && (
          <h2 className="text-featured text-center font-bold text-5xl tracking-[-1.0906px] mb-16">
            {title}
          </h2>
        )}

        <div className="space-y-4 max-w-3xl mx-auto mb-10">
          {items.map((faq) => {
            const isOpen = openItems.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-lg text-black hover:bg-gray-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <Minus
                      size={20}
                      className="text-black flex-shrink-0 ml-4"
                    />
                  ) : (
                    <Plus size={20} className="text-black flex-shrink-0 ml-4" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-gray-600 text-base leading-relaxed animate-in slide-in-from-top-2 duration-300">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

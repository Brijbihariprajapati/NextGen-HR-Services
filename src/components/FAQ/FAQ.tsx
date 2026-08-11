"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section className={`section ${styles.section}`} aria-labelledby="faq-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.intro}>
          <p className="eyebrow">FAQs</p>
          <h2 id="faq-title" className="section-title">
            Common questions
          </h2>
          <p className="section-lead">
            Answers for employers and candidates evaluating NextGen HR Services.
          </p>
        </div>

        <ul className={styles.list}>
          {faqs.map((faq) => {
            const isOpen = faq.id === openId;
            return (
              <li key={faq.id} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  aria-controls={`${faq.id}-panel`}
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                >
                  <span>{faq.question}</span>
                  <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`} aria-hidden="true">
                    +
                  </span>
                </button>
                <div
                  id={`${faq.id}-panel`}
                  className={`${styles.answerWrap} ${isOpen ? styles.answerWrapOpen : ""}`}
                >
                  <p className={styles.answer}>{faq.answer}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

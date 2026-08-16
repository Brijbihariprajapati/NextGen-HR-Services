"use client";

import Image from "next/image";
import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { pageMedia } from "@/data/pageMedia";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  function goTo(nextIndex: number) {
    const total = testimonials.length;
    setIndex(((nextIndex % total) + total) % total);
  }

  return (
    <section className={`section ${styles.section}`} aria-labelledby="testimonials-title">
      <div className="container">
        <div className={styles.intro}>
          <p className="eyebrow">Client &amp; candidate voices</p>
          <h2 id="testimonials-title" className="section-title">
            What people say about working with us
          </h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.media}>
            <Image
              src={pageMedia.testimonials.src}
              alt={pageMedia.testimonials.alt}
              fill
              className={styles.image}
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>

          <div className={styles.card}>
            <p className={styles.quoteMark} aria-hidden="true">
              &ldquo;
            </p>
            <blockquote className={styles.quote}>{active.quote}</blockquote>
            <div className={styles.footer}>
              <div>
                <p className={styles.name}>{active.name}</p>
                <p className={styles.role}>{active.role}</p>
              </div>
              <div className={styles.controls}>
                <button
                  type="button"
                  className={styles.navButton}
                  onClick={() => goTo(index - 1)}
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <div className={styles.dots}>
                  {testimonials.map((testimonial, dotIndex) => (
                    <button
                      key={testimonial.id}
                      type="button"
                      className={`${styles.dot} ${dotIndex === index ? styles.dotActive : ""}`}
                      onClick={() => goTo(dotIndex)}
                      aria-label={`Show testimonial ${dotIndex + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className={styles.navButton}
                  onClick={() => goTo(index + 1)}
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

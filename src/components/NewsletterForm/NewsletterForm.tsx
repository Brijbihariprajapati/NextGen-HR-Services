"use client";

import { FormEvent, useState } from "react";
import styles from "./NewsletterForm.module.css";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="newsletter-email" className={styles.label}>
        Get hiring insights in your inbox
      </label>
      <div className={styles.row}>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Subscribe
        </button>
      </div>
      {submitted ? (
        <p className={styles.success} role="status">
          You&apos;re subscribed. Thank you.
        </p>
      ) : null}
    </form>
  );
}

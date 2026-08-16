"use client";

import { FormEvent, useState, type ChangeEvent } from "react";
import Button from "@/components/Button/Button";
import styles from "./CandidateForm.module.css";

type FormState = {
  name: string;
  phone: string;
  email: string;
  experience: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  experience: "",
};

export default function CandidateForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [resumeName, setResumeName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setResumeName(file ? file.name : "");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialState);
    setResumeName("");
    event.currentTarget.reset();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.intro}>
        <h2 className={styles.title}>Looking for your next opportunity?</h2>
        <p className={styles.lead}>
          Share your profile and resume — we match you with relevant roles across
          IT, non-IT, and manufacturing, and guide you through interviews.
        </p>
      </div>

      <div className={styles.grid}>
        <label className={styles.field}>
          <span>Name</span>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
          />
        </label>

        <label className={styles.field}>
          <span>Phone</span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="+91 XXXXX XXXXX"
          />
        </label>

        <label className={styles.field}>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@email.com"
          />
        </label>

        <label className={styles.field}>
          <span>Experience</span>
          <select
            name="experience"
            value={form.experience}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select experience
            </option>
            <option value="fresher">Fresher</option>
            <option value="0-2">0–2 years</option>
            <option value="2-5">2–5 years</option>
            <option value="5-8">5–8 years</option>
            <option value="8+">8+ years</option>
          </select>
        </label>
      </div>

      <label className={styles.upload}>
        <span className={styles.uploadLabel}>Upload Resume</span>
        <span className={styles.uploadBox}>
          <strong>{resumeName || "Choose PDF or DOC file"}</strong>
          <em>Max recommended size: 5MB</em>
        </span>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          required
          onChange={handleFileChange}
        />
      </label>

      <p className={styles.privacy}>
        Your resume will be used solely for recruitment and job-matching
        purposes. We do not sell candidate information to third parties.
      </p>

      <div className={styles.actions}>
        <Button type="submit">Submit Resume</Button>
        {submitted ? (
          <p className={styles.success} role="status">
            Resume submitted successfully. Our team will review it soon.
          </p>
        ) : null}
      </div>
    </form>
  );
}

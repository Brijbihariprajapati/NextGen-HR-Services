"use client";

import { FormEvent, useState, type ChangeEvent } from "react";
import Button from "@/components/Button/Button";
import styles from "./EmployerForm.module.css";

type FormState = {
  companyName: string;
  name: string;
  email: string;
  phone: string;
  requirement: string;
};

const initialState: FormState = {
  companyName: "",
  name: "",
  email: "",
  phone: "",
  requirement: "",
};

export default function EmployerForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialState);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate={false}>
      <div className={styles.intro}>
        <h2 className={styles.title}>Have a hiring requirement?</h2>
        <p className={styles.lead}>
          Share your role details and our team will connect with you shortly.
        </p>
      </div>

      <div className={styles.grid}>
        <label className={styles.field}>
          <span>Company Name</span>
          <input
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            required
            placeholder="Your company"
          />
        </label>

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
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@company.com"
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
      </div>

      <label className={styles.field}>
        <span>Requirement</span>
        <textarea
          name="requirement"
          value={form.requirement}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Roles, skills, locations, timelines..."
        />
      </label>

      <div className={styles.actions}>
        <Button type="submit">Submit Requirement</Button>
        {submitted ? (
          <p className={styles.success} role="status">
            Requirement received. We will get back to you soon.
          </p>
        ) : null}
      </div>
    </form>
  );
}

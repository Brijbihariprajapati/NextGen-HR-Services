"use client";

import { FormEvent, useState, type ChangeEvent } from "react";
import Button from "@/components/Button/Button";
import styles from "./EmployerForm.module.css";

type FormState = {
  jobTitle: string;
  openings: string;
  location: string;
  experience: string;
  salary: string;
  employmentType: string;
  joiningTimeline: string;
  additionalRequirements: string;
};

const initialState: FormState = {
  jobTitle: "",
  openings: "",
  location: "",
  experience: "",
  salary: "",
  employmentType: "",
  joiningTimeline: "",
  additionalRequirements: "",
};

export default function EmployerForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [jdFileName, setJdFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setJdFileName(file ? file.name : "");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialState);
    setJdFileName("");
    event.currentTarget.reset();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.intro}>
        <h2 className={styles.title}>Have a hiring requirement?</h2>
        <p className={styles.lead}>
          Share role details, openings, location, CTC, and your JD — our consultants
          will review and come back with a clear search plan.
        </p>
      </div>

      <div className={styles.grid}>
        <label className={styles.field}>
          <span>Job title</span>
          <input
            name="jobTitle"
            value={form.jobTitle}
            onChange={handleChange}
            required
            placeholder="e.g. Senior Software Engineer"
          />
        </label>

        <label className={styles.field}>
          <span>Number of openings</span>
          <input
            type="number"
            name="openings"
            value={form.openings}
            onChange={handleChange}
            required
            min={1}
            placeholder="e.g. 3"
          />
        </label>

        <label className={styles.field}>
          <span>Location</span>
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            required
            placeholder="City / Remote / Hybrid"
          />
        </label>

        <label className={styles.field}>
          <span>Experience required</span>
          <input
            name="experience"
            value={form.experience}
            onChange={handleChange}
            required
            placeholder="e.g. 3–5 years"
          />
        </label>

        <label className={styles.field}>
          <span>Salary / CTC range</span>
          <input
            name="salary"
            value={form.salary}
            onChange={handleChange}
            required
            placeholder="e.g. 8–12 LPA"
          />
        </label>

        <label className={styles.field}>
          <span>Employment type</span>
          <select
            name="employmentType"
            value={form.employmentType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select employment type
            </option>
            <option value="permanent">Permanent</option>
            <option value="contract">Contract</option>
            <option value="c2h">Contract & C2H</option>
            <option value="internship">Internship</option>
          </select>
        </label>

        <label className={`${styles.field} ${styles.full}`}>
          <span>Joining timeline</span>
          <input
            name="joiningTimeline"
            value={form.joiningTimeline}
            onChange={handleChange}
            required
            placeholder="e.g. Immediate / 15 days / 30 days"
          />
        </label>
      </div>

      <label className={styles.upload}>
        <span className={styles.uploadLabel}>Job description upload</span>
        <span className={styles.uploadBox}>
          <strong>{jdFileName || "Choose PDF or DOC file"}</strong>
          <em>Max recommended size: 5MB</em>
        </span>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          required
          onChange={handleFileChange}
        />
      </label>

      <label className={styles.field}>
        <span>Additional requirements</span>
        <textarea
          name="additionalRequirements"
          value={form.additionalRequirements}
          onChange={handleChange}
          rows={4}
          placeholder="Skills, notice period, shift timings, certifications, or other notes..."
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

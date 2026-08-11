import type { Metadata } from "next";
import PageHero from "@/components/PageHero/PageHero";
import CandidateForm from "@/components/CandidateForm/CandidateForm";
import InfoPanel from "@/components/InfoPanel/InfoPanel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "For Candidates",
  description: "Submit your resume and find your next opportunity with NextGen HR Services.",
};

const steps = [
  {
    title: "Submit your profile",
    description: "Share your resume, experience, and preferred roles.",
  },
  {
    title: "Profile review",
    description: "Our consultants match your background against live requirements.",
  },
  {
    title: "Interview support",
    description: "We brief you on the role and guide you through the process.",
  },
];

export default function CandidatesPage() {
  return (
    <>
      <PageHero
        title="For Candidates"
        description="Share your profile and let us help you move toward the right opportunity."
      />

      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.layout}`}>
          <CandidateForm />
          <InfoPanel
            eyebrow="How it works"
            title="From resume to interview"
            steps={steps}
            highlight={{ value: "500+", label: "Candidates placed to date" }}
          />
        </div>
      </section>
    </>
  );
}

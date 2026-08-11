import type { Metadata } from "next";
import PageHero from "@/components/PageHero/PageHero";
import EmployerForm from "@/components/EmployerForm/EmployerForm";
import InfoPanel from "@/components/InfoPanel/InfoPanel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "For Employers",
  description: "Submit your hiring requirement to NextGen HR Services.",
};

const steps = [
  {
    title: "Share your requirement",
    description: "Tell us the role, skills, and timeline through the form below.",
  },
  {
    title: "Consultant review",
    description: "A dedicated consultant reviews scope and confirms the search plan.",
  },
  {
    title: "Shortlist delivery",
    description: "Screened, relevant profiles delivered within days, not weeks.",
  },
];

export default function EmployersPage() {
  return (
    <>
      <PageHero
        title="For Employers"
        description="Partner with us to hire skilled professionals across technology and other domains."
      />

      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.layout}`}>
          <EmployerForm />
          <InfoPanel
            eyebrow="What happens next"
            title="From brief to shortlist"
            steps={steps}
            highlight={{ value: "24–48 hrs", label: "Typical time to first response" }}
          />
        </div>
      </section>
    </>
  );
}

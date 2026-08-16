import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero/PageHero";
import StatsSection from "@/components/StatsSection/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import ProcessSteps from "@/components/ProcessSteps/ProcessSteps";
import CTASection from "@/components/CTASection/CTASection";
import {
  EditorialList,
  HighlightBand,
  SplitPromises,
} from "@/components/EditorialBlocks/EditorialBlocks";
import { pageMedia } from "@/data/pageMedia";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "NextGen HR Services helps organizations and professionals connect through structured, end-to-end recruitment across IT, non-IT, and manufacturing.",
};

const values = [
  {
    title: "Our mission",
    copy: "To help businesses build strong teams and help professionals find work that fits their skills, pace, and long-term ambitions — not just fill an open seat for the sake of speed.",
  },
  {
    title: "Our approach",
    copy: "Structured, consultative recruitment. We map the role, pressure-test the brief, screen for real fit, and stay involved through interviews, feedback loops, and offer closure.",
  },
  {
    title: "Our commitment",
    copy: "Transparent communication, honest timelines, and relationships that outlast a single placement. If a profile is not right, we say so early — protecting both client and candidate time.",
  },
  {
    title: "Our standard",
    copy: "Every engagement gets the same discipline: clear ownership, screened shortlists, and follow-through until the hire is closed or the brief is honestly reset.",
  },
];

const whoWeServe = [
  {
    title: "Growing companies",
    copy: "Teams that need reliable hiring support without building a large in-house recruitment engine overnight. We plug in quickly and stay accountable to outcomes.",
  },
  {
    title: "Established enterprises",
    copy: "Organizations looking for specialist, leadership, bulk, or contract & C2H support with clear ownership, reporting, and multi-location coordination.",
  },
  {
    title: "Ambitious professionals",
    copy: "Candidates who want relevant opportunities, honest guidance, and a partner that respects their time, preferences, and privacy throughout the process.",
  },
  {
    title: "Hiring leaders under pressure",
    copy: "Managers who need interview-ready profiles fast — without drowning in unsuitable resumes or unclear agency updates.",
  },
];

const differentiators = [
  {
    title: "Role clarity before sourcing",
    copy: "We align on skills, seniority, culture signals, compensation reality, and must-haves before the search begins — so shortlists stay focused and useful.",
  },
  {
    title: "Human screening, not resume spam",
    copy: "Every profile is reviewed against the brief for capability and intent. You receive candidates worth interviewing, not inbox clutter.",
  },
  {
    title: "Coverage that matches real demand",
    copy: "IT, non-IT, and manufacturing — with permanent, contract & C2H, bulk, executive, and RPO engagement options under one partner.",
  },
  {
    title: "Pan-India delivery mindset",
    copy: "We support hiring across locations with the same discipline: clear communication, paced follow-ups, and closure support until joining.",
  },
  {
    title: "Consultant-led accountability",
    copy: "You get a clear point of contact who owns the brief, manages feedback, and keeps both sides moving with context — not ticket-style updates.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Connecting talent with opportunity"
        description="End-to-end recruitment for growing teams and ambitious professionals across IT, non-IT, and manufacturing — with clear briefs, screened shortlists, and support from first call to offer."
        image={pageMedia.about.src}
        imageAlt={pageMedia.about.alt}
        primaryCta={{ href: "/employers", label: "Hire with us" }}
        secondaryCta={{ href: "/candidates", label: "Join as candidate" }}
      />

      <StatsSection overlap={false} />

      <section className={`section ${styles.story}`}>
        <div className={`container ${styles.storyGrid}`}>
          <div className={styles.storyCopy}>
            <p className="eyebrow">Who we are</p>
            <h2 className="section-title">Built for clarity, pace, and lasting hires</h2>
            <p className="section-lead">
              NextGen HR Services is a recruitment partner for growing teams across
              IT, non-IT, and manufacturing. We combine role clarity, disciplined
              screening, and consultant-led delivery so every shortlist is relevant
              and every conversation moves toward closure.
            </p>
            <p className={styles.storyBody}>
              Hiring should feel controlled — not chaotic. Whether you need
              permanent talent, contract &amp; C2H support, bulk hiring, or
              leadership search, we stay close to the brief, the market, and the
              candidate experience from first call to offer.
            </p>
            <p className={styles.storyBody}>
              Our consultants treat every requirement as a business decision:
              timeline, team context, compensation reality, and the kind of person
              who will succeed in the role — not just keywords on a JD.
            </p>
          </div>

          <div className={styles.storyMedia}>
            <Image
              src={pageMedia.aboutStory.src}
              alt={pageMedia.aboutStory.alt}
              fill
              className={styles.storyImage}
              sizes="(max-width: 860px) 100vw, 46vw"
            />
          </div>
        </div>
      </section>

      <EditorialList
        band
        eyebrow="What guides us"
        title="Mission, approach, commitment"
        lead="Four principles that shape how we search, screen, communicate, and close — on every engagement."
        items={values}
      />

      <SplitPromises
        eyebrow="Who we work with"
        title="Partners on both sides of hiring"
        lead="We support employers who need dependable delivery and professionals who want the right next step — with the same standard of care, clarity, and respect."
        body="Whether you are scaling a team, filling a critical specialist seat, or exploring your next career move, you get structured guidance and honest communication at every step."
        items={whoWeServe}
      />

      <HighlightBand
        eyebrow="Our belief"
        title="Great hiring is clarity, not volume."
        copy="More resumes rarely solve a tough brief. Better briefs, sharper screening, and honest conversations do. That is the standard we hold ourselves to — whether the need is one critical hire or a multi-location drive."
      />

      <EditorialList
        eyebrow="Why teams stay with us"
        title="What makes NextGen different"
        lead="Practical advantages that show up in shortlists, timelines, candidate experience, and long-term trust."
        items={differentiators}
      />

      <ProcessSteps />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}

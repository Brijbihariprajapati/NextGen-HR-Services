"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/Button/Button";
import { navLinks } from "@/data/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="NextGen HR Services home">
            <Image
              src="/logo-mark.png"
              alt="NextGen HR Services logo"
              width={530}
              height={402}
              className={styles.brandMark}
              priority
            />
          <span className={styles.brandText}>
            <strong>NextGen</strong>
            <span>HR Services</span>
          </span>
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className={`${styles.bar} ${open ? styles.barOpen : ""}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen : ""}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen : ""}`} />
        </button>

        <div className={`${styles.navWrap} ${open ? styles.navOpen : ""}`}>
          <nav id="primary-navigation" className={styles.nav} aria-label="Primary">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.link} ${active ? styles.active : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className={styles.cta}>
            <Button href="/candidates" variant="secondary">
              Upload Resume
            </Button>
            <Button href="/employers">Hire Talent</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

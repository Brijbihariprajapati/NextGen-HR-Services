import { contactDetails } from "@/data/contact";
import styles from "./ContactInfo.module.css";

const items = [
  {
    label: "Email",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
  },
  {
    label: "Phone",
    value: contactDetails.phone,
    href: `tel:${contactDetails.phone.replace(/\s/g, "")}`,
  },
  {
    label: "Location",
    value: contactDetails.location,
  },
  {
    label: "LinkedIn",
    value: "Connect with us",
    href: contactDetails.linkedIn,
    external: true,
  },
];

export default function ContactInfo() {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.label} className={styles.item}>
          <p className={styles.label}>{item.label}</p>
          {item.href ? (
            <a
              href={item.href}
              className={styles.value}
              {...(item.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              {item.value}
            </a>
          ) : (
            <p className={styles.value}>{item.value}</p>
          )}
        </li>
      ))}
    </ul>
  );
}

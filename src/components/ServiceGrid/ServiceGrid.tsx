import { services, type ServiceItem } from "@/data/services";
import styles from "./ServiceGrid.module.css";

type ServiceGridProps = {
  items?: ServiceItem[];
  compact?: boolean;
};

export default function ServiceGrid({ items = services, compact = false }: ServiceGridProps) {
  return (
    <ul className={`${styles.grid} ${compact ? styles.compact : ""}`}>
      {items.map((service, index) => (
        <li
          key={service.id}
          className={styles.item}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
          <h3 className={styles.title}>{service.title}</h3>
          <p className={styles.description}>{service.description}</p>
        </li>
      ))}
    </ul>
  );
}

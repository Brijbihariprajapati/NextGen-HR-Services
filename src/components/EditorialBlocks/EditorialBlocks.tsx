import styles from "./EditorialBlocks.module.css";

export type EditorialItem = {
  title: string;
  copy: string;
};

type EditorialListProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  items: EditorialItem[];
  band?: boolean;
};

export function EditorialList({
  eyebrow,
  title,
  lead,
  items,
  band = false,
}: EditorialListProps) {
  return (
    <section className={`section ${band ? "section-band" : ""} ${styles.wrap}`}>
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          {lead ? <p className="section-lead">{lead}</p> : null}
        </div>
        <div className={styles.list}>
          {items.map((item, index) => (
            <article key={item.title} className={styles.item}>
              <span className={styles.index}>0{index + 1}</span>
              <div>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemCopy}>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type HighlightBandProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export function HighlightBand({ eyebrow, title, copy }: HighlightBandProps) {
  return (
    <section className={styles.band}>
      <div className={`container ${styles.bandInner}`}>
        <p className={styles.bandEyebrow}>{eyebrow}</p>
        <h2 className={styles.bandTitle}>{title}</h2>
        <p className={styles.bandCopy}>{copy}</p>
      </div>
    </section>
  );
}

type SplitPromisesProps = {
  eyebrow: string;
  title: string;
  lead: string;
  body?: string;
  items: EditorialItem[];
};

export function SplitPromises({
  eyebrow,
  title,
  lead,
  body,
  items,
}: SplitPromisesProps) {
  return (
    <section className={`section ${styles.split}`}>
      <div className="container">
        <div className={styles.splitHead}>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          <p className="section-lead">{lead}</p>
          {body ? <p className={styles.splitBody}>{body}</p> : null}
        </div>
        <ul className={styles.splitList}>
          {items.map((item, index) => (
            <li key={item.title}>
              <span className={styles.splitIndex}>0{index + 1}</span>
              <div>
                <strong>{item.title}</strong>
                <span>{item.copy}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

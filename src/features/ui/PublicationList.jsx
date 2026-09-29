import { useMemo, useState } from "react";
import styles from "../styles/Publications.module.css";

const HIGHLIGHT_NAME = "Ashek Seum";

// Keys are lowercased publication_type values; unknown types fall back to the raw value.
const TYPE_LABELS = {
  journal: { singular: "Journal article", plural: "Journal articles" },
  "journal article": { singular: "Journal article", plural: "Journal articles" },
  conference: { singular: "Conference paper", plural: "Conference papers" },
  "conference paper": { singular: "Conference paper", plural: "Conference papers" },
  workshop: { singular: "Workshop paper", plural: "Workshop papers" },
  "book chapter": { singular: "Book chapter", plural: "Book chapters" },
  book: { singular: "Book", plural: "Books" },
  preprint: { singular: "Preprint", plural: "Preprints" },
  thesis: { singular: "Thesis", plural: "Theses" },
};

const typeKey = (pub) => (pub.publication_type || "other").trim().toLowerCase();

const typeLabel = (key, raw, form = "singular") =>
  TYPE_LABELS[key]?.[form] ?? raw ?? "Other";

const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const highlightName = (authors = "", name) =>
  authors
    .split(new RegExp(`(${escapeRegExp(name)})`, "gi"))
    .map((part, i) =>
      part.toLowerCase() === name.toLowerCase() ? (
        <span key={i} className={styles.me}>{part}</span>
      ) : (
        part
      )
    );

const PublicationList = ({ publications }) => {
  const [activeType, setActiveType] = useState("all");
  const [query, setQuery] = useState("");
  const [openBibtex, setOpenBibtex] = useState({});
  const [copiedId, setCopiedId] = useState(null);

  const numbers = useMemo(
    () => new Map(publications.map((pub, i) => [pub.id, publications.length - i])),
    [publications]
  );

  const types = useMemo(() => {
    const counts = new Map();
    publications.forEach((pub) => {
      const key = typeKey(pub);
      const entry = counts.get(key) ?? { key, raw: pub.publication_type, count: 0 };
      entry.count += 1;
      counts.set(key, entry);
    });
    return [...counts.values()];
  }, [publications]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return publications.filter((pub) => {
      if (activeType !== "all" && typeKey(pub) !== activeType) return false;
      if (!q) return true;
      return [pub.title, pub.authors, pub.publisher]
        .some((field) => field?.toLowerCase().includes(q));
    });
  }, [publications, activeType, query]);

  const toggleBibtex = (id) =>
    setOpenBibtex((prev) => ({ ...prev, [id]: !prev[id] }));

  const copyBibtex = async (pub) => {
    try {
      await navigator.clipboard.writeText(pub.bibtex);
      setCopiedId(pub.id);
      setTimeout(() => setCopiedId((id) => (id === pub.id ? null : id)), 1500);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <div className={styles.tabs}>
          <button
            type="button"
            className={`${styles.tab} ${activeType === "all" ? styles.tabActive : ""}`}
            onClick={() => setActiveType("all")}
          >
            All <span className={styles.tabCount}>{publications.length}</span>
          </button>
          {types.map(({ key, raw, count }) => (
            <button
              key={key}
              type="button"
              className={`${styles.tab} ${activeType === key ? styles.tabActive : ""}`}
              onClick={() => setActiveType(key)}
            >
              {typeLabel(key, raw, "plural")} <span className={styles.tabCount}>{count}</span>
            </button>
          ))}
        </div>
        <input
          type="search"
          className={styles.search}
          placeholder="Search title, co-author, venue"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {visible.length === 0 ? (
        <p className={styles.empty}>No publications match your filters.</p>
      ) : (
        <ol className={styles.list}>
          {visible.map((pub) => (
            <li key={pub.id} className={styles.item}>
              <span className={styles.number}>[{numbers.get(pub.id)}]</span>
              <div>
                <div className={styles.badges}>
                  <span className={styles.badge}>
                    {typeLabel(typeKey(pub), pub.publication_type)}
                  </span>
                </div>

                <h3 className={styles.title}>
                  {pub.link ? (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>

                {pub.authors && (
                  <p className={styles.authors}>{highlightName(pub.authors, HIGHLIGHT_NAME)}</p>
                )}

                {pub.comments && <p className={styles.note}>†{pub.comments}</p>}

                <p className={styles.venue}>
                  {pub.publisher && (
                    <i>
                      {pub.publisher_link ? (
                        <a href={pub.publisher_link} target="_blank" rel="noopener noreferrer">
                          {pub.publisher}
                        </a>
                      ) : (
                        pub.publisher
                      )}
                    </i>
                  )}
                  {pub.publisher && pub.year && ", "}
                  {pub.year && `${pub.year}.`}
                </p>

                <div className={styles.links}>
                  {pub.link && (
                    <a className={styles.link} href={pub.link} target="_blank" rel="noopener noreferrer">
                      Paper
                    </a>
                  )}
                  {pub.publisher_link && (
                    <a className={styles.link} href={pub.publisher_link} target="_blank" rel="noopener noreferrer">
                      Venue
                    </a>
                  )}
                  {pub.bibtex && (
                    <button
                      type="button"
                      className={`${styles.link} ${styles.linkAccent}`}
                      onClick={() => toggleBibtex(pub.id)}
                      aria-expanded={!!openBibtex[pub.id]}
                    >
                      {openBibtex[pub.id] ? "Hide BibTeX" : "BibTeX"}
                    </button>
                  )}
                </div>

                {pub.bibtex && openBibtex[pub.id] && (
                  <div className={styles.bibtex}>
                    <pre>{pub.bibtex}</pre>
                    <button type="button" className={styles.copyButton} onClick={() => copyBibtex(pub)}>
                      {copiedId === pub.id ? "Copied!" : "Copy to clipboard"}
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default PublicationList;

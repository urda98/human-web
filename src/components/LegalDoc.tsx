type SectionBlock = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

type Section = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: SectionBlock[];
};

type LegalDocProps = {
  title: string;
  updatedAt: string;
  version?: string;
  intro?: string;
  sections: Section[];
};

function BlockContent({
  paragraphs,
  bullets,
}: {
  paragraphs?: string[];
  bullets?: string[];
}) {
  return (
    <>
      {paragraphs?.map((p) => (
        <p key={p.slice(0, 48)}>{p}</p>
      ))}
      {bullets && bullets.length > 0 ? (
        <ul>
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export function LegalDoc({
  title,
  updatedAt,
  version,
  intro,
  sections,
}: LegalDocProps) {
  return (
    <article className="legal-doc">
      <header className="legal-header">
        <h1>{title}</h1>
        <p className="legal-updated">
          {version ? (
            <>
              Versión {version}
              <span aria-hidden="true"> — </span>
            </>
          ) : null}
          Última actualización: {updatedAt}
        </p>
        {intro ? <p className="legal-intro">{intro}</p> : null}
      </header>
      {sections.map((section) => (
        <section key={section.heading} className="legal-section">
          <h2>{section.heading}</h2>
          <BlockContent
            paragraphs={section.paragraphs}
            bullets={section.bullets}
          />
          {section.subsections?.map((sub) => (
            <div
              key={sub.heading ?? sub.paragraphs?.[0]?.slice(0, 48)}
              className="legal-subsection"
            >
              {sub.heading ? <h3>{sub.heading}</h3> : null}
              <BlockContent
                paragraphs={sub.paragraphs}
                bullets={sub.bullets}
              />
            </div>
          ))}
        </section>
      ))}
    </article>
  );
}

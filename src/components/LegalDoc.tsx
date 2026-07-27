type Section = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

type LegalDocProps = {
  title: string;
  updatedAt: string;
  intro?: string;
  sections: Section[];
};

export function LegalDoc({ title, updatedAt, intro, sections }: LegalDocProps) {
  return (
    <article className="legal-doc">
      <header className="legal-header">
        <h1>{title}</h1>
        <p className="legal-updated">Última actualización: {updatedAt}</p>
        {intro ? <p className="legal-intro">{intro}</p> : null}
      </header>
      {sections.map((section) => (
        <section key={section.heading} className="legal-section">
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
          {section.bullets && section.bullets.length > 0 ? (
            <ul>
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </article>
  );
}

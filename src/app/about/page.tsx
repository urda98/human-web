import type { Metadata } from "next";
import Link from "next/link";
import {
  ABOUT_BLURB,
  CONTACT_EMAIL,
  FEATURES,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description: `Qué es ${SITE_NAME}, qué hace y cómo contactarnos.`,
};

export default function AboutPage() {
  return (
    <article className="about-page">
      <header className="about-header">
        <h1>Quiénes somos</h1>
        <p className="about-lead">{ABOUT_BLURB}</p>
      </header>

      <section className="about-section">
        <h2>Qué es {SITE_NAME}</h2>
        <p>{SITE_TAGLINE}</p>
      </section>

      <section className="about-section">
        <h2>Qué hace</h2>
        <ul className="feature-list">
          {FEATURES.map((item) => (
            <li key={item}>
              <span className="feature-check" aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="about-section">
        <h2>Misión</h2>
        <p>
          Facilitar el día a día de coaches y alumnos con una herramienta clara
          para planificar rutinas, registrar sesiones y dar seguimiento al
          progreso, sin reemplazar el criterio profesional del entrenador.
        </p>
      </section>

      <section className="about-section">
        <h2>Contacto</h2>
        <p>
          Escribinos a{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> o visitá la
          página de <Link href="/contact">Contacto</Link>.
        </p>
      </section>
    </article>
  );
}

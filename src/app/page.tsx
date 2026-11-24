import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { PhoneShot } from "@/components/PhoneShot";
import {
  ABOUT_BLURB,
  CONTACT_EMAIL,
  FAQ_ITEMS,
  FEATURES,
  SITE_SHORT_TAGLINE,
  SITE_TAGLINE,
  STUDENT_SCREENSHOTS,
  TECH_STACK,
  TRAINER_SCREENSHOTS,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <p className="hero-eyebrow">App de entrenamiento</p>
        <h1 className="hero-brand">
          <BrandMark href={null} size="lg" className="hero-brand-mark" />
        </h1>
        <p className="hero-tagline">Tu mejor versión</p>
        <p className="hero-lead">{SITE_TAGLINE}</p>
        <p className="hero-sub">{SITE_SHORT_TAGLINE}</p>
        <div className="hero-actions">
          <a href="#app" className="btn btn-primary">
            Ver la aplicación
          </a>
          <Link href="/privacy" className="btn btn-ghost">
            Política de privacidad
          </Link>
        </div>
      </section>

      <section id="app" className="home-section screenshots-section">
        <div className="section-head">
          <h2>Así se ve Human</h2>
          <p>Capturas reales de la app para alumnos y entrenadores.</p>
        </div>

        <div className="shot-group">
          <h3>Alumno</h3>
          <div className="phone-row">
            {STUDENT_SCREENSHOTS.map((shot, index) => (
              <PhoneShot
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                label={shot.label}
                priority={index < 2}
              />
            ))}
          </div>
        </div>

        <div className="shot-group">
          <h3>Entrenador</h3>
          <div className="phone-row">
            {TRAINER_SCREENSHOTS.map((shot) => (
              <PhoneShot
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                label={shot.label}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="home-section features-section">
        <div className="section-head">
          <h2>¿Qué podés hacer?</h2>
          <p>Todo lo necesario para planificar, ejecutar y seguir entrenamientos.</p>
        </div>
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

      <section className="home-section stores-section">
        <div className="section-head">
          <h2>Disponible en Android y iOS</h2>
          <p>
            Descargá Human y gestioná tus entrenamientos desde cualquier
            dispositivo.
          </p>
        </div>
        <div className="store-badges">
          <span className="store-badge">Google Play</span>
          <span className="store-badge">App Store</span>
        </div>
      </section>

      <section className="home-section about-teaser">
        <div className="section-head">
          <h2>Quiénes somos</h2>
          <p>{ABOUT_BLURB}</p>
        </div>
        <Link href="/about" className="text-link">
          Más sobre Human
        </Link>
      </section>

      <section className="home-section trust-section">
        <div className="section-head">
          <h2>Protegido por</h2>
          <p>Infraestructura confiable para autenticación y datos.</p>
        </div>
        <ul className="tech-list">
          {TECH_STACK.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="home-section faq-section">
        <div className="section-head">
          <h2>Preguntas frecuentes</h2>
          <p>Respuestas rápidas antes de escribir a soporte.</p>
        </div>
        <div className="faq-list">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="home-cards" aria-label="Documentos legales">
        <Link href="/privacy" className="home-card">
          <h2>Privacidad</h2>
          <p>Qué datos usamos y cómo los protegemos.</p>
        </Link>
        <Link href="/terms" className="home-card">
          <h2>Términos</h2>
          <p>Condiciones de uso de la aplicación.</p>
        </Link>
        <Link href="/delete-account" className="home-card">
          <h2>Eliminar cuenta</h2>
          <p>Cómo solicitar el borrado de tus datos.</p>
        </Link>
        <Link href="/contact" className="home-card">
          <h2>Contacto</h2>
          <p>{CONTACT_EMAIL}</p>
        </Link>
      </section>
    </>
  );
}

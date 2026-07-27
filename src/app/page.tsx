import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <h1>{SITE_NAME}</h1>
        <p className="hero-lead">{SITE_TAGLINE}</p>
        <div className="hero-actions">
          <Link href="/privacy" className="btn btn-primary">
            Política de privacidad
          </Link>
          <Link href="/delete-account" className="btn btn-ghost">
            Eliminar cuenta
          </Link>
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
          <p>Escribinos si necesitás ayuda.</p>
        </Link>
      </section>
    </>
  );
}

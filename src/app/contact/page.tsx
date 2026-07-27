import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contacto de soporte de ${SITE_NAME}.`,
};

export default function ContactPage() {
  return (
    <div className="contact-block">
      <h1>Contacto</h1>
      <p>
        Para soporte, privacidad o solicitudes relacionadas con tu cuenta de{" "}
        {SITE_NAME}, escribinos a:
      </p>
      <p>
        <a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
      </p>
      <p>
        Si querés eliminar tu cuenta, también podés seguir las instrucciones en{" "}
        <Link href="/delete-account">Eliminar cuenta</Link>.
      </p>
      <p>
        Nota: {CONTACT_EMAIL} es un correo provisional hasta que Human tenga
        dominio propio. Actualizaremos esta página cuando el contacto definitivo
        esté disponible.
      </p>
    </div>
  );
}

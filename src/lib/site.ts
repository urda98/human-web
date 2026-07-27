/** Site-wide constants. Update CONTACT_EMAIL when you have a real inbox. */
export const SITE_NAME = "Human";
export const CONTACT_EMAIL = "soporte@human.app";
export const APP_BUNDLE_ID = "com.human.app";
export const SITE_TAGLINE =
  "Entrenamiento entre coaches y alumnos, en un solo lugar.";

export const NAV_LINKS = [
  { href: "/privacy", label: "Privacidad" },
  { href: "/terms", label: "Términos" },
  { href: "/delete-account", label: "Eliminar cuenta" },
  { href: "/contact", label: "Contacto" },
] as const;

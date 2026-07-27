/** Site-wide constants. */
export const SITE_NAME = "Human";
export const CONTACT_EMAIL = "appfit02@gmail.com";
export const APP_BUNDLE_ID = "com.human.app";
export const LEGAL_VERSION = "1.0";
export const LEGAL_UPDATED_AT = "27 Julio 2026";

export const SITE_TAGLINE =
  "La plataforma que conecta entrenadores y alumnos para planificar, ejecutar y seguir entrenamientos.";

export const SITE_SHORT_TAGLINE =
  "Gestioná todos tus entrenamientos desde una sola aplicación.";

export const ABOUT_BLURB =
  "Human nació con el objetivo de simplificar la comunicación entre entrenadores y alumnos mediante una única plataforma donde administrar entrenamientos, progreso y seguimiento.";

export const NAV_LINKS = [
  { href: "/about", label: "Quiénes somos" },
  { href: "/privacy", label: "Privacidad" },
  { href: "/terms", label: "Términos" },
  { href: "/delete-account", label: "Eliminar cuenta" },
  { href: "/contact", label: "Contacto" },
] as const;

export const FEATURES = [
  "Crear y editar rutinas por semanas y días",
  "Asignar alumnos y seguir su cumplimiento",
  "Registrar sesiones de entrenamiento en vivo",
  "Ver progreso, RPE y feedback",
  "Gestionar turnos y comunicación operativa",
] as const;

export const FAQ_ITEMS = [
  {
    question: "¿Necesito internet para usar Human?",
    answer:
      "Sí. Human sincroniza rutinas, progreso y cuentas con Firebase, por lo que necesitás conexión a internet para iniciar sesión y mantener tus datos al día.",
  },
  {
    question: "¿Puedo tener varios entrenadores?",
    answer:
      "La relación coach–alumno se gestiona dentro de la aplicación. Si necesitás cambiar de entrenador o tenés dudas sobre tu vínculo actual, escribinos a soporte.",
  },
  {
    question: "¿Cómo elimino mi cuenta?",
    answer:
      "Podés solicitar la eliminación escribiendo a nuestro correo de soporte desde el email con el que te registraste. El procedimiento completo está en la página Eliminar cuenta.",
  },
  {
    question: "¿Dónde reporto un error?",
    answer:
      `Escribinos a ${CONTACT_EMAIL} con una descripción breve del problema, el rol (entrenador o alumno) y, si podés, capturas de pantalla.`,
  },
] as const;

export const TECH_STACK = [
  "Firebase",
  "Cloud Firestore",
  "Google Authentication",
] as const;

export const STUDENT_SCREENSHOTS = [
  {
    src: "/screenshots/student/02-home.png",
    alt: "Inicio del alumno con rutina, progreso y turnos",
    label: "Home",
  },
  {
    src: "/screenshots/student/03-plan.png",
    alt: "Rutina de entrenamiento del alumno",
    label: "Rutina",
  },
  {
    src: "/screenshots/student/06-progress.png",
    alt: "Progreso y esfuerzo percibido del alumno",
    label: "Progreso",
  },
  {
    src: "/screenshots/student/04-session.png",
    alt: "Entrenamiento en curso con series y descanso",
    label: "Entrenamiento",
  },
] as const;

export const TRAINER_SCREENSHOTS = [
  {
    src: "/screenshots/trainer/01-athletes.png",
    alt: "Lista de deportistas del entrenador",
    label: "Deportistas",
  },
  {
    src: "/screenshots/trainer/02-routines-list.png",
    alt: "Lista de rutinas del entrenador",
    label: "Rutinas",
  },
  {
    src: "/screenshots/trainer/05-routine-editor.png",
    alt: "Editor de rutina por semanas",
    label: "Editor",
  },
  {
    src: "/screenshots/trainer/03-home-calendar.png",
    alt: "Calendario de turnos nutricionales",
    label: "Turnos",
  },
] as const;

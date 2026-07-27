import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const termsUpdatedAt = "27 de julio de 2026";

export const termsIntro = `Estos Términos y Condiciones regulan el uso de ${SITE_NAME}, la aplicación móvil que conecta coaches y alumnos para gestionar entrenamientos. Al usar la aplicación, aceptás estos términos.`;

export const termsSections = [
  {
    heading: "1. El servicio",
    paragraphs: [
      `${SITE_NAME} permite crear cuentas de coach o alumno, asignar y seguir rutinas, registrar sesiones de entrenamiento y utilizar funciones relacionadas (por ejemplo, notificaciones y sincronización entre dispositivos).`,
      "El servicio se ofrece “tal cual” está disponible. Podemos modificar, suspender o discontinuar funciones con aviso razonable cuando sea posible.",
    ],
  },
  {
    heading: "2. Cuentas y roles",
    paragraphs: [
      "Sos responsable de la exactitud de la información de tu cuenta y de mantener la confidencialidad de tus credenciales.",
      `Los coaches son responsables del contenido de entrenamiento que crean o asignan. Los alumnos son responsables del uso que hagan de ese contenido. ${SITE_NAME} no reemplaza el criterio profesional de un entrenador ni el consejo médico.`,
    ],
  },
  {
    heading: "3. Salud y entrenamiento",
    paragraphs: [
      "La información y las rutinas en la aplicación no constituyen consejo médico. Consultá a un profesional de la salud antes de iniciar o modificar un programa de ejercicio, especialmente si tenés alguna condición preexistente.",
      `En la medida permitida por la ley, ${SITE_NAME} y sus operadores no son responsables de lesiones o daños derivados del uso de rutinas o del seguimiento de recomendaciones dentro de la app.`,
    ],
  },
  {
    heading: "4. Uso aceptable",
    paragraphs: ["Te comprometés a no:"],
    bullets: [
      "Usar la aplicación de forma ilegal o para acosar a otros usuarios.",
      "Intentar acceder a cuentas o datos ajenos sin autorización.",
      "Interferir con el funcionamiento técnico del servicio.",
      "Subir contenido ilegal, ofensivo o que vulnere derechos de terceros.",
    ],
  },
  {
    heading: "5. Contenido del usuario",
    paragraphs: [
      "Conservás los derechos sobre el contenido que cargás (por ejemplo, fotos de perfil o datos de entrenamiento). Nos otorgás una licencia limitada para alojarlo y mostrarlo dentro del servicio, solo en la medida necesaria para operar ${SITE_NAME}.",
    ],
  },
  {
    heading: "6. Privacidad",
    paragraphs: [
      "El tratamiento de datos personales se describe en la Política de Privacidad. El uso de la aplicación implica también la aceptación de esa política.",
    ],
  },
  {
    heading: "7. Terminación",
    paragraphs: [
      `Podés dejar de usar ${SITE_NAME} en cualquier momento y solicitar la eliminación de tu cuenta según lo indicado en la página Eliminar cuenta.`,
      "Podemos suspender o cerrar cuentas que incumplan estos términos o que pongan en riesgo a otros usuarios o al servicio.",
    ],
  },
  {
    heading: "8. Limitación de responsabilidad",
    paragraphs: [
      `En la máxima medida permitida por la ley aplicable, ${SITE_NAME} no será responsable por daños indirectos, lucros cesantes o pérdida de datos derivados del uso o la imposibilidad de uso de la aplicación.`,
    ],
  },
  {
    heading: "9. Cambios",
    paragraphs: [
      "Podemos actualizar estos términos. La versión vigente se publicará en esta página con su fecha de actualización.",
    ],
  },
  {
    heading: "10. Contacto",
    paragraphs: [`Consultas sobre estos términos: ${CONTACT_EMAIL}.`],
  },
];

import { CONTACT_EMAIL, LEGAL_UPDATED_AT, SITE_NAME } from "@/lib/site";

export const deleteAccountUpdatedAt = LEGAL_UPDATED_AT;

export const deleteAccountIntro = `Si querés eliminar tu cuenta de ${SITE_NAME} y los datos asociados, seguí estos pasos. Apple y Google exigen que este proceso sea claro y accesible.`;

export const deleteAccountSections = [
  {
    heading: "Cómo solicitar la eliminación",
    paragraphs: [
      `Escribí a ${CONTACT_EMAIL} desde el mismo correo electrónico con el que te registraste en ${SITE_NAME}.`,
      'En el asunto podés poner: “Eliminación de cuenta – Human”.',
      "En el cuerpo del mensaje indicá que solicitás la eliminación definitiva de tu cuenta y de los datos personales asociados.",
    ],
  },
  {
    heading: "Qué eliminamos",
    paragraphs: ["Tras verificar tu identidad, eliminaremos o anonimizaremos:"],
    bullets: [
      "Tu cuenta de autenticación (email / perfil de acceso).",
      "Datos de perfil (nombre, foto de perfil, rol).",
      "Datos de entrenamiento asociados a tu usuario (según corresponda a alumno o coach), en la medida en que no deban conservarse por obligación legal.",
      "Tokens de notificaciones vinculados a tu cuenta.",
    ],
  },
  {
    heading: "Qué puede permanecer temporalmente",
    paragraphs: [
      "Podemos conservar registros técnicos mínimos (por ejemplo, logs de seguridad o backups) durante un período limitado, solo cuando sea necesario para seguridad, prevención de fraude u obligaciones legales. Esos datos no se usarán para otros fines.",
      "Si sos coach, la eliminación puede afectar la visibilidad de rutinas o vínculos con alumnos; coordinaremos el impacto razonable al procesar tu solicitud.",
    ],
  },
  {
    heading: "Plazo",
    paragraphs: [
      "Confirmaremos la recepción de tu solicitud y procesaremos la eliminación en un plazo razonable (habitualmente dentro de 30 días, salvo complejidad o requisitos legales adicionales).",
    ],
  },
  {
    heading: "Contacto",
    paragraphs: [`Email de soporte: ${CONTACT_EMAIL}.`],
  },
];

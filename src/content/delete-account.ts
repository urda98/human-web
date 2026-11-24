import { CONTACT_EMAIL, LEGAL_UPDATED_AT, SITE_NAME } from "@/lib/site";

export const deleteAccountUpdatedAt = LEGAL_UPDATED_AT;

export const deleteAccountIntro = `${SITE_NAME} – Tu mejor versión`;

export const deleteAccountSections = [
  {
    heading: "Cómo solicitar la eliminación",
    paragraphs: [
      "Podés solicitar la eliminación de tu cuenta de Human en cualquier momento.",
      `Para hacerlo, enviá un correo electrónico a: ${CONTACT_EMAIL}`,
      "La solicitud debe realizarse desde la dirección de correo asociada a tu cuenta de Human o incluir información suficiente para verificar tu identidad.",
    ],
  },
  {
    heading: "¿Qué información eliminamos?",
    paragraphs: [
      "Cuando procesemos la eliminación de tu cuenta, eliminaremos o anonimizaremos, según corresponda:",
    ],
    bullets: [
      "Cuenta de autenticación.",
      "Información de perfil.",
      "Relación con coaches/alumnos.",
      "Rutinas y datos de entrenamiento asociados.",
      "Historial de entrenamiento.",
      "Evaluaciones antropométricas.",
      "Mediciones antropométricas.",
      "Resultados derivados.",
      "Informes PDF.",
      "Archivos asociados almacenados en Firebase Storage.",
      "Tokens utilizados para notificaciones.",
      "Demás información personal asociada a la cuenta que ya no resulte necesaria.",
    ],
    subsections: [
      {
        paragraphs: [
          "Cuando los datos sean anonimizados, se adoptarán medidas para impedir que puedan asociarse razonablemente con una persona identificada o identificable.",
        ],
      },
    ],
  },
  {
    heading: "Evaluaciones antropométricas",
    paragraphs: [
      "Las evaluaciones antropométricas asociadas a tu cuenta forman parte de los datos personales tratados por Human.",
      "Cuando solicites la eliminación de tu cuenta, Human eliminará las evaluaciones, mediciones, resultados e informes asociados que correspondan, salvo que exista una obligación legal o una razón legítima que requiera conservar determinada información.",
      "La eliminación de una evaluación puede afectar el historial disponible para el coach y la posibilidad de comparar resultados históricos.",
    ],
  },
  {
    heading: "¿Se elimina absolutamente todo de inmediato?",
    paragraphs: [
      "No necesariamente.",
      "Por razones técnicas, de seguridad o legales, determinados datos pueden permanecer temporalmente en:",
    ],
    bullets: [
      "Copias de seguridad.",
      "Registros técnicos.",
      "Sistemas de prevención de fraude.",
      "Registros necesarios para demostrar el cumplimiento de obligaciones legales.",
    ],
    subsections: [
      {
        paragraphs: [
          "Cuando esto ocurra, dichos datos estarán sujetos a las medidas de protección correspondientes y serán eliminados o anonimizados cuando ya no resulte necesario conservarlos.",
          "Determinados registros de transacciones, facturación o información administrativa podrán conservarse cuando resulte necesario para cumplir obligaciones legales, fiscales, contables o de seguridad.",
          "La eliminación de la cuenta no implica necesariamente la eliminación inmediata de todas las copias técnicas de seguridad, cuyos ciclos de retención pueden extenderse más allá del plazo operativo de eliminación de la cuenta.",
        ],
      },
    ],
  },
  {
    heading: "Plazo",
    paragraphs: [
      "Intentaremos procesar las solicitudes de eliminación dentro de un plazo razonable y, cuando corresponda, dentro de los plazos establecidos por la legislación aplicable.",
      "En circunstancias normales, la eliminación de la cuenta y de los datos asociados en los sistemas operativos de Human podrá completarse dentro de 30 días desde la verificación de la solicitud.",
      "Si necesitamos conservar determinada información por una obligación legal, te informaremos cuando corresponda.",
    ],
  },
  {
    heading: "¿Qué ocurre con los datos del coach?",
    paragraphs: [
      "Si sos coach y eliminás tu cuenta, las relaciones y datos asociados a otros usuarios pueden verse afectados.",
      "La eliminación de tu cuenta no implica necesariamente la eliminación de los datos personales que legalmente pertenezcan a otros usuarios.",
      "Cuando sea necesario, Human podrá conservar o reorganizar determinada información para proteger los derechos de otros usuarios o cumplir obligaciones legales.",
    ],
  },
  {
    heading: "Solicitar eliminación",
    paragraphs: ["Para solicitar la eliminación de tu cuenta:"],
    bullets: [
      "Abrí tu cliente de correo.",
      `Enviá un mensaje a ${CONTACT_EMAIL}.`,
      "Utilizá el mismo correo electrónico asociado a tu cuenta de Human.",
      "Indicá que querés eliminar tu cuenta.",
    ],
    subsections: [
      {
        paragraphs: [
          "No necesitás justificar el motivo de tu solicitud. Human podrá solicitar información adicional únicamente cuando sea necesario para verificar tu identidad o procesar correctamente la eliminación.",
        ],
      },
    ],
  },
];

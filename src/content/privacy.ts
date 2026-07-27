import {
  APP_BUNDLE_ID,
  CONTACT_EMAIL,
  LEGAL_UPDATED_AT,
  SITE_NAME,
} from "@/lib/site";

export const privacyUpdatedAt = LEGAL_UPDATED_AT;

export const privacyIntro = `${SITE_NAME} ("la aplicación") es una plataforma destinada a la gestión y seguimiento de entrenamientos físicos entre entrenadores (coaches) y alumnos. Esta Política de Privacidad describe qué datos recopilamos, cómo los usamos y cómo podés solicitar su eliminación.`;

export const privacySections = [
  {
    heading: "1. Introducción",
    paragraphs: [
      `Al crear una cuenta o usar ${SITE_NAME}, aceptás el tratamiento de datos descrito en este documento. Si no estás de acuerdo, no utilices la aplicación.`,
      `La aplicación se identifica técnicamente con el identificador ${APP_BUNDLE_ID} en las tiendas móviles.`,
    ],
  },
  {
    heading: "2. Datos que recopilamos",
    paragraphs: [
      "Recopilamos únicamente la información necesaria para prestar el servicio:",
    ],
    bullets: [
      "Información de la cuenta: nombre, dirección de correo electrónico y, si la cargás, foto de perfil.",
      "Información deportiva: rutinas asignadas, ejercicios, historial de entrenamientos, feedback post entrenamiento, pesos utilizados y marcas personales.",
      "Información de roles: si tu cuenta es de coach o de alumno, y la relación entre coaches y alumnos dentro de la plataforma.",
      "Información técnica: identificadores asociados a Analytics (cuando está habilitado), registros de errores mediante Crashlytics y token de notificaciones push (Firebase Cloud Messaging), cuando otorgás ese permiso.",
    ],
  },
  {
    heading: "3. Cómo utilizamos esa información",
    paragraphs: ["Usamos los datos para:"],
    bullets: [
      "Crear y autenticar tu cuenta.",
      "Mostrar y sincronizar rutinas, ejercicios y progreso entre dispositivos.",
      "Permitir la comunicación operativa entre coaches y alumnos (por ejemplo, asignaciones y notificaciones relacionadas con el entrenamiento).",
      "Mejorar la estabilidad de la aplicación y resolver errores.",
      "Entender el uso agregado del producto (Analytics) para mejorar la experiencia.",
    ],
  },
  {
    heading: "4. Servicios de terceros",
    paragraphs: [
      `${SITE_NAME} utiliza infraestructura de Google Firebase. En particular podemos emplear:`,
    ],
    bullets: [
      "Firebase Authentication (inicio de sesión y cuentas).",
      "Cloud Firestore (almacenamiento de datos de la aplicación).",
      "Firebase Storage (archivos como fotos de perfil).",
      "Firebase Cloud Messaging (notificaciones push).",
      "Firebase Crashlytics (informes de fallos).",
      "Firebase Analytics (métricas de uso, cuando está habilitado).",
    ],
  },
  {
    heading: "5. Ubicación de los datos",
    paragraphs: [
      "Los datos pueden almacenarse en servidores administrados por Google LLC ubicados en diferentes regiones conforme a la infraestructura de Firebase.",
    ],
  },
  {
    heading: "6. Seguridad",
    paragraphs: [
      "Los datos se almacenan y procesan utilizando la infraestructura segura de Google Firebase. Aplicamos controles razonables (autenticación, reglas de acceso y buenas prácticas de desarrollo) para proteger la información. Ningún sistema es 100% seguro; te pedimos que protejas también tus credenciales de acceso.",
    ],
  },
  {
    heading: "7. Cookies (sitio web)",
    paragraphs: [
      "La versión web utiliza únicamente cookies técnicas necesarias para su funcionamiento. No utilizamos cookies con fines publicitarios.",
    ],
  },
  {
    heading: "8. Analytics",
    paragraphs: [
      "Cuando Analytics está habilitado, recopilamos métricas de uso agregadas para mejorar el producto. Podés desactivarlo desde la configuración de la aplicación si esa opción está disponible en tu versión.",
    ],
  },
  {
    heading: "9. Eliminación de datos",
    paragraphs: [
      `Podés solicitar la eliminación de tu cuenta y de los datos asociados escribiendo a ${CONTACT_EMAIL}. Incluí el correo con el que te registraste en ${SITE_NAME}.`,
      "Procesaremos la solicitud en un plazo razonable y eliminaremos o anonimizaremos la información que ya no sea necesaria para obligaciones legales o de seguridad. En la página Eliminar cuenta encontrarás el detalle del proceso.",
    ],
  },
  {
    heading: "10. Menores",
    paragraphs: [
      `${SITE_NAME} está dirigida a personas de 13 años o más. Si tenés menos de la edad mínima aplicable en tu país, solo debés usar la aplicación con autorización de tus padres o tutores cuando la ley lo exija.`,
    ],
  },
  {
    heading: "11. Cambios a esta política",
    paragraphs: [
      "Podemos actualizar esta Política de Privacidad. Publicaremos la versión vigente en esta página con la fecha de última actualización. El uso continuado de la aplicación después de un cambio implica la aceptación de la versión actualizada, en la medida permitida por la ley.",
    ],
  },
  {
    heading: "12. Contacto",
    paragraphs: [
      `Para consultas sobre privacidad o datos personales: ${CONTACT_EMAIL}.`,
    ],
  },
];

import {
  CONTACT_EMAIL,
  LEGAL_UPDATED_AT,
  SITE_NAME,
} from "@/lib/site";

export const privacyUpdatedAt = LEGAL_UPDATED_AT;

export const privacyIntro = `${SITE_NAME} – Tu mejor versión`;

export const privacySections = [
  {
    heading: "1. Introducción",
    paragraphs: [
      `${SITE_NAME} ("Human", "la aplicación", "nosotros" o "nuestro servicio") es una plataforma destinada a la gestión y seguimiento de entrenamientos físicos entre entrenadores (coaches) y alumnos.`,
      "Human también permite a determinados profesionales registrar y gestionar evaluaciones antropométricas, realizar cálculos derivados y generar informes de seguimiento físico.",
      "Esta Política de Privacidad explica qué información podemos recopilar, para qué la utilizamos, cómo la protegemos, con quién puede ser procesada y cuáles son los derechos que podés ejercer sobre tus datos.",
      "Al crear una cuenta o utilizar Human, aceptás el tratamiento de tus datos conforme a esta Política de Privacidad y a los Términos y Condiciones, en la medida permitida por la legislación aplicable.",
      "Cuando una legislación aplicable exija un consentimiento específico para determinado tratamiento, Human podrá solicitarlo de manera separada.",
    ],
  },
  {
    heading: "2. Datos que podemos recopilar",
    paragraphs: [
      "Human recopila y procesa únicamente la información necesaria para prestar y mejorar sus servicios, de acuerdo con las funciones utilizadas.",
    ],
    subsections: [
      {
        heading: "2.1 Información de cuenta",
        paragraphs: ["Podemos recopilar:"],
        bullets: [
          "Nombre y apellido.",
          "Dirección de correo electrónico.",
          "Foto de perfil, si decidís cargarla.",
          "Rol dentro de Human (coach o alumno).",
          "Información necesaria para gestionar la relación entre coach y alumno.",
        ],
      },
      {
        heading: "2.2 Información de entrenamiento",
        paragraphs: [
          "Dependiendo de las funcionalidades utilizadas, podemos procesar:",
        ],
        bullets: [
          "Rutinas asignadas.",
          "Ejercicios.",
          "Sesiones de entrenamiento.",
          "Pesos utilizados.",
          "Marcas personales.",
          "Feedback.",
          "Esfuerzo percibido.",
          "Información relacionada con el progreso deportivo.",
          "Otra información introducida por el usuario o por su coach dentro de las funcionalidades de entrenamiento.",
        ],
      },
      {
        heading: "2.3 Información antropométrica",
        paragraphs: [
          "Cuando un usuario participa de una evaluación antropométrica realizada mediante Human, podemos procesar información como:",
        ],
        bullets: [
          "Peso.",
          "Altura.",
          "Altura sentado.",
          "Diámetros corporales.",
          "Perímetros corporales.",
          "Pliegues cutáneos.",
          "Mediciones repetidas.",
          "Valores estadísticos derivados de las mediciones.",
          "Edad utilizada para los cálculos.",
          "Sexo utilizado para determinados cálculos.",
          "Información sobre actividad física o deportiva.",
          "Composición corporal estimada.",
          "Porcentajes y masas corporales estimadas.",
          "Índices antropométricos.",
          "Somatotipo.",
          "Estimaciones relacionadas con gasto energético.",
          "Comparaciones con evaluaciones anteriores.",
          "Observaciones introducidas por el profesional.",
          "Metodología o protocolo utilizado.",
          "Información relativa al profesional que realizó la evaluación.",
          "Informes PDF generados a partir de la evaluación.",
        ],
      },
      {
        paragraphs: [
          "Parte de esta información puede considerarse información relativa a la salud, composición corporal o datos especialmente protegidos bajo determinadas legislaciones.",
          "Las mediciones antropométricas utilizadas por Human no se utilizan, por sí mismas, para identificar inequívocamente a una persona.",
        ],
      },
      {
        heading: "2.4 Información técnica",
        paragraphs: [
          "Podemos recopilar información técnica necesaria para operar y proteger Human, incluyendo:",
        ],
        bullets: [
          "Identificadores técnicos.",
          "Información del dispositivo.",
          "Información relacionada con errores de la aplicación.",
          "Tokens necesarios para notificaciones push.",
          "Información de uso y diagnóstico cuando las funcionalidades correspondientes se encuentren habilitadas.",
        ],
      },
      {
        paragraphs: [
          "Cuando corresponda, Human podrá utilizar servicios de Firebase Analytics y Crashlytics para comprender el funcionamiento de la aplicación y detectar errores.",
        ],
      },
    ],
  },
  {
    heading: "3. Evaluaciones antropométricas y consentimiento",
    paragraphs: [
      "Las evaluaciones antropométricas disponibles en Human son realizadas y/o registradas por profesionales que utilizan la plataforma como herramienta de gestión y seguimiento.",
      "Cuando una evaluación antropométrica implique el tratamiento de datos que requieran un consentimiento específico según la legislación aplicable, Human solicitará al alumno una autorización específica antes de registrar o publicar dicha evaluación.",
      "El consentimiento específico podrá quedar asociado a la evaluación y registrar:",
    ],
    bullets: [
      "Usuario.",
      "Profesional.",
      "Fecha y hora.",
      "Versión del consentimiento.",
      "Finalidad del tratamiento.",
    ],
    subsections: [
      {
        paragraphs: ["El profesional que realiza la evaluación es responsable de:"],
        bullets: [
          "Realizar correctamente las mediciones.",
          "Utilizar la metodología correspondiente.",
          "Interpretar profesionalmente los resultados.",
          "Proporcionar al alumno la información necesaria sobre la evaluación.",
          "Obtener las autorizaciones o consentimientos que correspondan.",
        ],
      },
      {
        paragraphs: [
          "Human proporciona la infraestructura tecnológica necesaria para registrar, almacenar, procesar y visualizar la información.",
        ],
      },
    ],
  },
  {
    heading: "4. Finalidades del tratamiento",
    paragraphs: ["Podemos utilizar la información recopilada para:"],
    bullets: [
      "Crear y autenticar cuentas.",
      "Gestionar la relación entre coaches y alumnos.",
      "Crear, asignar y realizar seguimiento de entrenamientos.",
      "Registrar el progreso deportivo.",
      "Registrar y gestionar evaluaciones antropométricas.",
      "Realizar cálculos derivados de las mediciones.",
      "Generar informes y documentos asociados a las evaluaciones.",
      "Permitir consultar el historial de evaluaciones.",
      "Permitir a los profesionales realizar el seguimiento de sus alumnos.",
      "Enviar notificaciones relacionadas con el servicio.",
      "Mantener y mejorar Human.",
      "Detectar errores.",
      "Prevenir usos indebidos.",
      "Proteger la seguridad de usuarios y sistemas.",
      "Cumplir obligaciones legales.",
      "Responder solicitudes de los usuarios.",
      "Generar estadísticas agregadas cuando corresponda.",
    ],
    subsections: [
      {
        paragraphs: [
          "Human no vende datos personales ni utiliza las evaluaciones antropométricas de los usuarios para publicidad dirigida.",
        ],
      },
    ],
  },
  {
    heading: "5. Acceso a la información",
    paragraphs: [
      "El acceso a los datos depende del rol y de las relaciones existentes dentro de Human.",
      "El alumno puede acceder a sus propios datos y evaluaciones.",
      "El coach que tenga una relación autorizada con el alumno podrá acceder a la información necesaria para prestar el servicio y realizar el seguimiento correspondiente.",
      "Human no publica las evaluaciones antropométricas de forma pública.",
      "Los informes PDF pueden ser descargados por usuarios autorizados. Una vez descargados o compartidos fuera de Human, su tratamiento y seguridad también dependerán del dispositivo, servicio o persona con quien sean compartidos.",
      "Los usuarios son responsables de mantener la confidencialidad de sus credenciales y de no proporcionar acceso a terceros a su cuenta.",
    ],
  },
  {
    heading: "6. Evaluaciones basadas en protocolos antropométricos",
    paragraphs: [
      "Human puede permitir registrar evaluaciones realizadas utilizando protocolos o estándares reconocidos en el ámbito de la antropometría, incluyendo protocolos basados en estándares de ISAK cuando así lo indique el profesional.",
      "La referencia a ISAK identifica el protocolo o metodología seleccionado para la evaluación y no implica que Human sea una entidad certificadora de ISAK ni que Human certifique las credenciales profesionales del usuario.",
      "Cuando corresponda, la información sobre la acreditación o formación profesional del antropometrista será proporcionada por el propio profesional.",
    ],
  },
  {
    heading: "7. Resultados y cálculos antropométricos",
    paragraphs: [
      "Human puede generar resultados derivados de las mediciones ingresadas por el profesional.",
      "Estos pueden incluir, entre otros:",
    ],
    bullets: [
      "Estimaciones de composición corporal.",
      "Porcentajes corporales.",
      "Índices antropométricos.",
      "Somatotipo.",
      "Indicadores derivados.",
      "Estimaciones de gasto energético.",
      "Evolución entre evaluaciones.",
    ],
    subsections: [
      {
        paragraphs: [
          "Estos resultados son estimaciones calculadas a partir de los datos proporcionados y de los modelos o fórmulas implementados por Human.",
          "La precisión de los resultados puede depender de:",
        ],
        bullets: [
          "La correcta realización de las mediciones.",
          "Los instrumentos utilizados.",
          "Las características de la persona evaluada.",
          "La metodología aplicada.",
          "Los datos introducidos.",
          "El modelo de cálculo utilizado.",
        ],
      },
      {
        paragraphs: [
          "Los resultados no deben interpretarse de manera aislada como un diagnóstico médico.",
        ],
      },
    ],
  },
  {
    heading: "8. Servicios de terceros",
    paragraphs: [
      "Human utiliza proveedores tecnológicos para prestar determinados servicios.",
      "Human utiliza servicios proporcionados por Google Firebase, incluyendo Firebase Authentication, Cloud Firestore, Firebase Storage, Cloud Functions, Firebase Cloud Messaging, Firebase Analytics y Firebase Crashlytics, según las funcionalidades habilitadas en cada momento.",
      "Estos proveedores pueden procesar información en nombre de Human conforme a las condiciones aplicables a sus servicios.",
      "Human selecciona y configura estos servicios buscando aplicar medidas razonables de seguridad y protección de datos.",
    ],
  },
  {
    heading: "9. Transferencias internacionales",
    paragraphs: [
      "Debido a que Human utiliza proveedores tecnológicos que pueden operar infraestructura en distintos países, determinados datos pueden ser procesados o almacenados fuera del país de residencia del usuario.",
      "Human utiliza mecanismos contractuales y técnicos disponibles para gestionar las transferencias internacionales de datos, cuando resulten aplicables, de acuerdo con la legislación correspondiente.",
    ],
  },
  {
    heading: "10. Seguridad",
    paragraphs: [
      "Human aplica medidas técnicas y organizativas razonables para proteger la información frente a accesos no autorizados, pérdida, alteración, divulgación o destrucción.",
      "Entre otras medidas, Human utiliza mecanismos de autenticación, controles de acceso y reglas de autorización para limitar el acceso a la información.",
      "Sin embargo, ningún sistema electrónico puede garantizar una seguridad absoluta.",
      "Los usuarios deben mantener sus credenciales seguras y notificar a Human cualquier sospecha de acceso no autorizado.",
    ],
  },
  {
    heading: "11. Conservación de datos",
    paragraphs: [
      "Human conserva la información durante el tiempo necesario para prestar el servicio, mantener el historial del usuario, cumplir obligaciones legales, resolver disputas o proteger la seguridad del servicio.",
      "Las evaluaciones antropométricas podrán conservarse como parte del historial del usuario mientras sean necesarias para prestar las funcionalidades de seguimiento.",
      "Las evaluaciones completadas se conservarán como registros históricos y no podrán modificarse directamente por el alumno.",
      "Si fuera necesario corregir información, Human podrá generar una nueva versión o registrar la corrección correspondiente, preservando la trazabilidad de la información histórica y, cuando sea necesario, generando nuevamente el informe asociado.",
      "La eliminación de una cuenta no necesariamente implica la eliminación inmediata de copias técnicas de seguridad o registros que deban conservarse temporalmente por motivos legales, de seguridad o funcionamiento.",
    ],
  },
  {
    heading: "12. Derechos de los usuarios",
    paragraphs: [
      "Dependiendo de la legislación aplicable, los usuarios pueden tener derecho a:",
    ],
    bullets: [
      "Acceder a sus datos personales.",
      "Solicitar la corrección o actualización de información incorrecta.",
      "Solicitar la eliminación de sus datos.",
      "Solicitar información sobre cómo son utilizados.",
      "Solicitar determinadas restricciones al tratamiento.",
      "Oponerse a determinados tratamientos.",
      "Solicitar la portabilidad de determinados datos.",
      "Retirar un consentimiento cuando el tratamiento se base en dicho consentimiento.",
    ],
    subsections: [
      {
        paragraphs: [
          "La disponibilidad y alcance de estos derechos puede variar según el país o jurisdicción aplicable.",
          "Cuando corresponda, los usuarios también pueden presentar una reclamación ante la autoridad de protección de datos competente de su país o jurisdicción.",
          `Para ejercer estos derechos podés escribir a: ${CONTACT_EMAIL}`,
          "Human podrá solicitar información adicional para verificar la identidad del solicitante antes de procesar una solicitud.",
        ],
      },
    ],
  },
  {
    heading: "13. Eliminación de cuenta",
    paragraphs: [
      "Los usuarios pueden solicitar la eliminación de su cuenta siguiendo el procedimiento disponible en la página Eliminar cuenta.",
      "La eliminación podrá incluir, según corresponda:",
    ],
    bullets: [
      "Cuenta de autenticación.",
      "Información de perfil.",
      "Datos de entrenamiento.",
      "Evaluaciones antropométricas.",
      "Mediciones antropométricas.",
      "Resultados derivados.",
      "Informes PDF.",
      "Archivos asociados almacenados en Firebase Storage.",
      "Tokens de notificaciones.",
      "Demás información asociada a la cuenta que no deba conservarse por obligación legal.",
    ],
    subsections: [
      {
        paragraphs: [
          "Determinados registros técnicos, copias de seguridad o información que deba conservarse por motivos legales o de seguridad podrán mantenerse durante el período estrictamente necesario.",
        ],
      },
    ],
  },
  {
    heading: "14. Menores de edad",
    paragraphs: [
      "Human está destinada a usuarios de 13 años o más, salvo que la legislación aplicable establezca una edad mínima diferente.",
      "Cuando la utilización del servicio por una persona menor de edad requiera autorización parental o de un representante legal, dicha autorización deberá obtenerse conforme a la legislación aplicable.",
      "Human podrá limitar determinadas funcionalidades cuando resulte necesario para cumplir con las normas aplicables a menores.",
    ],
  },
  {
    heading: "15. Cambios en esta Política",
    paragraphs: [
      "Podemos actualizar esta Política de Privacidad para reflejar cambios en Human, en nuestras prácticas o en la legislación aplicable.",
      "Cuando los cambios sean relevantes, podremos comunicarlo mediante la aplicación, el sitio web u otros medios razonables.",
      "La fecha de última actualización aparecerá al comienzo de esta política.",
    ],
  },
  {
    heading: "16. Contacto",
    paragraphs: [
      `Para consultas relacionadas con privacidad, datos personales o ejercicio de derechos: ${CONTACT_EMAIL}`,
    ],
  },
];

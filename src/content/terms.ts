import { CONTACT_EMAIL, LEGAL_UPDATED_AT, SITE_NAME } from "@/lib/site";

export const termsUpdatedAt = LEGAL_UPDATED_AT;

export const termsIntro = `${SITE_NAME} – Tu mejor versión`;

export const termsSections = [
  {
    heading: "1. Aceptación",
    paragraphs: [
      "Al crear una cuenta o utilizar Human, aceptás estos Términos y Condiciones.",
      "Si no estás de acuerdo con estos términos, no debés utilizar el servicio.",
      "Human podrá actualizar estos términos cuando sea necesario. Cuando los cambios sean relevantes, podremos comunicarlos mediante la aplicación o el sitio web.",
    ],
  },
  {
    heading: "2. Descripción del servicio",
    paragraphs: [
      "Human es una plataforma tecnológica destinada a facilitar la gestión, planificación, ejecución y seguimiento de entrenamientos físicos entre coaches y alumnos.",
      "Entre otras funcionalidades, Human puede permitir:",
    ],
    bullets: [
      "Crear y gestionar rutinas.",
      "Asignar entrenamientos.",
      "Registrar sesiones.",
      "Realizar seguimiento del progreso.",
      "Registrar marcas personales.",
      "Intercambiar feedback.",
      "Gestionar evaluaciones antropométricas.",
      "Consultar el historial deportivo.",
      "Generar informes.",
    ],
    subsections: [
      {
        paragraphs: [
          "Human proporciona infraestructura tecnológica y herramientas de gestión. No constituye por sí misma un servicio médico.",
        ],
      },
    ],
  },
  {
    heading: "3. Roles de los usuarios",
    paragraphs: [
      "Human puede utilizarse principalmente por:",
    ],
    subsections: [
      {
        heading: "Coaches",
        paragraphs: [
          "Los coaches pueden crear rutinas, asignarlas a alumnos, realizar seguimiento y registrar información relacionada con sus entrenamientos y evaluaciones.",
        ],
      },
      {
        heading: "Alumnos",
        paragraphs: [
          "Los alumnos pueden consultar sus rutinas, registrar sus entrenamientos, consultar su progreso y visualizar la información que sus coaches hayan puesto a disposición.",
          "Cada usuario es responsable de utilizar Human únicamente dentro de las funciones y permisos correspondientes a su cuenta.",
        ],
      },
    ],
  },
  {
    heading: "4. Entrenamiento y salud",
    paragraphs: [
      "Human está destinada al seguimiento de actividad física y entrenamiento.",
      "La información disponible en Human no constituye por sí misma:",
    ],
    bullets: [
      "Diagnóstico médico.",
      "Tratamiento médico.",
      "Prescripción médica.",
      "Evaluación clínica.",
      "Recomendación médica personalizada.",
    ],
    subsections: [
      {
        paragraphs: [
          "Los usuarios deben consultar con profesionales de la salud cuando corresponda, especialmente antes de iniciar o modificar actividades físicas cuando existan circunstancias que requieran evaluación profesional.",
          "El coach es responsable del contenido de las rutinas y recomendaciones que proporciona a sus alumnos.",
        ],
      },
    ],
  },
  {
    heading: "5. Evaluaciones antropométricas",
    paragraphs: [
      "Human permite a determinados profesionales registrar evaluaciones antropométricas y generar resultados derivados.",
      "Una evaluación puede incluir mediciones como:",
    ],
    bullets: [
      "Peso.",
      "Altura.",
      "Altura sentado.",
      "Perímetros.",
      "Diámetros.",
      "Pliegues cutáneos.",
      "Mediciones repetidas.",
      "Composición corporal estimada.",
      "Somatotipo.",
      "Índices antropométricos.",
      "Estimaciones relacionadas con gasto energético.",
    ],
    subsections: [
      {
        paragraphs: [
          "Estas evaluaciones podrán utilizar protocolos basados en metodologías o estándares de ISAK, cuando corresponda.",
          "La referencia a ISAK no implica que Human sea una entidad certificadora ni que certifique las credenciales profesionales del usuario.",
        ],
      },
    ],
  },
  {
    heading: "6. Responsabilidad del profesional",
    paragraphs: [
      "El profesional que realiza una evaluación antropométrica es responsable de:",
    ],
    bullets: [
      "Realizar correctamente las mediciones.",
      "Utilizar los instrumentos apropiados.",
      "Aplicar correctamente el protocolo utilizado.",
      "Introducir correctamente los datos.",
      "Contar con la formación profesional necesaria.",
      "Obtener el consentimiento o autorización correspondiente.",
      "Interpretar los resultados dentro de su ámbito profesional.",
    ],
    subsections: [
      {
        paragraphs: [
          "Human proporciona herramientas tecnológicas para registrar y procesar la información, pero no controla directamente la forma en que el profesional realiza las mediciones.",
        ],
      },
    ],
  },
  {
    heading: "7. Naturaleza de los resultados antropométricos",
    paragraphs: [
      "Los resultados generados por Human pueden basarse en modelos matemáticos, fórmulas y referencias antropométricas.",
      "Los resultados pueden incluir estimaciones de:",
    ],
    bullets: [
      "Composición corporal.",
      "Masa grasa.",
      "Masa muscular.",
      "Masa ósea.",
      "Somatotipo.",
      "Índices corporales.",
      "Gasto energético.",
      "Evolución corporal.",
      "Otros indicadores derivados.",
    ],
    subsections: [
      {
        paragraphs: [
          "Estos resultados deben interpretarse considerando la metodología utilizada y las características de cada persona.",
          "No constituyen por sí mismos un diagnóstico médico ni deben utilizarse como único fundamento para tomar decisiones médicas o clínicas.",
          "Human no garantiza que una estimación antropométrica represente exactamente la composición corporal real de una persona.",
        ],
      },
    ],
  },
  {
    heading: "8. Consentimiento para evaluaciones",
    paragraphs: [
      "Cuando corresponda, Human requerirá que el alumno otorgue un consentimiento específico antes de registrar una evaluación antropométrica.",
      "El consentimiento podrá estar asociado a:",
    ],
    bullets: [
      "La identidad del alumno.",
      "El profesional.",
      "La evaluación.",
      "La fecha.",
      "La versión del consentimiento.",
    ],
    subsections: [
      {
        paragraphs: [
          "La existencia de este consentimiento no convierte a Human en responsable de la realización profesional de la evaluación.",
        ],
      },
    ],
  },
  {
    heading: "9. Información histórica",
    paragraphs: [
      "Las evaluaciones completadas pueden formar parte del historial del alumno.",
      "Human puede conservar evaluaciones anteriores para permitir comparar resultados y observar la evolución a lo largo del tiempo.",
      "Los resultados históricos podrán permanecer asociados a la fecha y metodología utilizada originalmente.",
      "Human puede utilizar versiones identificables de sus modelos de cálculo para preservar la interpretación histórica de evaluaciones anteriores.",
    ],
  },
  {
    heading: "10. Informes PDF",
    paragraphs: [
      "Human puede generar informes PDF basados en la información registrada durante una evaluación.",
      "Los informes pueden contener información personal y antropométrica, por lo que los usuarios deben tratarlos como información privada y evitar compartirlos con personas no autorizadas.",
      "El usuario es responsable de proteger cualquier copia del informe que descargue, almacene o comparta fuera de Human.",
      "Una vez descargado un informe PDF fuera de Human, su almacenamiento, acceso y posterior distribución quedan bajo responsabilidad de quien lo descargue o comparta y pueden quedar sujetos a las políticas y condiciones del dispositivo, servicio o persona con quien se comparta.",
    ],
  },
  {
    heading: "11. Contenido proporcionado por usuarios",
    paragraphs: [
      "Los usuarios pueden introducir información, comentarios, observaciones y otros contenidos dentro de Human.",
      "El usuario es responsable de que la información proporcionada:",
    ],
    bullets: [
      "Sea veraz cuando corresponda.",
      "No infrinja derechos de terceros.",
      "No sea utilizada para fines ilícitos.",
      "No contenga información que no tenga autorización para compartir.",
    ],
    subsections: [
      {
        paragraphs: [
          "El profesional debe evitar introducir en campos de texto libre información innecesaria o excesiva sobre terceros.",
        ],
      },
    ],
  },
  {
    heading: "12. Privacidad",
    paragraphs: [
      "El tratamiento de los datos personales está regulado por nuestra Política de Privacidad.",
      "La Política de Privacidad forma parte de estos Términos y Condiciones.",
      "Al utilizar Human, el usuario acepta el tratamiento de sus datos conforme a dicha política y a la legislación aplicable.",
    ],
  },
  {
    heading: "13. Seguridad de la cuenta",
    paragraphs: [
      "Cada usuario es responsable de mantener la seguridad de sus credenciales.",
      "No debés compartir tu contraseña ni permitir que terceros utilicen tu cuenta.",
      "Si detectás un acceso no autorizado, debés comunicarlo a Human lo antes posible.",
    ],
  },
  {
    heading: "14. Disponibilidad del servicio",
    paragraphs: [
      "Human procura mantener el servicio disponible y funcionando correctamente.",
      "Sin embargo, pueden producirse interrupciones por:",
    ],
    bullets: [
      "Mantenimiento.",
      "Actualizaciones.",
      "Errores técnicos.",
      "Problemas de conectividad.",
      "Fallas de proveedores externos.",
      "Circunstancias fuera del control razonable de Human.",
    ],
    subsections: [
      {
        paragraphs: [
          "Human no garantiza disponibilidad ininterrumpida del servicio.",
        ],
      },
    ],
  },
  {
    heading: "15. Propiedad intelectual",
    paragraphs: [
      "Los elementos de Human, incluyendo software, diseño, identidad visual, textos, interfaces, código, marcas y otros componentes propios, pertenecen a Human o a sus respectivos titulares y están protegidos por las normas aplicables.",
      "El uso de Human no otorga al usuario derechos de propiedad sobre dichos elementos.",
      "Los usuarios conservan los derechos que correspondan sobre la información y contenido que proporcionen.",
    ],
  },
  {
    heading: "16. Responsabilidad",
    paragraphs: [
      "Human proporciona una plataforma tecnológica y no controla directamente:",
    ],
    bullets: [
      "La calidad de las mediciones realizadas por los profesionales.",
      "Las decisiones tomadas por coaches.",
      "Las recomendaciones proporcionadas por los profesionales.",
      "La interpretación profesional de los resultados.",
      "El uso que el usuario haga de la información disponible.",
    ],
    subsections: [
      {
        paragraphs: [
          "Human no será responsable por daños derivados exclusivamente de decisiones tomadas por el usuario o por terceros sobre la base de información, recomendaciones, mediciones o resultados proporcionados mediante la plataforma, salvo cuando dicha responsabilidad corresponda legalmente a Human.",
          "Nada de estos Términos pretende excluir o limitar derechos o responsabilidades que legalmente no puedan excluirse o limitarse.",
        ],
      },
    ],
  },
  {
    heading: "17. Suspensión o eliminación de cuentas",
    paragraphs: [
      "Human podrá suspender o eliminar cuentas cuando exista un incumplimiento de estos Términos, uso fraudulento, abuso de la plataforma, riesgo de seguridad o cuando resulte necesario para cumplir obligaciones legales.",
      "Los usuarios también pueden solicitar la eliminación de su cuenta conforme al procedimiento disponible en Human.",
      "La eliminación de la cuenta puede afectar el acceso a rutinas, historial, evaluaciones y demás información asociada.",
    ],
  },
  {
    heading: "18. Legislación aplicable",
    paragraphs: [
      "Estos Términos se interpretarán de acuerdo con la legislación aplicable, teniendo en cuenta las normas imperativas de protección al consumidor, privacidad y protección de datos que correspondan al lugar de residencia del usuario.",
      "Cuando una disposición de estos Términos resulte incompatible con una norma imperativa aplicable, dicha norma prevalecerá en la medida correspondiente sin afectar necesariamente la validez del resto de los términos.",
    ],
  },
  {
    heading: "19. Contacto",
    paragraphs: [
      `Para consultas relacionadas con Human: ${CONTACT_EMAIL}`,
    ],
  },
];

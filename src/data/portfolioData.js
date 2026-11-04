export const studentInfo = {
  name: 'Mario Elmer Ramírez Grande',
  carnet: 'RG23003',
  university: 'Universidad de El Salvador',
  faculty: 'Facultad de Ciencias Naturales y Matemática',
  career: 'Licenciatura en Informática Educativa',
  subject: 'Práctica Docente',
  subjectCode: 'DDP1109',
  cycle: 'II-2026',
  practiceCenter: 'Centro Escolar República de Canadá',
  schedule: '11:00 a. m. a 4:00 p. m.',
  schoolTutor: 'Licda. Zeyda Priscila Aguilar',
  universityCoordinator: 'Ing. Misael Enrique Juárez Blanco',
  motto: 'Quien enseña aprende al enseñar y quien aprende enseña al aprender',
};

export const areas = [
  { id: 'inicio', label: 'Inicio y trayectoria', description: 'Identidad académica, presentación y objetivos.', icon: 'Sparkles', range: '01–03' },
  { id: 'contexto', label: 'Contexto educativo', description: 'Centro escolar, grupo y recursos disponibles.', icon: 'School', range: '04' },
  { id: 'diagnostico', label: 'Diagnóstico y planificación', description: 'Instrumentos, resultados, cronograma y planes.', icon: 'ChartNoAxesCombined', range: '05–07' },
  { id: 'practica', label: 'Mi práctica docente', description: 'Jornadas, diario y evidencias de campo.', icon: 'NotebookPen', range: '08–09' },
  { id: 'reflexion', label: 'Reflexión y mejora', description: 'Autoevaluación, propuesta y aprendizajes.', icon: 'Lightbulb', range: '10–11, 13' },
  { id: 'recursos', label: 'Recursos y anexos', description: 'Herramientas aplicadas y documentos de respaldo.', icon: 'FolderOpen', range: '12, 14' },
];

export const sections = [
  { id: 1, title: 'Portada', area: 'inicio', state: 'Presentada', detail: 'Presento mi identidad académica, mi lema docente y una fotografía de perfil provisional.' },
  { id: 2, title: 'Presentación personal y profesional', area: 'inicio', state: 'Presentada', detail: 'Presento mis intereses en asesoría educativa, diseño de recursos digitales y formación continua.' },
  { id: 3, title: 'Objetivos de la práctica docente', area: 'inicio', state: 'Documentada', detail: 'Expongo el objetivo general y tres objetivos específicos de mi práctica.' },
  { id: 4, title: 'Contexto educativo', area: 'contexto', state: 'Presentada', detail: 'Describo el centro, el grupo y los recursos a partir del diagnóstico grupal y mis observaciones.' },
  { id: 5, title: 'Planeación y organización', area: 'diagnostico', state: 'Presentada', detail: 'Presento el calendario de siete visitas y las actividades que he realizado en las primeras seis.' },
  { id: 6, title: 'Diagnóstico educativo', area: 'diagnostico', state: 'Presentada', detail: 'Analizo los resultados del diagnóstico grupal y sus implicaciones pedagógicas, respetando el alcance de la muestra.' },
  { id: 7, title: 'Planificaciones de clases', area: 'diagnostico', state: 'Documentada', detail: 'Planificación aprobada de la lección 2 disponible en PDF; se distingue lo previsto de la clase realizada.' },
  { id: 8, title: 'Evidencias de la práctica docente', area: 'practica', state: 'Presentada', detail: 'Presento fotografías y recursos de mis seis visitas realizadas, junto con los registros de cada jornada.' },
  { id: 9, title: 'Diario reflexivo por jornada', area: 'practica', state: 'Presentada', detail: 'Describo mi participación y mis aprendizajes en las seis primeras visitas.' },
  { id: 10, title: 'Evaluación y retroalimentación', area: 'reflexion', state: 'Documentada', detail: 'Presento mi autoevaluación y resumo los comentarios verbales que recibí de la tutora.' },
  { id: 11, title: 'Propuesta de mejora', area: 'reflexion', state: 'Documentada', detail: 'Diseñé una guía breve con alternativa sin conexión a partir del diagnóstico; su aplicación es una posibilidad futura.' },
  { id: 12, title: 'Recursos tecnológicos aplicados', area: 'recursos', state: 'Presentada', detail: 'Describo el uso de ConectaTIC 2.0, computadora, proyector y teléfonos, así como las dificultades de conectividad.' },
  { id: 13, title: 'Experiencias significativas y conclusiones', area: 'reflexion', state: 'Presentada', detail: 'Reflexiono sobre mis logros, dificultades y proyección profesional.' },
  { id: 14, title: 'Anexos', area: 'recursos', state: 'Presentada', detail: 'Reúno la carta de presentación, el diagnóstico, mis guías y los registros de las jornadas.' },
];

export const visits = [
  { number: 1, date: '8 de agosto de 2026', title: 'Primera observación', state: 'Documentada', summary: 'Observación de una línea de tiempo sobre transformaciones políticas mundiales y los retos del siglo XXI.', role: 'Observé la dinámica de Estudios Sociales, las indicaciones de la docente y la organización del trabajo individual. No dirigí la clase.', reflection: 'Identifiqué la utilidad de ordenar acontecimientos y la necesidad de orientar la selección de información confiable.', evidence: 'Registro individual jornada 1 y guía de observación J1.' },
  { number: 2, date: '22 de agosto de 2026', title: 'Orientación para investigar', state: 'Documentada', summary: 'Lectura y ejercicios del libro de Estudios Sociales proporcionado por el MINEDUCYT.', role: 'Orienté a algunos estudiantes sobre cómo buscar información para continuar sus ejercicios.', reflection: 'Aprendí a ofrecer apoyo breve sin resolver el trabajo en lugar del estudiante.', evidence: 'Registro individual jornada 2 y guía de observación J2.' },
  { number: 3, date: '12 de septiembre de 2026', title: 'Colaboración institucional y en aula', state: 'Documentada', summary: 'Preparación de materiales para las fiestas patrias y acompañamiento de ejercicios proyectados en la tarde.', role: 'Participé en los preparativos institucionales desde la mañana y apoyé a estudiantes bajo la orientación de la docente.', reflection: 'Reconocí que la labor docente también incluye colaboración institucional y adaptación de recursos para el grupo.', evidence: 'Registro individual jornada 3 y guía de observación J3.' },
  { number: 4, date: '26 de septiembre de 2026', title: 'Investigación guiada y uso crítico de IA', state: 'Documentada', summary: 'Acompañé a un estudiante en una investigación ambiental relacionada con el Lago de Coatepeque y Amanelli.', role: 'Orienté la formulación de preguntas, la verificación en fuentes en español y la organización de un documento de estudio. La exposición estaba prevista para una clase posterior.', reflection: 'Aprendí que el uso de IA requiere contraste con fuentes identificables y espacio para que el estudiante tome sus propias decisiones.', evidence: 'Mi registro jornada 4 y la guía de observación J4 describen el acompañamiento. No conservo la presentación final del estudiante.' },
  { number: 5, date: '10 de octubre de 2026', title: 'Acompañamiento durante evaluaciones', state: 'Documentada', summary: 'De 9:30 a. m. a 4:00 p. m. acompañé evaluaciones de Estudios Sociales, Ciencias Naturales e Inglés en Modalidad Flexible. La evaluación de Estudios Sociales de segundo año se realizó mediante Google Forms; también se evaluó a primer año. Ciencias Naturales e Inglés utilizaron pruebas impresas, y en Inglés hubo una actividad de comprensión auditiva.', role: 'Apoyé a los docentes supervisando los exámenes y aclarando dudas sobre las instrucciones sin proporcionar respuestas. En la guía de observación de Estudios Sociales registré aproximadamente siete estudiantes presentes.', reflection: 'Al principio sentí nervios por explicar indicaciones durante una evaluación. Aprendí a comunicarme con claridad y paciencia, respetando la autonomía del estudiantado. Necesito seguir fortaleciendo mi seguridad al orientar de forma sencilla y precisa.', evidence: 'Registro individual jornada 5 y guía de observación J5. El registro incluye una fotografía del equipo de práctica, pero no imágenes de los exámenes para proteger la privacidad y confidencialidad.' },
  { number: 6, date: '24 de octubre de 2026', title: 'Primera clase impartida: nuevas tecnologías de la comunicación', state: 'Documentada', summary: 'Impartí una clase de Estudios Sociales a siete estudiantes de segundo año de bachillerato, Modalidad Flexible, sobre “Las nuevas tecnologías de la comunicación” (Módulo 5, Lección 2). El plan contemplaba 90 minutos; la clase duró 65. Otros 15 minutos se destinaron a grabar un video de invitación a continuar estudiando.', role: 'Dirigí cinco misiones de ConectaTIC 2.0: comparación de medios antiguos y actuales, línea de tiempo de la comunicación, conectividad y verificación digital, aplicaciones de la tecnología y reto final. Utilicé computadora y proyector; algunos estudiantes emplearon sus teléfonos. Ante dificultades para navegar por Internet, resolvimos actividades de manera conjunta en la proyección. Entregué al grupo la tarea de elaborar una infografía o cartel sobre la evolución de la comunicación.', reflection: 'Aunque hubo participación, las respuestas grupales no mostraron por igual lo aprendido por cada estudiante. Reconocí nervios al impartir la primera clase y la necesidad de distribuir mejor el tiempo, proyectar mejor la voz y recoger evidencias individuales. Mantener la actividad mediante la proyección compartida mostró el valor de preparar alternativas ante fallas de conexión.', evidence: 'Mi planificación aprobada muestra el diseño; ConectaTIC 2.0, el recurso que utilicé; mi registro de la jornada 6 y la guía de observación describen la ejecución y sus ajustes.' },
  { number: 7, date: '7 de noviembre de 2026', title: 'Visita de cierre programada', state: 'Programada', summary: 'La visita de cierre está prevista para el 7 de noviembre de 2026.', role: 'Mi participación se definirá durante la visita de cierre.', reflection: 'Reflexionaré sobre mi experiencia después de la visita.', evidence: 'Documentaré esta visita una vez realizada.' },
];

export const diagnosticFindings = [
  { value: 4, total: 5, label: 'Participantes que reportaron dificultad para estudiar de forma independiente' },
  { value: 3, total: 5, label: 'Participantes que solicitaron más actividades prácticas' },
  { value: 3, total: 5, label: 'Participantes que reportaron dificultades con aplicaciones o plataformas' },
];

export const sources = [
  { label: 'Consigna y rúbrica DDP1109', description: 'Estructura obligatoria y criterios de evaluación.' },
  { label: 'Informe diagnóstico del equipo (2026)', description: 'Contexto, cuestionario, entrevistas y FODA; muestra de cinco participantes en los resultados citados.' },
  { label: 'Registros individuales y guías J1–J6', description: 'Mis actividades y reflexiones durante las seis primeras visitas.' },
  { label: 'ConectaTIC 2.0', description: 'Recurso interactivo utilizado en la primera clase impartida el 24 de octubre; la versión pública funciona sin sincronización entre dispositivos.' },
  { label: 'Planificación aprobada de la lección 2 (24 de octubre de 2026)', description: 'Mi planificación está disponible en PDF. Los tiempos y la asistencia estimada corresponden al diseño previo a la clase.' },
  { label: 'Jornalización anual de Estudios Sociales y Cívica', description: 'Referencia temática orientativa; validar el avance efectivo con la tutora.' },
];

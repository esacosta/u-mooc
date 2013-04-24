var assessment = {
  // HTML to display at the start of the page
  preamble: '<b>Este es el primer exámen que debe pasar para ver si le ha sido de utilidad el curso<br>¡Mucha suerte!<br></b><p>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [

    {questionHTML: '¿Una evaluación lleva asociada una nota?',
     choices: [correct('Si'),
               'No'],
     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '4.10'},

    {questionHTML: '¿questionHTML es la adena que contiene el texto?',
     choices: [correct('Si'),
               'No'],
     lesson: '4.10'},

    {questionHTML: '¿Puede incluir cadenas HTML en el texto?',
      choices: [correct('Si'),
               'No'],
     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '4.10'},

    {questionHTML: '¿De que áreas se compone la página de registro?',
     choices: ['register.html, model.py y utils.py',
              'register.html, model.py, utils.py y bulkloader.yaml',
              'base_registration.html y register.html',
              correct('Cabecera, área de contenido y pie de página')],
     lesson: '4.5'},

    {questionHTML: 'Cuando crea una lección del curso puede incluir videos para poder reproducirlos en cualquier dispositivo, como en la siguiente imagen.</p><center><img src="/assets/html/lesson-4.8_archivos/image002.jpg" border="0" alt="" title=""></center><p>Pero ¿Cual es el nombre del canal donde debe subir los vídeos?',
    correctAnswerString: '/Youtube/i',
     lesson: '4.8'},

    {questionHTML: '¿En que campo se pone el ID del vídeo asociado a la lección?',
     correctAnswerString: '/lesson_video_id/i',
     lesson: '4.8'},

     {questionHTML: '¿Cuál de estas frases es correcta?',
     choices: ['Las lecciones de un curso son siempre evaluables, es necesario realizar una actividad por cada una',
               'Las lecciones de un curso se contruyen con 3 archivos, base.html, unit.html y unit.csv',
               correct('Sí.')],
     lesson: '4.8'},

     {questionHTML: 'activity-NM.js, donde N es el número de actividad y M es el número de la lección ¿es correcto?',
     choices: ['Atractivas y sencillas, pero no intimidantes.',
               'Atractivas y desafiantes, pero no frustrantes',
               correct('Las lecciones de un curso se contruyen con 3 archivos, base.html, unit.html y lesson.csv')],
     lesson: '4.8'},

     {questionHTML: '¿En que tres partes se dividen la mayoría de las páginas?',
     choices: ['No lo se',
               'Si',
               correct('No')],
     lesson: '4.9'},

     {questionHTML: '¿Que herramienta puede utilizar para crear un foro en el curso?',
     choices: ['Google Gmail',
               'Foro activo',
               correct('Google Groups')],
     lesson: '5.2'},
	 
	{questionHTML: 'Este es un ejemplo de ayuda a la suscripción.<br/><i><p> Gracias por registrarse. </ p> Para participar en las discusiones de la comunidad sobre este curso...</i></p><br/> ¿Donde debe ir este texto?',
     choices: ['views / confirmacion.html',
               'views / registration.html',
			   'views / forum.html',
               correct('Ninguna de las anteriores')],
     lesson: '5.2'},
	 
	 {questionHTML: '¿Cual es la palabra que se utiliza cuando debemos arreglar algo en un texto, o queremos personalizar el foro?',
     correctAnswerString: '/FIXME/i',
     lesson: '5.2'},
	 
	 {questionHTML: '¿Cual es el programa de Google que le permite crear una clase en línea con mas de 10 participantes?',
     correctAnswerString: '/On Air|Google On Air/i',
     lesson: '5.6'},
	 
	 {questionHTML: '¿Cual es la mejor manera de manejar a todas las personas que envían inforamción a los TA?',
     choices: ['Formando todo lo posible a los TA, como si expertos en la materia',
                'Impidiendo que los alumnos hagan mas de una pregunta',
               correct('Creando diferentes alias de cuentas de correo para organizar las preguntas')],
     lesson: '5.7'},
	 
	 {questionHTML: '¿Cual es la herramienta de google más efectiva para realizar la evaluación de los datos del curso?',
     correctAnswerString: '/Google Analytics/i',
     lesson: '6.3'},
	 
	 {questionHTML: '¿En que archivo debe incluir la información del programa con que analizará los datos del curso para que aparezca en todas y cada una de las páginas del curso?',
     correctAnswerString: '/course.yaml/i',
     lesson: '6.3'},
	 
	 {questionHTML: '¿Cuál es la extensión de exportación de los archivos de datos?',
     correctAnswerString: '/csv/i',
     lesson: '6.7'},
	 
	 {questionHTML: '¿Cuál es el archivo donde podemos especificar que campos exportar, <i>Por ejemplo para obtener todos los email de los estudiantes</i>?',
     correctAnswerString: '/bulkloader.yaml/i',
     lesson: '6.3'},
  ],

  assessmentName: 'postcourse', // unique name submitted along with all of the answers
  checkAnswers: false           // render a "Check your Answers" button to allow students to check answers prior to submitting?
}


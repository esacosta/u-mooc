var assessment = {
  preamble: '<b>Este es el primer exámen que debe pasar para ver si le ha sido de utilidad el curso<br>¡Mucha suerte!<br></b><p>',

  questionsList: [

    {questionHTML: '¿Una evaluación lleva asociada una nota?',
     choices: [correct('Si'),
               'No'],
     lesson: '4.10'},


    {questionHTML: 'Cuando crea una lección del curso puede incluir videos para poder reproducirlos en cualquier dispositivo. Pero ¿Cual es el nombre del canal donde debe subir los vídeos?',
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

    {questionHTML: '¿Que herramienta puede utilizar para crear un foro en el curso?',
     choices: ['Google Gmail',
               'Foro activo',
               correct('Google Groups')],
     lesson: '5.2'},
	 
	{questionHTML: '¿Cual es el programa de Google que le permite crear una clase en línea con mas de 10 participantes?',
     correctAnswerString: '/On Air|Google On Air/i',
     lesson: '5.6'},
	 
	{questionHTML: '¿Cual es la herramienta de google más efectiva para realizar la evaluación de los datos del curso?',
     correctAnswerString: '/Google Analytics/i',
     lesson: '6.3'},
	 
	{questionHTML: '¿En que archivo debe incluir la información del programa con que analizará los datos del curso para que aparezca en todas y cada una de las páginas del curso?',
     correctAnswerString: '/course.yaml/i',
     lesson: '6.3'},
	 
	{questionHTML: '¿Cuál es la extensión de exportación de los archivos de datos?',
     correctAnswerString: '/csv/i',
     lesson: '6.7'},
  ],

  assessmentName: 'postcourse', 
  checkAnswers: false           
}


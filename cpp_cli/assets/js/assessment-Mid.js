var assessment = {
  // HTML to display at the start of the page
  preamble: '<b>Este es el primer exámen que debe pasar para ver si le ha sido de utilidad el curso<br>¡Mucha suerte!<br></b><p>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [

    {questionHTML: '¿Cree que le será absolutamente necesario tener conocimientos de Google App Engine?<br/>',
     choices: [correct('No es necesario, aunque si aconsejable'),
               'Es una ventaja y muy necesaria',
               'Es innecesito cualquier conocimiento sobre App Engine',
               'Por supuesto, es imprescidible'],
     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '1.1'},

    {questionHTML: '¿Cual es el nombre del directorio donde se encuentran casi todos los recursos HTML que puede modificar a su gusto?',
     correctAnswerRegex: /views?/i,
     lesson: '1.1'},

    {questionHTML: '¿Es posible utilizar Google Analytics en nuestro curso?<br/>',
      choices: [correct('Podríamos ponerlo en views / base.html si quisieramos'),
               'Si, es posible, hay que cambiarlo en controllers / utils.py',
               'Por supuesto, es imprescidible',
               'No es necesario, aunque si aconsejable dentro de views / unit.html'],
     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '1.1'},

    {questionHTML: '¿Cual es el la extensión de los archivos que contienen los datos del curso, lecciones y unidades, etc?<br/>',
     correctAnswerRegex: /csv?/i,
     lesson: '1.1'},

    {questionHTML: '¿Qué es un Hangout?<br/>',
     choices: ['Un video grabado por el profesor para que siga una lección del curso',
               'Es una herramienta para colgar la ropa fuera de casa',
               'Es un chat de Google',
               correct('Un Hangouts te permite chatear cara a cara con hasta 9 personas a través del chat de vídeo')],
     lesson: '1.1'},

    {questionHTML: 'En la siguiente imágen ¿Cual parece el mejor modo para un curso MOOC?<br/><img src="assets/html/lesson-1.3_archivos/image002.gif" width="50%" height="auto" border="0"><br/>',
     choices: ['La opción A es correcta.',
               'La opción B es correcta.',
               correct('La opción C correcta.')],
     lesson: '1.2'},

     {questionHTML: '¿Con que programa puede analizar los datos de un curso?',
      correctAnswerRegex: /Google Analytics?/i,
     lesson: '2.2'},

     {questionHTML: '¿Es bueno que otras personas evaluen el contenido de su curso?<br>',
     choices: ['Da igual.',
               'No.',
               correct('Sí.')],
     lesson: '2.2'},

     {questionHTML: '¿Como deben ser las evaluaciones?',
     choices: ['Atractivas y sencillas, pero no intimidantes.',
               'Atractivas y desafiantes, pero no frustrantes',
               correct('Atractivas y desafiantes, pero no intimidantes y frustrantes')],
     lesson: '2.2'},

     {questionHTML: '¿En que tres partes se dividen la mayoría de las páginas?',
     choices: ['Header, Footer, Content en ese orden',
               'Cabecera, contenido y ayuda',
               correct('Header, Content, Footer')],
     lesson: '3.3'},

     {questionHTML: 'Revise algunos archivos JS de actividades y diga cual es la palabra usada para los tipos de preguntas de texto libre',
     correctAnswerRegex: /freetext?/i,
     lesson: '3.3'},
  ],

  assessmentName: 'midcourse', // unique name submitted along with all of the answers
  checkAnswers: false           // render a "Check your Answers" button to allow students to check answers prior to submitting?
}


var assessment = {
  preamble: '<b>Este es el primer exámen que debe pasar para ver si le ha sido de utilidad el curso<br>¡Mucha suerte!<br></b><p>',

  questionsList: [

    {questionHTML: '¿Cree que le será absolutamente necesario tener conocimientos de Google App Engine?<br/>',
     choices: [correct('No es necesario, aunque si aconsejable'),
               'Es una ventaja y muy necesaria',
               'Es innecesito cualquier conocimiento sobre App Engine',
               'Por supuesto, es imprescidible'],
     lesson: '1.1'},

    {questionHTML: '¿Es posible utilizar Google Analytics en nuestro curso?<br/>',
      choices: [correct('Podríamos ponerlo en views / base.html si quisieramos'),
               'Si, es posible, hay que cambiarlo en controllers / utils.py',
               'Por supuesto, es imprescidible',
               'No es necesario, aunque si aconsejable dentro de views / unit.html'],
     lesson: '1.1'},

    {questionHTML: '¿Cual es la extensión de los archivos que contienen los datos del curso, lecciones y unidades, etc?<br/>',
     correctAnswerRegex: /csv?/i,
     lesson: '1.1'},

    {questionHTML: '¿Qué es un Hangout?<br/>',
     choices: ['Un video grabado por el profesor para que siga una lección del curso',
               'Es una herramienta para colgar la ropa fuera de casa',
               'Es un chat de Google',
               correct('Un Hangouts te permite chatear cara a cara con hasta 9 personas a través del chat de vídeo')],
     lesson: '1.1'},

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
  ],

  assessmentName: 'midcourse', 
  checkAnswers: false         
}


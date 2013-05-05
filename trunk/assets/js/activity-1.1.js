var activity = [

  '<table class="table"><tr><td><b>Objetivos de la actividad:</b><p><ul><li>Tras leer el documento de requerimientos iniciales o introducción esperamos que conteste a las siguientes preguntas.</li><li>Si tiene alguna duda aún o algo no lo recuerda bien, puede volver a revisar el texto.</li></ul><p></tr></td></table><br>',
  '<p/>',
  '<b>1.</b>¿Cree que le será absolutamente necesario tener conocimientos de Google App Engine?<br/><br/><img src="assets/img/appengine.png" height=auto width=100%><br/>',

  { questionType: 'multiple choice',
    choices: [['Por supuesto, es imprescidible', false, 'Inténtelo de nuevo.'],
              ['Es innecesito cualquier conocimiento sobre App Engine', false, 'Inténtelo de nuevo.'],
              ['Es una ventaja y muy necesaria', false, 'Inténtelo de nuevo.'],
              ['No es necesario, aunque si aconsejable', true, '!Correcto! No es necesario, aunque si aconsejable a la hora de querar publicar su MOOC.']]
  },

  '<br><br><br>',
  '<br><b>2.</b>¿Cual es el nombre del directorio donde se encuentran casi todos los recursos HTML que puede modificar a su gusto?<br/><br/>',

  { questionType: 'freetext',
    correctAnswerRegex: /views?/i,
    correctAnswerOutput: 'Correcto. Vaya al directorio y revise cuantas posibilidades tiene de modificar su MOOC',
    incorrectAnswerOutput: 'Inténtelo otra vez. Revise el documento y vea nombres de los archivos que terminan en .html',
    showAnswerOutput: 'Debe intentarlo por su cuenta, pero la respuesta es VIEWS, en este directorio encontrará gran cantidad de archivos html para modificar.' },

  '<br/><br/><br/>',
  '<b>3.</b>¿Es posible utilizar Google Analytics en nuestro curso?<br/><br/><img src="assets/img/analytics.png" height=auto width=100%><br/>',

  { questionType: 'multiple choice',
    choices: [['Por supuesto, es imprescidible', false, 'Inténtelo de nuevo.'],
              ['Si, es posible, hay que cambiarlo en controllers / utils.py', false, 'Inténtelo de nuevo.'],
              ['Podríamos ponerlo en views / base.html si quisieramos', true, '!Correcto! No es necesario, aunque si aconsejable y hay que ponerlo en views / base.html'],
              ['No es necesario, aunque si aconsejable dentro de views / unit.html', false, 'Inténtelo de nuevo']]
  },

  '<br><br><br>',
  '<b>4.</b>¿Cual es el la extensión de los archivos que contienen los datos del curso, lecciones y unidades, etc?<br/><br/>',

  { questionType: 'freetext',
    correctAnswerRegex: /csv?/i,
    correctAnswerOutput: 'Correcto.',
    incorrectAnswerOutput: 'Inténtelo otra vez.',
    },

  '<br><br><br>',
  '<b>5.</b>¿Qué es un Hangout?<br/>Revise el siguiente vídeo y conteste a la pregunta<br/><center><iframe width="560" height="315" src="http://www.youtube.com/embed/AwULXJlOxOU" frameborder="0" allowfullscreen></iframe></center><br/>',

  { questionType: 'multiple choice',
    choices: [['Un video grabado por el profesor para que siga una lección del curso', false, 'Inténtelo de nuevo.'],
              ['Un Hangouts te permite chatear cara a cara con hasta 9 personas a través del chat de vídeo', true, '¡Correcto!, Intenta instalarlo y pruébalo'],
              ['Es un chat de Google', false, 'Inténtelo de nuevo'],
              ['Es una herramienta para colgar la ropa fuera de casa', false, 'Inténtelo de nuevo']]
  },
];


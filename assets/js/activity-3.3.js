var activity = [

  '<table class="table"><tr><td> <b>Objetivos:</b><p> <ul><li>Aprender donde se encuentran los principales archivos de la aplicación.<li>Determinar que archivos cambiar para modificar mi curso.<li>Se capaz de poner anuncios.<li>Saber donde poder colgar el foro de la aplicación<li>Etc.</ul> </tr></td></table>',

  '<p><b>1.</b> ¿En que tres partes se dividen la mayoría de las páginas?</p>',

  { questionType: 'multiple choice',
    choices: [['Header, Content, Footer', true, 'Correcto'],
              ['Cabecera, contenido y ayuda', false, 'Inténtalo de nuevo'],
              ['Header, Footer, Content en ese orden', false, 'Inténtalo de nuevo'],
              ]},

  '<p><b>2.</b> ¿Como se llaman el archivo donde se encuentra el contiene el contenido del área de contenido para todas las clases en el curso?</p>',

  { questionType: 'freetext',
    correctAnswerRegex: /lesson?/i,
    correctAnswerOutput: 'Correcto.',
    incorrectAnswerOutput: 'Prueba otra vez',
    showAnswerOutput: 'Revisa el apartado \"Una lección\"' },

  '<p><b>3.</b>Revise algunos archivos JS de actividades y diga cual es la palabra usada para los tipos de preguntas de texto libre</p>',

   { questionType: 'freetext',
    correctAnswerRegex: /freetext/i,
    correctAnswerOutput: 'Correcto.',
    incorrectAnswerOutput: 'Prueba otra vez',
    showAnswerOutput: 'Explore los archivivos activity-x.x.js para responder a esta pregunta.' },

];

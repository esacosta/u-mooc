var activity = [

  '<table class="table"><tr><td><b>Objetivos:</b><p><ul><li>Comprender como se evalua un curso.<li>Cuales son las herramientas fundamentales para evaluar los datos de un curso<li>Saber usar las herramientas necesarias para evaluar los datos</ul></tr></td></table>',

  '<p><b>1.</b> ¿Cual es la herramienta de google más efectiva para realizar la evaluación de los datos del curso?</p>',

  { questionType: 'multiple choice',
    choices: [['Los archivos CVS', false, 'Inténtelo de nuevo'],
              ['Google Analytics', true, 'Correcto'],
              ['Los archivos YAML', false, 'Inténtelo de nuevo']]},

  '<p><b>2.</b> ¿En que archivo debe incluir la información del programa con que analizará los datos del curso para que aparezca en todas y cada una de las páginas del curso?</p>',

  { questionType: 'freetext',
    correctAnswerRegex: /course.yaml/i,
    correctAnswerOutput: 'Correcto',
    incorrectAnswerOutput: 'Pruebe otra vez.',
    showAnswerOutput: 'Recuerde que la respuesta puede estar en cualquiera de las lecciones de esta unidad.' },

];


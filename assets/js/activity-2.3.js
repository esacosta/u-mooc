var activity = [
  '<table class="table"><tr><td> <b>Objetivos:</b><p> <ul><li>Aclare el currículo y currículo oculto para el curso.<li>Aclare las suposiciones acerca de sus estudiantes.<li>Escribir los objetivos claros y específicos.<li>Decida lo que quiere usar en sus evaluaciones, tanto calificadas y sin calificar.<li>Decida qué otros datos recoger para evaluar la eficacia de su curso.<li>Secuencie y organice el contenido en trozos digeribles.<li>Valide su contenido con los demás.</ul> </td></tr></table><br>',

  '<b>1.</b> ¿Cual de estas opciones parece la mejor a la hora de enseñar a sus alumnos?<br><br>',

  { questionType: 'multiple choice',
    choices: [['Enseñar a sus alumnos que hay muchas maneras de tejer una bufanda y ver en videos y textos todas la opciones posibles.', false, 'Intentelo de nuevo. Podría estar días enteros viendo como se teje una bufanda en todas las culturas del mundo.'],
              ['Explicar que hay muchas formas de tejer una bufanda, elegir una de ellas y explicar solo esa', false, 'Intentalo de nuevo. Parecería correcto pero realmente lo mejor es elegir no cualquier opción sino la que mejor se adapte a su publico mayoritario.'],
              ['Según su público mayoritario elegir la forma en que su cultura teje una bufanda y explicar esa. Pero sin olvidar mencionar que hay muchas otras formas de tejer una bufanda', true, 'Correcto'],
              ]},

  '<br><br><br><b>2.</b> ¿Como deben ser las evaluaciones?<br><br>',
  { questionType: 'multiple choice',
    choices: [['Atractivas y sencillas, pero no intimidantes.', false, 'Intentelo de nuevo.'],
              ['Atractivas y desafiantes, pero no intimidantes y frustrantes', true, 'Correcto.'],
              ['Atractivas y desafiantes, pero no frustrantes', false, 'Inténtelo de nuevo.'],
              ]},

  '<br><br><br><b>3.</b> ¿Con que programa puede analizar los datos de un curso?<br><br>',

  { questionType: 'freetext',
    correctAnswerRegex: /Google Analytics?/i,
    correctAnswerOutput: 'Correcto',
    incorrectAnswerOutput: 'Intentelo de nuevo, esa no es la respuesta correcta',
    showAnswerOutput: 'Busque la información en el texto, o en internet. No olvide que U-MOOC está basado en course-builder, una herramienta de Google' },

    '<br><br><br><b>4.</b> ¿Es bueno que otras personas evaluen el contenido de su curso?<br><br><center><img src="/assets/html/lesson-2.3_archivos/image013.jpg"/></center><br><br>',

    { questionType: 'multiple choice',
    choices: [['Sí', true, 'Correcto.'],
              ['No', false, 'Intentelo de nuevo.'],
              ]},

              '',

];

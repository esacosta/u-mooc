var activity = [

  '<table class="table"><tr><td><b>Objetivos:</b><p> <ul><li>Conocer los tipos de MOOC.<li>Distinguir entre diferentes cursos masivos online.</ul> </tr></td></table><br>',

  '<p><b>1.</b> Elija cual de estas respuestas es correcta</p>',

  { questionType: 'multiple choice',
    choices: [['Existen muchos tipos de cursos masivos online, pero los mas usados son, grandes, medianos y muy grandes', false, 'Pruebe otra vez. Recuerde que hay dos tipos fundamentales de MOOC.'],
              ['Los cMOOC son cursos de tipo conductista', false, 'Intentelo otra vez, es fácil'],
              ['Los MOOC mas comunes hoy en día son los del tipo xMOOC', true, 'Correcto, aunque no lo dice la lección esta es la respuesta mas acertada, y esto le servirá como realimentación para acordarse.'],
              ['Los cMOOC suelen ser del tipo conectivista', false, 'Incorrecto, inténtelo de nuevo. ¿suelen?']]},

  '<p><b>2.</b> A ver si acierta. ¿Cual es el fundador del conectivismo que se encarga actualemnte del MOOC Research patrocinado por Bill & Melinda. Puede buscar en internet la respuesta, por supuesto</p>',

  { questionType: 'freetext',
    correctAnswerRegex: /George Siemens?/i,
    correctAnswerOutput: 'Correcto! Ha buscado bien',
    incorrectAnswerOutput: 'Repita la respuesta. No olvide la palabra clave MOOC Research',
    showAnswerOutput: 'Si es facil, mire el texto y busque moocresearch.com y lo encontrará. Bueno venga: George Siemens' },
];

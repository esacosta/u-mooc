
var activity = [

  '<table class="table"><tr><td><b>Objetivos:</b><p><ul><li>Obtener un enfoque completo del proceso de un MOOC<li>Entender los procesos síncronos y asíncronos de los estudiantes a la hora de seguir un curso</ul><p></tr></td></table><br>',

  'Responda a estas preguntas cortas con verdadero o falso<p>',

  { questionType: 'multiple choice group',
    questionsList: [{questionHTML: 'Existen tres tipos de flujo para seguir el transcurso de un curso online.',
                     choices: ['Verdadero', 'Falso'], correctIndex: 0},
                    {questionHTML: 'Lo primero que hacen los estudiantes es una evaluación.',
                     choices: ['Verdadero', 'Falso'], correctIndex: 1},
                    {questionHTML: 'No existen clases en vivo dentro de un modelo semi-sincrono.',
                     choices: ['Verdadero', 'Falso'], correctIndex: 1},
                    {questionHTML: 'Los estudiantes que usan clases en vivo, no pueden realizar preguntas.',
                     choices: ['Verdadero', 'Falso'], correctIndex: 1},
                    {questionHTML: 'Lo último que hace un estudiante es la evaluación final',
                     choices: ['Verdadero', 'Falso'], correctIndex: 1},
                    {questionHTML: 'Para los MOOC de U-MOOC podremos utilizar cualquier correo electrónico.',
                     choices: ['Verdadero', 'Falso'], correctIndex: 1}],
    allCorrectOutput: 'Continuemos.',
    someIncorrectOutput: 'Inténtelo otra vez.'},

  '<br><br><br>En la siguiente imágen ¿Cual parece el mejor modo para un curso MOOC?<br><br><img src="assets/html/lesson-1.3_archivos/image002.gif" width="80%" height="auto" border="0"><br/>',

  { questionType: 'multiple choice',
    choices: [['A', false, 'La respuesta es incorrecta.'],
              ['B', false, 'La respuesta es incorrecta.'],
              ['C', true, 'La respuesta es correcta.']]}

];


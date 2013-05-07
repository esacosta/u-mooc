var activity = [

  '<table class="table"><tr><td> <b>Objetivos:</b><p> <ul><li>Aprenda a crear lecciones.<li>Añada videos y textos a las lecciones de su curso</ul></tr></td></table>',

  '<p><b>1.</b> Cuando crea una lección del curso puede incluir videos para poder reproducirlos en cualquier dispositivo, como en la siguiente imagen.</p><center><img src="/assets/html/lesson-4.8_archivos/image002.jpg" border="0" alt="" title=""></center><p>Pero ¿Cual es el nombre del canal donde debe subir los vídeos?</p>',

  { questionType: 'freetext',
    correctAnswerRegex: /Youtube/i,
    correctAnswerOutput: 'Correcto.',
    incorrectAnswerOutput: 'Incorrecto, es muy facil.',
    showAnswerOutput: 'Es una pregunta muy facil, revise la lección y busque algo relacionado con canal',
    outputHeight: '90px' },

    '<p><b>2.</b> ¿En que campo se pone el ID del vídeo asociado a la lección?</p>',

  { questionType: 'freetext',
    correctAnswerRegex: /lesson_video_id/i,
    correctAnswerOutput: 'Correcto.',
    incorrectAnswerOutput: 'Incorrecto, es muy facil.',
    showAnswerOutput: 'Es una pregunta muy facil, revise la lección y busque algo relacionado con vídeo',
    outputHeight: '90px' },

  '<p><b>3.</b> ¿Cuál de estas frases es correcta?</p>',

  { questionType: 'multiple choice',
    choices: [['Las lecciones de un curso son siempre evaluables, es necesario realizar una actividad por cada una', false, 'Prueba otra vez'],
              ['Las lecciones de un curso se contruyen con 3 archivos, base.html, unit.html y unit.csv', false, 'Prueba otra vez, a lo mejor no lo tienes claro.'],
              ['Las lecciones de un curso se contruyen con 3 archivos, base.html, unit.html y lesson.csv', true, 'Correcto'],
              ['lesson_title puede cambiarlo en la plantilla course.html', false, 'Prueba otra vez.']]},

];

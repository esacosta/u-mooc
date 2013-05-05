var activity = [

  '<table class="table"><tr><td><b>Objetivos:</b><p><ul><li>Aprenda a preparar una clase en línea<li>Aprenda a usar Google Moderator</ul></tr></td></table>',

  '<p><b>1.</b> ¿Cual es el programa de Google que le permite crear una clase en línea con mas de 10 participantes?</p>',

  { questionType: 'freetext',
    correctAnswerRegex: /On Air|Google On Air/i,
    correctAnswerOutput: 'Correcto',
    incorrectAnswerOutput: 'Pruebe otra vez.',
    showAnswerOutput: 'Recuerde que se trata de más de 10 participantes.' },

  '<p><b>2.</b> Según el texto. ¿De que color es la vista de presentación de Google Moderator?</p>',

  { questionType: 'multiple choice',
    choices: [['Blanco', false, 'Pruebe otra vez'],
              ['Azul', true, 'Correcto']]},

];


var activity = [

  '<br>',

  '<p><b>1.</b> Elija cual de estas respuestas es correcta</p>',

  { questionType: 'multiple choice',
    choices: [['U-MOOC no usa Google Analitics', false, 'Pruebe otra vez.'],
              ['U-MOOC utiliza una herramienta de Google', true, 'Correcto, era facil.']]},

  '<p><b>2.</b> ¿Que puede usar para evaluar la eficacia de un curso?</p>',

  { questionType: 'freetext',
    correctAnswerRegex: /Google Analitics?/i,
    correctAnswerOutput: 'Correcto!',
    incorrectAnswerOutput: 'Repita la respuesta.',
    showAnswerOutput: 'Si es facil, mire el texto, busque y lo encontrará. Bueno venga: Google Analitics' },
];


var assessment = {
  // HTML to display at the start of the page
  preamble: 'Cuando escriba su revisi&oacute;n, por favor asegures&eacute; que la respuesta del estudiante es relevante a la cuesti&oacute;n planteada. Si no, responda \'No\' a la primera de las cuestiones que le aparecen a continuaci&oacute;n.',

  questionsList: [
    {questionHTML: 'A respondido el estudiante a todas las preguntas que se le plantean?',
     choices: ['Si', 'No']},

    {questionHTML: 'Por favor, escriba algo como respuesta al autor de la cuesti&oacute;n, para que le sirva como retroalimentaci&oacute;n de su evaluaci&oacute;n.',
     multiLine: true,
     correctAnswerRegex: /.*/i
    }
  ],

  // The assessmentName key is deprecated in v1.3 of U-MOOC, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'ReviewAssessmentExample',
  checkAnswers: false
}

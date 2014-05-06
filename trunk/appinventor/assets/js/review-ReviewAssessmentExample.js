// Copyright 2012 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// When the assessment page loads, activity-generic.js will render the contents
// of the 'assessment' variable into the enclosing HTML webpage.

// For information on modifying this page, see
// https://code.google.com/p/course-builder/wiki/CreateAssessments.


var assessment = {
  // HTML to display at the start of the page
  preamble: 'Cuando escriba su revisi&oacute;n, por favor asegures&eacute; que la respuesta del estuante es relevante a la cuesti&oacute;n planteada. Si no, responda \'No\' a la primera de las cuestiones que le aparecen a continuaci&oacute;n.',

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

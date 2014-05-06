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
  preamble: 'Resuelva el problema que se le indica a continuaci&oacute;n<br><br><strong>Problema</strong>: Imagine que quiere realizar un programa en AppInventor para buscar los números equivalentes a los 902 pero de su provincia.',

  questionsList: [
    {questionHTML: '¿Cúantos elementos como mínimo cree que necesitaría para realizar dicho programa?',
     choices: ['1', 'Entre 1 y 5', 'Nunca menos de 9', 'Más de 10']},

    {questionHTML: 'Escriba los puntos fundamentales que debería tener su programa 902 -> 9xx',
     multiLine: true,
     correctAnswerRegex: /.*/i
    },
  ],

  // The assessmentName key is deprecated in v1.3 of U-MOOC, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'ReviewAssessmentExample',
  checkAnswers: false
}

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
  preamble: 'Resuelva el problema que se le indica a continuaci&oacute;n<br><br><strong>Problema</strong>: Imagine que uno de sus antiguos profesores desea realizar un MOOC para ciegos, quiere hacer un curso de matem&aacute;ticas para ciegos y no sabe como hacerlo. Puede realizarlo con U-MOOC? C&oacute;mo?',

  questionsList: [
    {questionHTML: 'Por favor, escriba la respuesta en un documento, utilizando por ejemplo Google doc, y copie el enlace p&uacute;blico que esta herramienta le proporciona en esta caja, para que sea visible por otros alumnos, que revisar&aacute;n su documento.',
     correctAnswerRegex: /.*/i
    },

    {questionHTML: 'Cuantos cursos puede realizar en una misma plataforma con U-MOOC?',
     choices: ['1', 'Entre 1 y 5', 'Nunca mas de 9', 'Todos los que quiera']},

    {questionHTML: 'Escriba los puntos fundamentales que debe tener un MOOC',
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

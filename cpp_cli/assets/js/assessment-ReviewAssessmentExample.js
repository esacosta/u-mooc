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
  preamble: 'Resuelva el problema que se le indica a continuaci&oacute;n<br><br><strong>Problema</strong>: Trate de crear un WebService parecido al que se encuentra en el ejemplo, pero añadiendo sus propias funciones, súbalo a internet en cualquier carpeta pública de DropBox, Google Drive o SkyDrive.',

  questionsList: [
    {questionHTML: 'Inserte la dirección del archivo comprimido que contiene todo lo necesario para compilar el ejemplo en Visual C/C++, para que otros alumnos puedan correguir su trabajo',
     correctAnswerRegex: /.*/i
    },

    {questionHTML: 'Escriba las características mas importantes de C++/CLI en no mas 10 lineas',
     multiline: true,
     correctAnswerRegex: /.*/i
    },
  ],

  // The assessmentName key is deprecated in v1.3 of U-MOOC, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'ReviewAssessmentExample',
  checkAnswers: false
}

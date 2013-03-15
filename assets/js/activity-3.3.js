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


// Usage instructions: Create a single array variable named 'activity'. This
// represents explanatory text and one or more questions to present to the
// student. Each element in the array should itself be either
//
// -- a string containing a set of complete HTML elements. That is, if the
//    string contains an open HTML tag (such as <form>), it must also have the
//    corresponding close tag (such as </form>). You put the actual question
//    text in a string.
//
// -- a JavaScript object representing the answer information for a question.
//    That is, the object contains properties such as the type of question, a
//    regular expression indicating the correct answer, a string to show in
//    case of either correct or incorrect answers or to show when the student
//    asks for help. For more information on how to specify the object, please
//    see http://code.google.com/p/course-builder/wiki/CreateActivities.

var activity = [

  '<table border="2"><tr><td> <b>Objetivos:</b><p> <ul><li>Aprender donde se encuentran los principales archivos de la aplicación.<li>Determinar que archivos cambiar para modificar mi curso.<li>Se capaz de poner anuncios.<li>Saber donde poder colgar el foro de la aplicación<li>Etc.</ul> </tr></td></table>',

  '<p><b>1.</b> ¿En que tres partes se dividen la mayoría de las páginas?</p>',

  { questionType: 'multiple choice',
    choices: [['Header, Content, Footer', true, 'Correcto'],
              ['Cabecera, contenido y ayuda', false, 'Inténtalo de nuevo'],
              ['Header, Footer, Content en ese orden', false, 'Inténtalo de nuevo'],
              ]},

  '<p><b>2.</b> ¿Como se llaman el archivo donde se encuentra el contiene el contenido del área de contenido para todas las clases en el curso?</p>',

  { questionType: 'freetext',
    correctAnswerRegex: /lesson?/i,
    correctAnswerOutput: 'Correcto.',
    incorrectAnswerOutput: 'Prueba otra vez',
    showAnswerOutput: 'Revisa el apartado \"Una lección\"' },

  '<p><b>3.</b>Revise algunos archivos JS de actividades y diga cual es la palabra usada para los tipos de preguntas de texto libre</p>',

   { questionType: 'freetext',
    correctAnswerRegex: /freetext/i,
    correctAnswerOutput: 'Correcto.',
    incorrectAnswerOutput: 'Prueba otra vez',
    showAnswerOutput: 'Explore los archivivos activity-x.x.js para responder a esta pregunta.' },

];

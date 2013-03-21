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

  '<table border="2"><tr><td> <b>Objetivos:</b><p> <ul><li>Aprenda a crear lecciones.<li>Añada videos y textos a las lecciones de su curso</ul></tr></td></table>',

  '<p><b>1.</b> Cuando crea una lección del curso puede incluir videos para poder reproducirlos en cualquier dispositivo, como en la siguiente imagen.</p><center><img src="http://localhost:8081/assets/html/lesson-4.8_archivos/image002.jpg" border="0" alt="" title=""></center><p>Pero ¿Cual es el nombre del canal donde debe subir los vídeos?</p>',

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

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

  '<table border="2"><tr><td><b>Objetivos de la actividad:</b><p><ul><li>Tras leer el documento de requerimientos iniciales o introducción esperamos que conteste a las siguientes preguntas.</li><li>Si tiene alguna duda aún o algo no lo recuerda bien, puede volver a revisar el texto.</li></ul><p></tr></td></table><br>',
  '<p/>',
  '<b>1.</b>¿Cree que le será absolutamente necesario tener conocimientos de Google App Engine?<br/><br/><img src="assets/img/appengine.png" height=auto width=100%><br/>',

  { questionType: 'multiple choice',
    choices: [['Por supuesto, es imprescidible', false, 'Inténtelo de nuevo.'],
              ['Es innecesito cualquier conocimiento sobre App Engine', false, 'Inténtelo de nuevo.'],
              ['Es una ventaja y muy necesaria', false, 'Inténtelo de nuevo.'],
              ['No es necesario, aunque si aconsejable', true, '!Correcto! No es necesario, aunque si aconsejable a la hora de querar publicar su MOOC.']]
  },

  '<br><br><br>',
  '<br><b>2.</b>¿Cual es el nombre del directorio donde se encuentran casi todos los recursos HTML que puede modificar a su gusto?<br/><br/>',

  { questionType: 'freetext',
    correctAnswerRegex: /views?/i,
    correctAnswerOutput: 'Correcto. Vaya al directorio y revise cuantas posibilidades tiene de modificar su MOOC',
    incorrectAnswerOutput: 'Inténtelo otra vez. Revise el documento y vea nombres de los archivos que terminan en .html',
    showAnswerOutput: 'Debe intentarlo por su cuenta, pero la respuesta es VIEWS, en este directorio encontrará gran cantidad de archivos html para modificar.' },

  '<br/><br/><br/>',
  '<b>3.</b>¿Es posible utilizar Google Analytics en nuestro curso?<br/><br/><img src="assets/img/analytics.png" height=auto width=100%><br/>',

  { questionType: 'multiple choice',
    choices: [['Por supuesto, es imprescidible', false, 'Inténtelo de nuevo.'],
              ['Si, es posible, hay que cambiarlo en controllers / utils.py', false, 'Inténtelo de nuevo.'],
              ['Podríamos ponerlo en views / base.html si quisieramos', true, '!Correcto! No es necesario, aunque si aconsejable y hay que ponerlo en views / base.html'],
              ['No es necesario, aunque si aconsejable dentro de views / unit.html', false, 'Inténtelo de nuevo']]
  },

  '<br><br><br>',
  '<b>4.</b>¿Cual es el la extensión de los archivos que contienen los datos del curso, lecciones y unidades, etc?<br/><br/>',

  { questionType: 'freetext',
    correctAnswerRegex: /csv?/i,
    correctAnswerOutput: 'Correcto.',
    incorrectAnswerOutput: 'Inténtelo otra vez.',
    },

  '<br><br><br>',
  '<b>5.</b>¿Qué es un Hangout?<br/>Revise el siguiente vídeo y conteste a la pregunta<br/><center><iframe width="560" height="315" src="http://www.youtube.com/embed/AwULXJlOxOU" frameborder="0" allowfullscreen></iframe></center><br/>',

  { questionType: 'multiple choice',
    choices: [['Un video grabado por el profesor para que siga una lección del curso', false, 'Inténtelo de nuevo.'],
              ['Un Hangouts te permite chatear cara a cara con hasta 9 personas a través del chat de vídeo', true, '¡Correcto!, Intenta instalarlo y pruébalo'],
              ['Es un chat de Google', false, 'Inténtelo de nuevo'],
              ['Es una herramienta para colgar la ropa fuera de casa', false, 'Inténtelo de nuevo']]
  },
];


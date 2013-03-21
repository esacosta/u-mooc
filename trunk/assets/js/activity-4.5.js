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

  '<table border="2"><tr><td><b>Objetivos:</b><p><ul><li>Entender y modificar la ventana donde se registran los estudiantes.<li>Añadir nuevas propiedades de los estudiantes a su curso para sus estadísticas.</ul></tr></td></table>',

  '<p><b>1.</b> ¿De que áreas se compone la página de registro?</p>',


  { questionType: 'multiple choice',
    choices: [['register.html, model.py y utils.py', false, 'Incorrecto'],
              ['register.html, model.py, utils.py y bulkloader.yaml', false, 'Incorrecto'],
              ['base_registration.html y register.html', false, 'Incorrecto'],
              ['Cabecera, área de contenido y pie de página', true, 'Correcto']]},

  '<p><b>2.</b> <p><center><img src="http://upload.wikimedia.org/wikipedia/commons/thumb/8/88/New-York-Jan2005.jpg/250px-New-York-Jan2005.jpg" /></center></p>Trate de pensar algunos campos que pudieran ser de su interés, enumérelos y póngalos a disposición de otros estudiantes del curso en el foro. Incluya los distintos archivos que ha modificado y sus modificaciones para que le sea util a otros estudiantes. (Como por ejemplo añadir un campo "<b>Ciudad</b>") </p>',

];


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

  '<table border="2"><tr><td><b>Objetivos:</b><p><ul><li>Obtener un enfoque completo del proceso de un MOOC<li>Entender los procesos síncronos y asíncronos de los estudiantes a la hora de seguir un curso</ul><p></tr></td></table><br>',

  'Responda a estas preguntas cortas con verdadero o falso<p>',

  { questionType: 'multiple choice group',
    questionsList: [{questionHTML: 'Existen tres tipos de flujo para seguir el transcurso de un curso online.',
                     choices: ['Verdadero', 'Falso'], correctIndex: 0},
                    {questionHTML: 'Lo primero que hacen los estudiantes es una evaluación.',
                     choices: ['Verdadero', 'Falso'], correctIndex: 1},
                    {questionHTML: 'No existen clases en vivo dentro de un modelo semi-sincrono.',
                     choices: ['Verdadero', 'Falso'], correctIndex: 1},
                    {questionHTML: 'Los estudiantes que usan clases en vivo, no pueden realizar preguntas.',
                     choices: ['Verdadero', 'Falso'], correctIndex: 1},
                    {questionHTML: 'Lo último que hace un estudiante es la evaluación final',
                     choices: ['Verdadero', 'Falso'], correctIndex: 1},
                    {questionHTML: 'Para los MOOC de Course-Builder podremos utilizar cualquier correo electrónico.',
                     choices: ['Verdadero', 'Falso'], correctIndex: 1}],
    allCorrectOutput: 'Continuemos.',
    someIncorrectOutput: 'Inténtelo otra vez.'},

  '<br><br><br>En la siguiente imágen ¿Cual parece el mejor modo para un curso MOOC?<br><br><img src="assets/html/lesson-1.3_archivos/image002.gif" width="80%" height="auto" border="0"><br/>',

  { questionType: 'multiple choice',
    choices: [['A', false, 'La respuesta es incorrecta.'],
              ['B', false, 'La respuesta es incorrecta.'],
              ['C', true, 'La respuesta es correcta.']]}

];


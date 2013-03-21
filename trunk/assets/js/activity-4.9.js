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

  '<table border="2"><tr><td><b>Objetivos:</b><p><ul><li>Aprenda a crear actividades para el curso<li>Aprenda a utilizar las expresiones regulares de javascript<li>Cree distintos tipos de test</ul></tr></td></table>',

  '<p><b>1.</b>activity-NM.js, donde N es el número de actividad y M es el número de la lección ¿es correcto?</p>',

  { questionType: 'multiple choice',
    choices: [['Si', false, 'Incorrecto, N es el número de unidad, no de actividad'],
              ['No', true, 'Correcto.']] }

];


// Note that the following code (that is not part of the definition of the
// 'activity' variable) needs to be surrounded with the commented tags
// '// <gcb-no-verify>' and '// </gcb-no-verify>', so that the verifier script
// in tools/verify.py does not treat the code as invalid. For more details,
// please see https://code.google.com/p/course-builder/wiki/VerifyCode


//<gcb-no-verify>

// JavaScript support code for displaying text into the proper output textarea:
function check42(id, intext) {
  switch (id) {
    case 1:
    document.quiz.output1.value = intext;
    break;

    case 2:
    document.quiz.output2.value = intext;
    break;

    case 3:
    document.quiz.output3.value = intext;
    break;
  }
}

//</gcb-no-verify>

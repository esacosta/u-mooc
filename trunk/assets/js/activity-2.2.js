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

  '<table border="2"><tr><td><b>Objetivos:</b><p> <ul><li>Crear una planificación para un curso.<li>Probar su planificación con un público objetivo.</ul> </tr></td></table><br>',

  'Le proponemos a continuación un pequeño ejercicio a desarrollar para planificar el curso.',
  'Piense que debe prepara la planificación para un curso de <b>raices cuadradas</b>.Vea el siguiente video y trate de realizar lo aprendido en esta lección para un pequeño curso de raices cuadradas.',
  '<p><center><iframe width="420" height="315" src="http://www.youtube.com/embed/sDkW46acMlE" frameborder="0" allowfullscreen></iframe></p>',
  '<br/><b> No olvide probar el curso con alguien cercano a usted antes de implementarlo.</b></center>',

];

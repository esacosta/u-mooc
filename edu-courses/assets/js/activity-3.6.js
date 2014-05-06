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
  '',

  '<p><b>1.</b> With the publication of his book  The General Theory of Employment, Interest and Money in 1936, which economist emphasized aggregate demand, and that full employment needed the help of government spending – both standing in opposition to supply-side economic thinking?',

  { questionType: 'multiple choice',
    choices: [['a. Douglass North', false, 'Please try again.'],
              ['b. John Maynard Keynes', true, 'Correct!'],
              ['c. Adam Smith', false, 'Please try again.'],
              ['d. Jean-Baptiste Say', false, 'Please try again.']]},

  '<p><b>2.</b> “Supply creates demand” or “supply creates its own demand” often is referred to as:',

 { questionType: 'multiple choice',
    choices: [['a. Say’s Law', true, 'Correct!'],
              ['b. Keynes’ Law', false, 'Please try again.'],
              ['c. Comparative advantage', false, 'Please try again.'],
              ['d. General theory', false, 'Please try again.']]},

  '<p><b>3.</b> Supply-side economics is built on the following tenet(s):',

  { questionType: 'multiple choice',
    choices: [['a. supply comes before demand in the economic process', false, 'Please try again.'],
              ['b. markets work', false, 'Please try again.'],
              ['c. incentives matter', false, 'Please try again.'],
              ['d. all of the above', true, 'Correct!']]},
              
  '<p><b>4.</b> The idea that production is the key ingredient to prosperity and economic growth, with consumption following, is',

  { questionType: 'multiple choice',
    choices: [['a. a Keynesian idea', false, 'Please try again.'],
              ['b. the antithesis of Say’s Law', false, 'Please try again.'],
              ['c. a central concept of supply-side economics', true, 'Correct!'],
              ['d. in conflict with supply-side economic thinking', false, 'Please try again.']]},

 '<p><b>5.</b> According to supply-side economic thought, a key driving force of the economy is',

  { questionType: 'multiple choice',
    choices: [['a. government spending', false, 'Please try again.'],
              ['b. the entrepreneur', false, 'Please try again.'],
              ['c. monetary policy focused on unemployment', false, 'Please try again.'],
              ['d. ', true, 'Correct!']]},

];

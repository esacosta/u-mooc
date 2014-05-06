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
              ['b. the entrepreneur', true, 'Correct!'],
              ['c. monetary policy focused on unemployment', false, 'Please try again.'],
              ['d. the consumer', false, 'Please try again.']]},
			  
 '<p><b>6.</b> Supply-side economic policies via the “fiscal lever” include:',

  { questionType: 'multiple choice',
    choices: [['a. low marginal tax rates', false, 'Please try again.'],
              ['b. light regulation', false, 'Please try again.'],
              ['c. free trade', false, 'Please try again.'],
              ['d. all of the above', true, 'Correct!']]},

 '<p><b>7.</b> In the supply-side view, the goal of monetary policy should be:',

  { questionType: 'multiple choice',
    choices: [['a. increasing aggregate demand', false, 'Please try again.'],
              ['b. price stability', true, 'Correct!'],
              ['c. low unemployment', false, 'Please try again.'],
              ['d. low unemployment and price stability', false, 'Please try again.']]},
			  
 '<p><b>8.</b> Monetary policy, according to supply-side economics, should be:',

  { questionType: 'multiple choice',
    choices: [['a. guided by the economic whims of central bankers', false, 'Please try again.'],
              ['b. focused on manipulating aggregate demand', false, 'Please try again.'],
              ['c. anchored to market indicators of the supply and demand for money', true, 'Correct!'],
              ['d. cut completely free of anchors like gold',false, 'Please try again.'] ]},
			  
 '<p><b>9.</b> In terms of its intellectual roots, supply-side economic thought is:',

  { questionType: 'multiple choice',
    choices: [['a. a completely new school of thought that emerged in the 1970s', false, 'Please try again.'],
              ['b. a school of thought that runs back to the dawn of modern-day economics with such classical economics as Adam Smith and JeanBaptiste Say', true, 'Correct!'],
              ['c. an offshoot of Keynesian economics, which got its start with John Maynard Keynes’ book The General Theory', false, 'Please try again.'],
              ['d. a compromise between Keynesian and classical economics', false, 'Please try again.']]},
			  
		  
 '<p><b>10.</b> A compact way to summarize supply-side economics is:',

  { questionType: 'multiple choice',
    choices: [['a. the application of price theory, or microeconomics, to economic aggregates', true, 'Correct!'],
              ['b. confirmation of the Keynesian emphasis on aggregate demand', false, 'Please try again.'],
              ['c. proof that consumption drives economic growth', false, 'Please try again.'],
              ['d. the final rejection of Say’s Law', false, 'Please try again.']]},

			  
];

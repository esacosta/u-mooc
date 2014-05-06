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

  '<p><b>1.</b> Based on the tax, spending and trade policies he favored, President Herbert Hoover could be defined as',

  { questionType: 'multiple choice',
    choices: [['a. a laissez-faire president', false, 'Please try again.'],
              ['b. a big government Republican', true, 'Correct!'],
              ['c. a supporter of Calvin Coolidge’s policies', false, 'Please try again.'],
              ['d. a free trade supporter', false, 'Please try again.']]},

  '<p><b>2.</b> Under President Franklin D. Roosevelt’s “New Deal” agenda, tax policy featured:',

 { questionType: 'multiple choice',
    choices: [['a. higher personal income taxes', false, 'Please try again.'],
              ['b. higher corporate income taxes', false, 'Please try again.'],
              ['c. higher capital gains and estate taxes', false, 'Please try again.'],
              ['d. all of the above', true, 'Correct!']]},

  '<p><b>3.</b> 3) After World War II and into the early 1960s, federal tax policy focused on',

  { questionType: 'multiple choice',
    choices: [['a. maintaining a top personal rate above 90 percent for most of the period', false, 'Please try again.'],
              ['b. providing special tax breaks and provisions', false, 'Please try again.'],
              ['c. imposing a corporate income tax rate after 1952 that was higher than the World War II rate', false, 'Please try again.'],
              ['d. all of the above', true, 'Correct!']]},
              
  '<p><b>4.</b> After the presidencies of Warren Harding and Calvin Coolidge, who was the next president to embrace supply-side economics in his policymaking?',
  { questionType: 'multiple choice',
    choices: [['a. Herbert Hoover', false, 'Please try again.'],
              ['b. Franklin D. Roosevelt', false, 'Please try again.'],
              ['c. Dwight Eisenhower', false, 'Please try again.'],
              ['d. John F. Kennedy', true, 'Correct!']]},

 '<p><b>5.</b> In his speech before the Economic Club of New York in 1962, President John F.Kennedy',
  { questionType: 'multiple choice',
    choices: [['a. a) argued for increased government spending to stimulate the economy', false, 'Please try again.'],
              ['b. favored special tax breaks over reform that lowered tax rates', false, 'Please try again.'],
              ['c. made the case for reducing income tax rates to boost incentives for personal effort, investment and risk taking, and increase economic growth', true, 'Correct!'],
              ['d. called for higher taxes to balance the budget', false, 'Please try again.']]},
			  
 '<p><b>6.</b> The Kennedy tax agenda of 1962 and 1964 featured',

  { questionType: 'multiple choice',
    choices: [['a. reducing personal income tax rates across the board, and cutting the corporate tax rate', true, 'Correct!'],
              ['b. cutting personal income taxes, but raising corporate taxes to balance the budget', false, 'Please try again.'],
              ['c. eliminating the investment tax credit', false, 'Please try again.'],
              ['d. reducing tax rates for lower-income earners, but raising tax rates on the wealthy', false, 'Please try again.']]},

 '<p><b>7.</b> Which of the following is  not from a supply-side perspective a key point in understanding the full benefits or costs of tax changes?',

  { questionType: 'multiple choice',
    choices: [['a. The tax treatment of capital is especially important, because capital formation responds more sharply to tax changes than does the supply of labor.', false, 'Please try again.'],
              ['b. Tax cuts are not as expensive, and tax increases are not as rewarding to the government on a dynamic basis as the static numbers indicate.', false, 'Please try again.'],
              ['c. Changes in capital taxation have a greater effect on GDP, income, and employment, and generate greater revenue feedback, than changes in taxation of wages.', false, 'Please try again.'],
              ['d. Tax cuts focused on consumer spending provide the biggest boost to the economy.', true, 'Correct!']]},
			  
 '<p><b>8.</b> As for their results, the Kennedy tax policies',

  { questionType: 'multiple choice',
    choices: [['a. boosted economic growth, income and employment', true, 'Correct!'],
              ['b. resulted in the costs of lost federal services far exceeding the increase in after-tax income', false, 'Please try again.'],
              ['c. increased unemployment due to labor-saving investments', false, 'Please try again.'],
              ['d. reduced business investment',false, 'Please try again.'] ]},
			  
 '<p><b>9.</b> President Johnson’s temporary tax increase passed in the late 1960s',

  { questionType: 'multiple choice',
    choices: [['a. helped the economy avoid recession', false, 'Please try again.'],
              ['b. discouraged investment in short-lived assets', true, 'Correct!'],
              ['c. boosted government revenue beyond expectations', false, 'Please try again.'],
              ['d. raised income levels', false, 'Please try again.']]},
			  
		  
 '<p><b>10.</b> The lessons from the Kennedy tax cuts and the Johnson tax increases confirm',

  { questionType: 'multiple choice',
    choices: [['a. the Keynesian view that government fiscal measures work by manipulating total spending and aggregate demand in the economy separately from the supply of goods and services', false, 'Please try again.'],
              ['b. that taxes do not matter to the economy to economic decision-making', false, 'Please try again.'],
              ['c. the supply-side concept that microeconomic price and incentive signalsgovern how labor and capital markets and the production process operate in the real world', true, 'Correct!'],
              ['d. that all tax cuts affect the economy in the same way', false, 'Please try again.']]},

			  
];

var activity = [

  '<table class="table"><tr><td> <b>Search Tips:</b><p> <ul><li>Enter any math equation into the search box, and Google will calculate your answer.<li>These search features are available on cell phone, iPad, or anywhere Google is available (like on your phone while you are cooking in the kitchen).</li> </tr></td></table> Try this activity to practice doing conversions in Google search.<p>',

  '<b>1.</b> What is 41 degrees Celsius in Fahrenheit?',

  { questionType: 'freetext',
    correctAnswerRegex: /105.8/,
    correctAnswerOutput: 'Correct! The query [41 c in f] will give you the conversion of Celsius to Fahrenheit.',
    incorrectAnswerOutput: 'Try a simple conversion, using a query similar to this one: [5.4 miles in km].',
    showAnswerOutput: 'It is 105.8 degrees. A query like [41 c in f] will give you the conversion of Celsius to Fahrenheit.' },

  '<br><br><b>2.</b> If you have 100 Rupiah, how much do you have in Yen?',

  { questionType: 'freetext',
    showAnswerPrompt: 'Show Answer',
    showAnswerOutput: 'Using the query [100 rupiah in yen] will find you today\'s approximate rate of exchange.' },

  '<br><br><b>3.</b> You have a recipe for making one quart of barbecue sauce and you want to make ten quarts instead. If the original recipe calls for 4 tablespoons of sugar, how many cups of sugar should you use?',

  { questionType: 'freetext',
    correctAnswerRegex: /2.5?/,
    correctAnswerOutput: 'Correct! You can either ask Google to directly calculate [4 tablespoons * 10 in cups], or you can first ask for [4 tablespoons * 10 ] and then convert [591.470591 milliliters in cups].',
    incorrectAnswerOutput: 'What would this math problem look like? You need to multiply the amount of sugar by the number of recipes you are making, and then convert that amount into cups.',
    showAnswerOutput: 'It is 2.5 cups of sugar. You can either ask Google to directly calculate [4 tablespoons * 10 in cups], or you can first ask for [4 tablespoons * 10 ] and then convert [591.470591 milliliters in cups].' },

];

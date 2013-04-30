var activity = [

  '<table border="1"><tr><td> \
	 <b>Search Tips:</b><p> \
	 <ul><li>In the last video you learned to identify the factors that have an effect on search queries.<p> \
   <li>Word order matters.<p> \
   <li>Small words (a, the) sometimes matter, like when they distinguish between two similar entities.<p> \
   <li>Punctuation that matters: $, #, and + (when used as C++, Google+)<p> \
   <li>Punctuation that Google ignores:  ¶, £, €, ©, ®, ÷, §, %, (), @, ?, !</ul><p> \
	 </tr></td></table>',

  'Here are the results for two searches, [cars] on the left, and [the cars] on the right. Are the results the same or different?<p>',

  '<img src="assets/img/Image1.5.3.png" width="785" height="461" alt="search results for [cars] and [the cars]" title="search results for [cars] and [the cars]" >',

  '<p>Compare the results for two variations of a query. If the <b>non-ad</b> results for two variations differ from each other, check the box in front of those two queries. For example:<br><br><input type=checkbox checked>[cars][the cars]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;These two searches produce different non-ad results.<br>',

  '<br>Open two new tabs with Google search in each, so you can compare the following searches. If the results are different, check the box.<br>',

  // This is a custom user-defined activity type where the user can select multiple checkboxes:
  '<form name="activity"><span id="correct1"><input type=\'checkbox\' name=\'q15\' onClick="clearTextarea1()" value=\'correct\'>&nbsp;[flower spider] [spider flower] <\/span><br>\n<input  type=\'checkbox\' onClick="clearTextarea1()" name=\'q15\' value=\'wrong\'>&nbsp;[Adobe Acrobat] [adobe acrobat] <br>\n<span id="correct2"><input  type=\'checkbox\' onClick="clearTextarea1()" name=\'q15\' value=\'correct\'>&nbsp;[who] [the who] [a who]  <\/span><br>\n<span id="correct3"><input type=\'checkbox\' onClick="clearTextarea1()" name=\'q15\' value=\'correct\'>&nbsp;[150 computer] [$150 computer]<\/span><br>\n<input  type=\'checkbox\' name=\'q15\' onClick="clearTextarea1()" value=\'wrong\'>&nbsp;[% students paying off college loans] [students paying off college loans]<br><br><button type="button" class=\'btn btn-primary\' onClick="check15()">Check Answers</button><br><textarea style="width: 600px; height: 50px;" readonly="true"  name="output"></textarea></form>'

];


// Note that the following code (that is not part of the definition of the
// 'activity' variable) needs to be surrounded with the commented tags
// '// <gcb-no-verify>' and '// </gcb-no-verify>', so that the verifier script
// in tools/verify.py does not treat the code as invalid. For more details,
// please see https://code.google.com/p/course-builder/wiki/VerifyCode


//<gcb-no-verify>

// Custom checker code for a multiple checkbox activity. Note that you can write any custom activity
// in HTML and JavaScript.

function check15() {
  // see if the correct checkboxes are checked
  var numCorrect = checkQuestionCheckBox1(document.activity.q15);
  if (numCorrect == 3) {   // highlight correct answer
    highlightCorrectButton('correct1');
    highlightCorrectButton('correct2');
    highlightCorrectButton('correct3');
  }

  // provide feedback based on how many checkboxes were correctly checked:
  if (numCorrect >= 3) {
    document.activity.output.value = 'Good job! You have found the searches that differ. They are marked above.';
    numClicked = checkQuestionCheckClicked(document.activity.q15);
    if (numClicked > 3) {
      document.activity.output.value += ' But you have clicked some that are incorrect. Please be sure you understand why the searches (not in blue), are the same.';
    }
  }
  else {
    document.activity.output.value = 'You have not found all the searches that differ. Please try again.\n';
  }
}

function clearTextarea1() {
	document.activity.output.value=" ";
}

function checkQuestionCheckClicked(CheckBoxGroup) {
  var numClicked = 0;
  for (var i=0; i<CheckBoxGroup.length; i++) {
    if (CheckBoxGroup[i].checked) {
      numClicked++;
    }
  }
  return numClicked;
}

// validate checkbox answers
function checkQuestionCheckBox1(CheckBoxGroup) {
  var numCorrect = 0
  for (var i=0; i<CheckBoxGroup.length; i++) {
   if (CheckBoxGroup[i].checked) {
     if (CheckBoxGroup[i].value == "correct") {
       numCorrect++;
     }
   }
  }
  return numCorrect;
}


// show correct answer in highlighted color for Radio/Checkbox
function highlightCorrectButton(radioButton) {
  document.getElementById(radioButton).style.backgroundColor = highlightColor;
}

// </gcb-no-verify>

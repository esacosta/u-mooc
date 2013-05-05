var activity = [

  '<table class="table"><tr><td><b>Search Tips:</b><p><ul><li>Find facts quickly with shortcuts (search features).<li>Google search features include weather, time, flight numbers, earthquakes, world capitals, sunrise/sunset times, movies, stock quotes, sports scores, package tracking numbers, medical conditions, and medications. Check out the <a href="http://www.google.com/help/features.html" target="blank">full list of search features</a>.</ul></tr></td></table>',

  'Your boss is on her way to Bangalore, flying via London on American Flight 98. She broke her shoe as she was boarding and called you to arrange for new replacement shoes as soon as she lands at Heathrow airport. She heard it is monsoon season in India, so she also wants you to check the weather there.<p>',
 
  // custom question types must be written all in one string (can be multi-line, though) ...

  // in this custom question type, the user writes a reply and then clicks on the output textarea to see feedback:
  '<form name="quiz"><p><b>1.</b> What is the weather in Bangalore right now: clear, raining, cloudy? <input type="text" class="alphanumericOnly" style="border:1px solid black;" id="txtbox1" onBlur="check42(1, \'A search like [weather bangalore] or [bangalore weather] finds the weather forecast for today and the coming several days.\')"></p><p><font color="gray">Click here to see feedback</font><br><textarea style="width: 600px; height: 30px;" readonly="true"  name="output1"></textarea><p><b>2.</b> What time is American Flight 98 scheduled to arrive in London today? <input type="text" class="alphanumericOnly" style="border:1px solid black;" id="txtbox2" onBlur="check42(2, \'A search like [American 98] gives you up-to-date information about arrival and departure times for that flight.\')"></p><p><font color="gray">Click here to see feedback</font><br><textarea style="width: 600px; height: 30px;" readonly="true"  name="output2"></textarea></p><p><b>3.</b> What time is it now in London? <input type="text" style="border:1px solid black;" class="alphanumericOnly" id="txtbox3" onBlur="check42(3, \'A search like [time london] or [london time] tells you what time it is right now in London.\')"></p><p><font color="gray">Click here to see feedback</font><br><textarea style="width: 600px; height: 30px;" readonly="true"  name="output3"></textarea></p></form>',
 
  '<p><b>4.</b> Also, your boss forgot her bottle of dimenhydrinate pills but she found a bottle of Dramamine for sale in the airport. She wants to know if she can take the Dramamine instead. Are the two medicines equivalent?</p>',

  { questionType: 'multiple choice',
    choices: [['Yes', true, 'Correct! By searching for [dimenhydrinate] and/or [dramamine] you can confirm that the two medicines are equivalent.'],
              ['No', false, 'Incorrect. By searching for [dimenhydrinate] and/or [dramamine] you can confirm that the two medicines are equivalent.']] }

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

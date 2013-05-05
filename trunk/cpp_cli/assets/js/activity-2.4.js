var activity = [

  '<table class="table"><tr><td><b>Search Tips:</b><p><ul><li>Hovering over the page preview tool (>> icon to the right of search results) allows you to preview results pages.</li><li>There are three main parts of a search engine result: the page title (in blue), the web address (in green), and the snippet/abstract (in black). The snippet contains the text from the page that appears around the terms you search for.</li><li>Links within the search engine results go directly to subpages of the site.</li><li>Use the site: operator to restrict results to a domain, website, or directory.</li></ul></tr></td></table>',

  // Note: the entire question should be encapsulated into one string.

  // This is a custom activity type where the user clicks on an image map, and feedback is displayed in a textarea:
  '<form name="quiz"><b>1.</b> Click on the following in the result block below: <ol style="list-style-type:lower-alpha"><li>web address</li><li>web page title</li><li>snippet</li></ol><img src="assets/img/Image2.3.1.png" width="785" height="131" usemap="#Image2.3" border="0"><map name="Image2.3">\n<area shape="rect" coords="15,14,733,41" onClick="check24(1)" ><area shape="rect" coords="15,44,716,64" onClick="check24(2)"><area shape="rect" coords="14,67,776,112" onClick="check24(3)" ><\/map><p><p><textarea style="width: 600px; height: 30px;" readonly="true" name="output"></textarea></form>',

  '<p><b>2.</b> Do you think the page associated with the result above would contain the sentence "Quality standards for pharmaceuticals have historically been an area of focus for USP"?</p>',

  { questionType: 'multiple choice',
    choices: [['Yes', false, 'Incorrect. Note that the ellipsis (...) indicate that you are seeing phrases from two different parts of the webpage. The information in between may change the meaning of what you see in the snippet.'],
              ['No', true, 'Correct! Note that the ellipsis (...) indicate that you are seeing phrases from two different parts of the webpage. The information in between may change the meaning of what you see in the snippet.']] },

];


// Note that the following code (that is not part of the definition of the
// 'activity' variable) needs to be surrounded with the commented tags
// '// <gcb-no-verify>' and '// </gcb-no-verify>', so that the verifier script
// in tools/verify.py does not treat the code as invalid. For more details,
// please see https://code.google.com/p/course-builder/wiki/VerifyCode


//<gcb-no-verify>

// JavaScript code to check which area of the image the user clicked on
// and display the appropriate message in the output textarea:
function check24(incoming) {
  if (incoming == 1) {
    document.quiz.output.value = 'You have clicked on the web page title, which is always the first line of text in a result.';
  } else if (incoming == 2) {
    document.quiz.output.value = 'You have clicked on the web address, which is always the green text in a result block.';
  } else {
    document.quiz.output.value = 'You have found the snippet, which is the black text that shows where your search terms appear on the page.';
  }
}

//</gcb-no-verify>

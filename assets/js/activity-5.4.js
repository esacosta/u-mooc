var activity = [

  '<table border="2"><tr><td><b>Search Tips:</b><p><ul><li>Use a query containing WHOIS to identify the owner of a particular website.<li> If you see a second company listed as a contact on the WHOIS page, then a relationship exists between the two companies. You can then do another search to determine that relationship.<li>Example: [whois] finds WHOIS registries you can use. Find the search box for the registry, and enter [zagat.com]. See that Google is the registrant. Search for [google zagat], which leads to the information that Google acquired Zagat.<li>The US Chamber of Commerce operates the WHOIS search available at http://www.internic.net/whois.html; alternative WHOIS registries also exist.<li> If you don’t know a company\'s website, you can search for the company’s name in Google and locate the web address.</tr></td></table>',

  '<p>WHOIS lookups are not something we anticipate you’ll use often, but they can be helpful.<p>Different WHOIS directories post different information, and they can be challenging to read, so use this question to practice.<p>Open a new window and use the Web to answer this question. For this exercise, go to <a href="http://www.internic.net/whois.html" target="_blank">http://www.internic.net/whois.html</a> or a different directory of your choice.</p>',

  '<p><b>1.</b> What do you see listed as the name server (sometimes called the domain server) for Splenda.com?</p>',

  { questionType: 'multiple choice',
    choices: [['bnb.com', false, 'Try again. You are looking for the name server or the domain server for splenda.com.'],
              ['jnj.com', true, 'Correct! jnj.com is listed as the name server for splenda.com, which means that jnj.com owns splenda.com.'],
              ['whois.networksolutions.com', false, 'Try again. You found the domain registry for Splenda.com, but you are looking for the name server.'],
              ['splenda.com', false, 'Try again. You are looking for the name server or the domain server for splenda.com.']]},

  // in this custom question type, the user writes a reply and then clicks on the output textarea to see feedback:
  '<p><b>2.</b>  Based on the information you found in question one, what company owns Splenda?<br><input type="text" class="alphanumericOnly" style="border:1px solid black;" id="txtbox1" onBlur="show54_2()"></p><p><font color="gray">Click here to see feedback</font><br><textarea style="width: 600px; height: 15px;" readonly="true"  id="output2"></textarea></p>',

];


// Note that the following code (that is not part of the definition of the
// 'activity' variable) needs to be surrounded with the commented tags
// '// <gcb-no-verify>' and '// </gcb-no-verify>', so that the verifier script
// in tools/verify.py does not treat the code as invalid. For more details,
// please see https://code.google.com/p/course-builder/wiki/VerifyCode


//<gcb-no-verify>

// JavaScript support code for displaying text into the proper output textarea (uses jQuery)
function show54_2() {
  $('#output2').val('If you do a search on jnj.com, you will find that jnj.com is Johnson & Johnson.');
}

//</gcb-no-verify>

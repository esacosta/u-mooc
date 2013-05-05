

var activity = [

  '<table class="table"><tr><td><b>Search Tips:</b><p><ul><li>In the last video, you learned how to use color filtering within image search to narrow your image results to images made up primarily of a certain color. You do this by clicking on the appropriate colored box in the left panel. <li>Please note that you can’t filter by color on iPad or Android tablets, but you can answer the questions below as if you were using a laptop or desktop computer.</ul><p></tr></td></table><br>',

  '<img src="assets/img/Image1.1a.png" height=450 width=785><p/>',
  '<b>1.</b> You want to re-read an introductory accounting textbook from school, but you cannot remember the exact title. You recall that the cover is yellow and has puzzle pieces on it. In the image above, where would you click to filter the results in order to locate the book?',

  { questionType: 'multiple choice',
    choices: [['A', false, 'Please try again.'],
              ['B', false, 'Please try again.'],
              ['C', false, 'Please try again.'],
              ['D', true, 'Correct! Filtering by color would help you view all the books with yellow covers.']]},

  '<br><br><br><img src="assets/img/Image1.3.png" height=450 width=785><p/>',
  '<br><b>2.</b> You want statistics on college loans. If you search using [college loans statistics], you get the image results above. What color would you click to see just the charts and graphs? ',

  { questionType: 'freetext',
    correctAnswerRegex: /white?/i,
    correctAnswerOutput: 'Correct! Many charts, tables, and graphs have white backgrounds, so filtering for white images helps you find them faster.',
    incorrectAnswerOutput: 'Try again. Consider what color would be dominant in images of charts, tables, and graphs. Look at the results above. Each of those sources is traditionally printed on paper.',
    showAnswerOutput: 'Our search expert says: I would click on white in the color grid, since many charts, tables, and graphs have white backgrounds.' },

  '<br><br><br><b>3.</b> What is something you have wanted to find that color filtering might have helped you locate faster? Try it out and share your story in the <a href="LINK_TO_COURSE_FORUM" target="_blank">forum</a>.',

];


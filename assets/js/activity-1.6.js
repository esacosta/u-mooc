var activity = [

  '<table border="1"><tr><td><b>Search Tips:</b><p>In the last video, you learned how to quickly find text on a page:</p><ul><li>Windows computers: press the control and F keys at the same time. <p><li>Apple computers: press the command and F keys at the same time. <p><li>Android tablets: in a browser window, touch the menu button in the top right of the screen, then select "find on page". <p><li>Safari on iPad tablets: click the cursor in the search box in the upper right corner of the screen. Directly above the keyboard, a "find on page" box will open. </tr></td></table><p>For the following questions, go to the <a href="http://earthquake.usgs.gov/earthquakes/world/historical.php/" target="_blank"> US Geological Survey’s list of Historic World Earthquakes</a>.</p>',

  { questionType: 'multiple choice group',
    questionsList: [ {questionHTML: '<b>1.</b> In the United States, the state of California is known for its earthquakes. Have there been earthquakes in Iowa?',
                      choices: ['Yes', 'No'],
                      correctIndex: 0},

                     {questionHTML: '<b>2.</b> Has there ever been an earthquake in Maine?',
                      choices: ['Yes', 'No'],
                      correctIndex: 0},

                     {questionHTML: '<b>3.</b> Which state (Iowa or Maine) had an earthquake more recently?',
                      choices: ['Iowa', 'Maine'],
                      correctIndex: 1}
                   ],
    allCorrectOutput: 'Hopefully you used Control-F to find the information quickly.',
    someIncorrectOutput: 'Remember, you can use Control-F to find information like this more quickly. Please try again.'},

  '<p><b>4.</b> When was the last historic earthquake in your area? Share your answer in the <a href="LINK_TO_COURSE_FORUM" target="_blank">forum</a>.</p>',

];

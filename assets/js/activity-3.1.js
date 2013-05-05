var activity = [

  '<table class="table"><tr><td> <b>Search Tips:</b><p> <ul><li>Specific words, when used before a colon, act as commands to filter results. The coming lessons will teach you the most popular operators.<li>You can use the site: operator within images and news results.<li>You can use the site: operator with or without the period before the top-level domain extension, so [site:edu] is the same as [site:.edu].<li>When using the site: operator at the website level, you must use the period between the parts of the web address: [site:ucla.edu].<li>You can use operators at any point in a query. [Jefferson site:archives.gov] is the same as [site:archives.gov jefferson].</ul> </tr></td></table>',

  '<p><b>1.</b> You want to find documents on US government websites about gamers, people who play video games. What query do you use?</p>',

  { questionType: 'multiple choice',
    choices: [['[gamers site: .gov]', false, 'Please try again. Remember that Google understands the operator site: only when there is no space between the colon and the site name, such as site:imdb.com.'],
              ['[gamers gov:site]', false, 'Please try again. Remember that Google understands the operator site: when it is followed by site you want, such as site:whitehouse.gov.'],
              ['[gamers site.gov]', false, 'Please try again. Remember that Google understands the operator site: when you include the colon. Otherwise, it just looks like a regular search term.'],
              ['[gamers site:.gov]', true, 'Correct! When you search for site:.gov, without any spaces, you will find pages of your specified type very quickly and easily.']]},

  '<p><b>2.</b> You are having a bad day at work, and think you might give it all up and follow your childhood dream to become an animal trainer. Feeling serious for a moment, you decide to check the Bureau of Labor Statistics (bls.gov) to see the wages for animal trainers. What would your search look like?</p>',

  { questionType: 'freetext',
    correctAnswerRegex: /site:bls.gov?/i,
    correctAnswerOutput: 'Correct! You can use site: to search just within the contents of one website. The query should include site:bls.gov.',
    incorrectAnswerOutput: 'Please try again. What operator would you use to search for pages just within the BLS.gov website?',
    showAnswerOutput: 'Our search expert says: I would use [site:bls.gov wages animal trainers]. The site: operator lets me look for occurrences of wages and animal and trainers just within the Bureau of Labor Statistics website.' },

  '<p><b>3.</b> Can you think of a time that site: would have helped you find what you needed faster? Try it out before proceeding to the next lesson and share your story in the <a href="LINK_TO_COURSE_FORUM" target="_blank">forum</a>.</p>',
];

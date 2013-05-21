var assessment = {
  // HTML to display at the start of the page
  preamble: 'Antes de comenzar con el curso sería conveniente que respondiese a algunas cuestiones técnicas para saber si está familiarizado con los MOOC.<br>Estas preguntas no serán evaluadas, son sólamente para su información y puede utilizar todos los recursos que se encuentren a su alcance para responderlas y familiarizarse así con los MOOC.<br><p>Muchas gracias, y !buena suerte!<br><br>',

 
  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: '¿Qué es MOOC?',
     choices: [correct("Massive Online Open Course"), "Massive Open Online Course", "Curso Abierto Multiusuario En línea", "Multimedia Open Online Course", "No lo se"]
    },

    {questionHTML: '¿Fué OpenCourseware el primer intento de colaboración y contrucción de contenidos online por parte de las universidades?',
     choices: [correct("Si"), "No", "No lo se"]
    },

    {questionHTML: '¿Quén es el fundador de Khan Academy?<p><img src="http://www.seti.cl/img/khan-academy.png" alt="Khan Academy" height=100 width=100 title="Khan Academy">',
     correctAnswerString: 'SALMAN KHAN'
    },

    {questionHTML: '¿Cual de estas respuestas no es un inconveniente de los MOOC?',
     choices: ["Problema de evaluación con precesión y de forma normativa.", "Dificultad de certificar, credibilidad del conocimiento y de las habilidades adquiridas.", 
     correct("Posibilidad de atraer un masivo número de estudiantes."), "Mayor dependencia con la motivación de los participantes para el éxito de los cursos.", "Futuro incierto de los MOOC, nadie sabe lo que pasará en el próximo año."]
    },

    {questionHTML: '¿Cual de estas respuestas no es una ventaja de los MOOC?',
     choices: ["Acceso a un material de calidad a coste cero o reducido.", "Permite que todos los participantes colaboren y aprendan unos de otros.", 
     "Mejora el conocimiento, tanto de los expertos como lo noveles.", correct("Dificultad de certificar, credibilidad del conocimiento y de las habilidades adquiridas."), "Posibilidad de atraer un masivo número de estudiantes.", 
     "Herramienta potente de marketing para la marca de la institución."]
    },
  ],

  assessmentName: 'Pre', // unique name submitted along with all of the answers
  checkAnswers: true          // render a "Check your Answers" button to allow students to check answers prior to submitting?
}


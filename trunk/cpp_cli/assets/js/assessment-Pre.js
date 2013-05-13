var assessment = {
  // HTML to display at the start of the page
  preamble: 'Antes de comenzar con el curso sería conveniente que respondiese a algunas cuestiones técnicas para saber si está familiarizado con los MOOC.<br>Estas preguntas no serán evaluadas, son sólamente para su información y puede utilizar todos los recursos que se encuentren a su alcance para responderlas y familiarizarse así con los MOOC.<br><p>Muchas gracias, y !buena suerte!<br><br>',

 
  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: '¿Quién creó C++/CLI?',
     choices: [correct("Microsoft"), "Oracle", "ECMA-372", "Un grupo de programadores independiente", "No lo se"]
    },

    {questionHTML: '¿Un compilador de C++ puede compilar esta expresión (String ^stringVar;)?',
     choices: [correct("No"), "Si", "No lo se"]
    },

    {questionHTML: 'Aproximádamente, ¿En qué año se estandarizó C++/CLI?',
     correctAnswerString: '2005'
    },

    {questionHTML: '¿Cual de estas respuestas es incorrecta?',
     choices: ["Con C++/CLI puede realizar programas para .NET.", "C++/CLI fué creado por Microsoft.", 
     correct("C++/CLI sirve solamente para aplicaciones en la red, tipo WebService, etc."), "C++ nació poco antes que C++/CLI."]
    },

    {questionHTML: '¿Cual de estas respuestas es correcta?',
     choices: ["C++/CLI nace de la mano de una alianza entre Microsoft y Linux.", "C++/CLI está muy extendido para usarse en AppEngine.", 
     "No hay nada mejor que C++/CLI.", correct("C++/CLI puede gestionar de forma diferente las referencias y punteros que C++."), "No existe diferencia entre C++ y C++/CLI.", 
     "CLI son las siglas de Componente Libre de Interacción."]
    },
  ],

  assessmentName: 'Pre', // unique name submitted along with all of the answers
  checkAnswers: true          // render a "Check your Answers" button to allow students to check answers prior to submitting?
}


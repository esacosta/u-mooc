var assessment = {
  // HTML to display at the start of the page
  preamble: 'Antes de comenzar con el curso sería conveniente que respondiese a algunas cuestiones técnicas para saber si está familiarizado con C++.<br>Estas preguntas no serán evaluadas, son sólamente para su información y puede utilizar todos los recursos que se encuentren a su alcance para responderlas y familiarizarse así con el lenguaje C++.<br><p>Muchas gracias, y !buena suerte!<br><br>',

 
  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: '¿Qué es C++?',
     choices: [correct("C++ es un lenguaje de programación diseñado a mediados de los años 1980 por Bjarne Stroustrup"), "C++ es un lenguaje de programación diseñado a mediados de los años 1974 por Bjarne Stroustrup", "Es un lenguaje derivado de Java", "Es un lenguaje posterior a C#", "No lo se"]
    },

    {questionHTML: '¿Es correcta esta instrucción <i>void t;</i>?',
     choices: [correct("No"), "Si", "No lo se"]
    },

    {questionHTML: '¿Cual es la palabra para definir un nuevo objeto en C++?',
     correctAnswerRegex: /new/i
    },

    {questionHTML: '¿Qué es la herencia múltiple?',
     choices: ["Tener muchos hijos.", 
     correct("El mecanismo que permite al programador hacer clases derivadas a partir, no de una sola clase base, sino de varias."), "El mecanismo que permite al diseñador hacer clases derivadas a partir, no de una sola clase base, sino de varias.", "Una propiedad necesaria de cualquier clase en C++."]
    },

    {questionHTML: '¿Cuando se publicó la versión que añadió el wchar_t?',
     choices: ["1982", 
     "1977", correct("1980"), "1992"]
    },
  ],

  assessmentName: 'precourse', // unique name submitted along with all of the answers
  checkAnswers: true          // render a "Check your Answers" button to allow students to check answers prior to submitting?
}


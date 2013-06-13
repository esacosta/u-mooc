var assessment = {
  // HTML to display at the start of the page
  preamble: '<b>Este es el primer exámen que debe pasar para ver si le ha sido de utilidad el curso<br>¡Mucha suerte!<br></b><p>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [

    {questionHTML: '¿Puede utilizar una clase completamente nativa de C++ en CLI?',
     choices: [correct('Si'),
               'No'],
     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '4.2'},
	 
	{questionHTML: '¿A que reemplaza T::typeid?',
    correctAnswerString: '/typeof/i',
     lesson: '4.8'},
	 
	{questionHTML: '¿Cual es la palabra clave para especificar una clase como sellada?',
     correctAnswerString: '/__sealed/i',
     lesson: '4.8'},
	 
    {questionHTML: '¿Qué DLL utilizamos para nuestro ejemplo sencillo en este curso?',
     correctAnswerRegex: /mscorlib.dll?/i,
     lesson: '1.1'},

    {questionHTML: '¿Es correcto utilizar palabras clave con el dobre dubrayado en el nuevo CLR?<br/>',
      choices: [correct('No'),
               'Si, a veces',
               'No, pero aun queda alguna',
               'Si'],
     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '2.1'},

    {questionHTML: '¿Cual es la palabra clave para crear un nuevo montón administrado?<br/>',
     correctAnswerRegex: /gcnew?/i,
     lesson: '1.1'},

    {questionHTML: '¿Esta expresión es correcta en la nueva sintaxis? <i>Object *o = __box( 1024 );</i><br/>',
     choices: ['No, sobra el punto y coma.',
               'Si',
               'Puede servir',
               correct('No, ha desaparecido')],
     lesson: '2.2'},
	 
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

    {questionHTML: 'Tipos de valor son un medio para permitir al usuario crear nuevos tipos más allá de los tipos primitivos; todos los tipos de valor se derivan de<br/>',
     choices: ['System.',
               'ValueType.',
               correct('System::ValueType')],
     lesson: '3.1'},

     {questionHTML: '¿Cual es la palabra para especificar una clase como abstracta?',
      correctAnswerRegex: /abstract ?/i,
     lesson: '3.1'},

     {questionHTML: '<i>void Dispose()</i>¿Qué es esto?<br>',
     choices: ['Un método para despachar interfaces.',
               'Una función normal.',
               correct('La nueva función del destructor de una clase.')],
     lesson: '3.3'},

     {questionHTML: '¿Cual es la palabra clave para sellar una función virtual?',
     correctAnswerRegex: /sealed?/i,
     lesson: '3.2'},
  ],

  assessmentName: 'postcourse', // unique name submitted along with all of the answers
  checkAnswers: false           // render a "Check your Answers" button to allow students to check answers prior to submitting?
}


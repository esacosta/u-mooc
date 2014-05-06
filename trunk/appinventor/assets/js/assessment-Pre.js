var assessment = {
  preamble: 'Antes de comenzar con el curso sería conveniente que respondiese a algunas cuestiones técnicas para saber si está familiarizado con AppInventor.<br>Estas preguntas no serán evaluadas, son sólamente para su información y puede utilizar todos los recursos que se encuentren a su alcance para responderlas y familiarizarse así con esta nueva forma visual de programar.<br><p>Muchas gracias, y !buena suerte!<br><br>',

 questionsList: [
    {questionHTML: '¿Qué es AppInventor?',
     choices: [correct("Es una aplicación de Google Labs para crear aplicaciones de software para el sistema operativo Android"), "Es un lenguaje de programación orientado a objetos", "Es una forma visual de programación basada en ADA", "Es un programa para hacer juegos online", "Ninguna de las anteriores"]
    },

    {questionHTML: '¿Puede AppInventor acceder a las características del GPS de tu dispositivo?',
     choices: [correct("Si"), "No", "No lo se"]
    },

    {questionHTML: '¿Quén fué el fundador de AppInvnetor?',
     correctAnswerString: /Google Labs'?/i
    },

    {questionHTML: '¿Cual de estas frases no es correcta en AppInventor?',
     choices: ["La aplicación se puso a disposición del público el 12 de julio de 2010.", "El compilador que traduce el lenguaje visual de los bloques para la aplicación en Android utiliza Kawa como lenguaje de programación.", 
     correct("El editor de bloques de la aplicación utiliza la librería OpenGl para crear un lenguaje visual a partir de bloques."), "Puede realizar aplicaciones que utilizan las funciones del teléfono de un teléfono Android.", "App Inventor ofrece un componente para que usted se comunique con la web."]
    },

    {questionHTML: '¿El entorno de desarrollo App Inventor es compatible con Mac OS X, GNU/Linux y sistemas operativos de Windows?',
     choices: [correct("Si"), "No", "No lo se"]
    },
  ],

  assessmentName: 'Pre', 
  checkAnswers: true
}


var activity = [

  '<table class="table"><tr><td><b>Objetivos:</b><p><ul><li>Aprender como incluir un foro<li>Que herramientas están disponibles para los foros</ul></tr></td></table>',

  '<p><b>1.</b>¿Que herramienta puede utilizar para crear un foro en el curso?</p>',

  { questionType: 'multiple choice',
    choices: [['Google Gmail', false, 'Pruebe otra vez'],
              ['Google Groups', true, 'Correcto.'],
              ['Foro activo', false, 'Pruebe otra vez.'],
              ['Ninguno de los anteriores', false, 'Pruebe otra vez. Revise bien los primero parrafos del texto.']]},

  '<p><b>2.</b> Este es un ejemplo de ayuda a la suscripción.<br/><i><p> Gracias por registrarse. </ p> Para participar en las discusiones de la comunidad sobre este curso...</i></p><br/> ¿Donde debe ir este texto?</p>',

  { questionType: 'multiple choice',
    choices: [['views / confirmacion.html', false, 'Pruebe otra vez. Dese cuenta que los archivos están en ingles.'],
              ['views / registration.html', false, 'Pruebe otra vez.'],
              ['views / forum.html', false, 'Pruebe otra vez.'],
              ['Ninguna de las anteriores', true, 'Correcto. Dese cuenta que los archivos están en ingles.']]},

  '<p><b>3.</b> ¿Cual es la palabra que se utiliza cuando debemos arreglar algo en un texto, o queremos personalizar el foro?</p>',

  { questionType: 'freetext',
    correctAnswerRegex: /FIXME?/i,
    correctAnswerOutput: 'Correcto.',
    incorrectAnswerOutput: 'Pruebe otra vez.',
    showAnswerOutput: 'La hemos utilizado en otras ocaciones del curso, está en inglés e indica que algo debemos cambiar para personalizar nuestro curso.' },

];


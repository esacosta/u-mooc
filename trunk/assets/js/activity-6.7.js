var activity = [

  '<table class="table"><tr><td><b>Objetivos:</b><p><ul><li>Ser capaces de obtener los datos de un curso.<li>Aprender a optimizar las descargas de datos, para recoger aquellos que realmente vamos a utilizar.</ul></tr></td></table>',

  '<p><b>1.</b> ¿Cuál es la extensión de exportación de los archivos de datos?</p>',


  { questionType: 'freetext',
    correctAnswerRegex: /csv/i,
    correctAnswerOutput: 'Correcto',
    incorrectAnswerOutput: 'Pruebe otra vez.',
    showAnswerOutput: 'Recuerde que la respuesta puede estar en cualquiera de las lecciones de esta unidad.' },

	'<p><b>2.</b> ¿Cuál es el archivo donde podemos especificar que campos exportar, <i>Por ejemplo para obtener todos los email de los estudiantes</i>?</p>',

  { questionType: 'freetext',
    correctAnswerRegex: /bulkloader.yaml/i,
    correctAnswerOutput: 'Correcto',
    incorrectAnswerOutput: 'Pruebe otra vez.',
    showAnswerOutput: 'Recuerde que la respuesta puede estar en cualquiera de las lecciones de esta unidad.' },
	
	'<p><b>3.</b> ¿Es posible que Google nos cobre por los datos descargados?</p>',

  { questionType: 'multiple choice',
    choices: [['Si, siempre que usemos su aplicación', false, 'Inténtelo de nuevo'],
              ['No, sólo si descargamos gran cantidad de datos.', true, 'Correcto'],
              ['Si, usando la aplicación <i>appcfg.py</i>', false, 'Inténtelo de nuevo']]},

];
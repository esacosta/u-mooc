var activity = [

  '<table class="table"><tr><td><b>Objetivos:</b><p><ul><li>Aprenda a crear actividades para el curso<li>Aprenda a utilizar las expresiones regulares de javascript<li>Cree distintos tipos de test</ul></tr></td></table>',

  '<p><b>1.</b>activity-NM.js, donde N es el número de actividad y M es el número de la lección ¿es correcto?</p>',

  { questionType: 'multiple choice',
    choices: [['Si', false, 'Incorrecto, N es el número de unidad, no de actividad'],
              ['No', true, 'Correcto.']] }

];


// Note that the following code (that is not part of the definition of the
// 'activity' variable) needs to be surrounded with the commented tags
// '// <gcb-no-verify>' and '// </gcb-no-verify>', so that the verifier script
// in tools/verify.py does not treat the code as invalid. For more details,
// please see https://code.google.com/p/course-builder/wiki/VerifyCode


//<gcb-no-verify>

// JavaScript support code for displaying text into the proper output textarea:
function check42(id, intext) {
  switch (id) {
    case 1:
    document.quiz.output1.value = intext;
    break;

    case 2:
    document.quiz.output2.value = intext;
    break;

    case 3:
    document.quiz.output3.value = intext;
    break;
  }
}

//</gcb-no-verify>

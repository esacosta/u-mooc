var activity = [

  '<table class="table"><tr><td> <b>Objetivos:</b><p> <ul><li>No trate de crear inmediatamente un producto final bien acabado.<li>Separe el material básico del avanzado.<li>TLos estudiantes en línea no dan el feedback que estamos acostumbrados en una clase tradicional.</tr></td></table>',

 'Respoda a estas preguntas cortas con verdadero o falso<p>',

  { questionType: 'multiple choice group',
    questionsList: [{questionHTML: 'Es bueno presentar en primera instancia un producto final casi perfecto.',
                     choices: ['Verdadero', 'Falso'], correctIndex: 1},
                    {questionHTML: 'Todo el material debe estar junto, no debemos tener difencias en cuanto a la dificultad del material',
                     choices: ['Verdadero', 'Falso'], correctIndex: 1},
                    {questionHTML: 'La retroalimentación de los estudiantes es la misma en la educación online que en la tradicional.',
                     choices: ['Verdadero', 'Falso'], correctIndex: 1},
                    {questionHTML: 'Hay un alborotador por cada 15 alumnos.',
                     choices: ['Verdadero', 'Falso'], correctIndex: 1},
                    {questionHTML: 'Hay un alborotador por cada 30 alumnos aproximadamente',
                     choices: ['Verdadero', 'Falso'], correctIndex: 0}],
    allCorrectOutput: 'Continuemos.',
    someIncorrectOutput: 'Inténtelo otra vez.'},

];

//</gcb-no-verify>
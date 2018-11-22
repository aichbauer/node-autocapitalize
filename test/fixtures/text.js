const text = {
  empty: '',
  oneWordWhiteSpace: 'hello ',
  oneWord: 'hello',
  helloWorld: 'hello, world!',
  helloWorldWhiteSpace: 'hello, world! ',
  sentenceLong: 'lorem ipsum dolor sit amet, facilis splendide te per, nusquam fuisset perpetua id nec. ei expetenda repudiare euripidis vel, utroque graecis officiis eu pro, laudem postulant deseruisse et has. eu laoreet incorrupte nec. postea invidunt scriptorem sit an, ex mei meis vidit dolore. ad quaestio delicatissimi vim, sea ad senserit adipiscing. ne paulo pericula rationibus vis, quo ad tale nemore graecis.',
  sentenceShort: 'lorem ipsum dolor sit amet, facilis splendide te per, nusquam fuisset perpetua id nec.',
  questionMark: 'lorem ipsum dolor sit amet, facilis splendide te per, nusquam fuisset perpetua id nec?',
  exclamationMark: 'lorem ipsum dolor sit amet, facilis splendide te per, nusquam fuisset perpetua id nec!',
  mixed: 'lorem ipsum dolor sit amet. facilis splendide te per? nusquam fuisset perpetua id nec!',
};

const resultOnAndSentences = {
  empty: '',
  oneWordWhiteSpace: 'Hello ',
  oneWord: 'Hello',
  helloWorld: 'Hello, world!',
  helloWorldWhiteSpace: 'Hello, world! ',
  sentenceLong: 'Lorem ipsum dolor sit amet, facilis splendide te per, nusquam fuisset perpetua id nec. Ei expetenda repudiare euripidis vel, utroque graecis officiis eu pro, laudem postulant deseruisse et has. Eu laoreet incorrupte nec. Postea invidunt scriptorem sit an, ex mei meis vidit dolore. Ad quaestio delicatissimi vim, sea ad senserit adipiscing. Ne paulo pericula rationibus vis, quo ad tale nemore graecis.',
  sentenceShort: 'Lorem ipsum dolor sit amet, facilis splendide te per, nusquam fuisset perpetua id nec.',
  questionMark: 'Lorem ipsum dolor sit amet, facilis splendide te per, nusquam fuisset perpetua id nec?',
  exclamationMark: 'Lorem ipsum dolor sit amet, facilis splendide te per, nusquam fuisset perpetua id nec!',
  mixed: 'Lorem ipsum dolor sit amet. Facilis splendide te per? Nusquam fuisset perpetua id nec!',
};

const result = {
  none: text,
  off: text,
  on: resultOnAndSentences,
  sentences: resultOnAndSentences,
  words: {
    empty: '',
    oneWordWhiteSpace: 'Hello ',
    oneWord: 'Hello',
    helloWorld: 'Hello, World!',
    helloWorldWhiteSpace: 'Hello, World! ',
    sentenceLong: 'Lorem Ipsum Dolor Sit Amet, Facilis Splendide Te Per, Nusquam Fuisset Perpetua Id Nec. Ei Expetenda Repudiare Euripidis Vel, Utroque Graecis Officiis Eu Pro, Laudem Postulant Deseruisse Et Has. Eu Laoreet Incorrupte Nec. Postea Invidunt Scriptorem Sit An, Ex Mei Meis Vidit Dolore. Ad Quaestio Delicatissimi Vim, Sea Ad Senserit Adipiscing. Ne Paulo Pericula Rationibus Vis, Quo Ad Tale Nemore Graecis.',
    sentenceShort: 'Lorem Ipsum Dolor Sit Amet, Facilis Splendide Te Per, Nusquam Fuisset Perpetua Id Nec.',
    questionMark: 'Lorem Ipsum Dolor Sit Amet, Facilis Splendide Te Per, Nusquam Fuisset Perpetua Id Nec?',
    exclamationMark: 'Lorem Ipsum Dolor Sit Amet, Facilis Splendide Te Per, Nusquam Fuisset Perpetua Id Nec!',
    mixed: 'Lorem Ipsum Dolor Sit Amet. Facilis Splendide Te Per? Nusquam Fuisset Perpetua Id Nec!',
  },
  characters: {
    empty: '',
    oneWordWhiteSpace: 'HELLO ',
    oneWord: 'HELLO',
    helloWorld: 'HELLO, WORLD!',
    helloWorldWhiteSpace: 'HELLO, WORLD! ',
    sentenceLong: 'LOREM IPSUM DOLOR SIT AMET, FACILIS SPLENDIDE TE PER, NUSQUAM FUISSET PERPETUA ID NEC. EI EXPETENDA REPUDIARE EURIPIDIS VEL, UTROQUE GRAECIS OFFICIIS EU PRO, LAUDEM POSTULANT DESERUISSE ET HAS. EU LAOREET INCORRUPTE NEC. POSTEA INVIDUNT SCRIPTOREM SIT AN, EX MEI MEIS VIDIT DOLORE. AD QUAESTIO DELICATISSIMI VIM, SEA AD SENSERIT ADIPISCING. NE PAULO PERICULA RATIONIBUS VIS, QUO AD TALE NEMORE GRAECIS.',
    sentenceShort: 'LOREM IPSUM DOLOR SIT AMET, FACILIS SPLENDIDE TE PER, NUSQUAM FUISSET PERPETUA ID NEC.',
    questionMark: 'LOREM IPSUM DOLOR SIT AMET, FACILIS SPLENDIDE TE PER, NUSQUAM FUISSET PERPETUA ID NEC?',
    exclamationMark: 'LOREM IPSUM DOLOR SIT AMET, FACILIS SPLENDIDE TE PER, NUSQUAM FUISSET PERPETUA ID NEC!',
    mixed: 'LOREM IPSUM DOLOR SIT AMET. FACILIS SPLENDIDE TE PER? NUSQUAM FUISSET PERPETUA ID NEC!',
  },
};

export {
  text,
  result,
};

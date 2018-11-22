import { autocapitalize as a } from '../src';

import { text, result } from './fixtures/text';

const { autocapitalize } = require('../src');

test('autocapitalize | epmty string | rule === "none"', () => {
  const capitalizedText = a(text.empty, 'none');

  expect(capitalizedText).toBe(result.none.empty);
});

test('autocapitalize | sentence long | rule === "none"', () => {
  const capitalizedText = autocapitalize(text.sentenceLong, 'none');

  expect(capitalizedText).toBe(result.none.sentenceLong);
});

test('autocapitalize | sentence short | rule === "none"', () => {
  const capitalizedText = autocapitalize(text.sentenceShort, 'none');

  expect(capitalizedText).toBe(result.none.sentenceShort);
});

test('autocapitalize | one word | rule === "none"', () => {
  const capitalizedText = autocapitalize(text.oneWord, 'none');

  expect(capitalizedText).toBe(result.none.oneWord);
});

test('autocapitalize | one word + white space | rule === "none"', () => {
  const capitalizedText = autocapitalize(text.oneWordWhiteSpace, 'none');

  expect(capitalizedText).toBe(result.none.oneWordWhiteSpace);
});

test('autocapitalize | hello world | rule === "none"', () => {
  const capitalizedText = autocapitalize(text.helloWorld, 'none');

  expect(capitalizedText).toBe(result.none.helloWorld);
});

test('autocapitalize | hello world + white space | rule === "none"', () => {
  const capitalizedText = autocapitalize(text.helloWorldWhiteSpace, 'none');

  expect(capitalizedText).toBe(result.none.helloWorldWhiteSpace);
});

test('autocapitalize | question mark | rule === "none"', () => {
  const capitalizedText = autocapitalize(text.questionMark, 'none');

  expect(capitalizedText).toBe(result.none.questionMark);
});

test('autocapitalize | exclamation mark | rule === "none"', () => {
  const capitalizedText = autocapitalize(text.exclamationMark, 'none');

  expect(capitalizedText).toBe(result.none.exclamationMark);
});

test('autocapitalize | mixed | rule === "none"', () => {
  const capitalizedText = autocapitalize(text.mixed, 'none');

  expect(capitalizedText).toBe(result.none.mixed);
});

test('autocapitalize | epmty string | rule === "off"', () => {
  const capitalizedText = autocapitalize(text.empty, 'off');

  expect(capitalizedText).toBe(result.off.empty);
});

test('autocapitalize | sentence long | rule === "off"', () => {
  const capitalizedText = autocapitalize(text.sentenceLong, 'off');

  expect(capitalizedText).toBe(result.off.sentenceLong);
});

test('autocapitalize | sentence short | rule === "off"', () => {
  const capitalizedText = autocapitalize(text.sentenceShort, 'off');

  expect(capitalizedText).toBe(result.off.sentenceShort);
});

test('autocapitalize | one word | rule === "off"', () => {
  const capitalizedText = autocapitalize(text.oneWord, 'off');

  expect(capitalizedText).toBe(result.off.oneWord);
});

test('autocapitalize | one word + white space | rule === "off"', () => {
  const capitalizedText = autocapitalize(text.oneWordWhiteSpace, 'off');

  expect(capitalizedText).toBe(result.off.oneWordWhiteSpace);
});

test('autocapitalize | hello world | rule === "off"', () => {
  const capitalizedText = autocapitalize(text.helloWorld, 'off');

  expect(capitalizedText).toBe(result.off.helloWorld);
});

test('autocapitalize | hello world + white space | rule === "off"', () => {
  const capitalizedText = autocapitalize(text.helloWorldWhiteSpace, 'off');

  expect(capitalizedText).toBe(result.off.helloWorldWhiteSpace);
});

test('autocapitalize | question mark | rule === "off"', () => {
  const capitalizedText = autocapitalize(text.questionMark, 'off');

  expect(capitalizedText).toBe(result.off.questionMark);
});

test('autocapitalize | exclamation mark | rule === "off"', () => {
  const capitalizedText = autocapitalize(text.exclamationMark, 'off');

  expect(capitalizedText).toBe(result.off.exclamationMark);
});

test('autocapitalize | mixed | rule === "off"', () => {
  const capitalizedText = autocapitalize(text.mixed, 'off');

  expect(capitalizedText).toBe(result.off.mixed);
});

test('autocapitalize | epmty string | rule === undefined', () => {
  const capitalizedText = autocapitalize(text.empty);

  expect(capitalizedText).toBe(result.off.empty);
});

test('autocapitalize | sentence long | rule === undefined', () => {
  const capitalizedText = autocapitalize(text.sentenceLong);

  expect(capitalizedText).toBe(result.off.sentenceLong);
});

test('autocapitalize | sentence short | rule === undefined', () => {
  const capitalizedText = autocapitalize(text.sentenceShort);

  expect(capitalizedText).toBe(result.off.sentenceShort);
});

test('autocapitalize | one word | rule === undefined', () => {
  const capitalizedText = autocapitalize(text.oneWord);

  expect(capitalizedText).toBe(result.off.oneWord);
});

test('autocapitalize | one word + white space | rule === undefined', () => {
  const capitalizedText = autocapitalize(text.oneWordWhiteSpace);

  expect(capitalizedText).toBe(result.off.oneWordWhiteSpace);
});

test('autocapitalize | hello world | rule === undefined', () => {
  const capitalizedText = autocapitalize(text.helloWorld);

  expect(capitalizedText).toBe(result.off.helloWorld);
});

test('autocapitalize | hello world + white space | rule === undefined', () => {
  const capitalizedText = autocapitalize(text.helloWorldWhiteSpace);

  expect(capitalizedText).toBe(result.off.helloWorldWhiteSpace);
});

test('autocapitalize | question mark | rule === undefined', () => {
  const capitalizedText = autocapitalize(text.questionMark);

  expect(capitalizedText).toBe(result.off.questionMark);
});

test('autocapitalize | exclamation mark | rule === undefined', () => {
  const capitalizedText = autocapitalize(text.exclamationMark);

  expect(capitalizedText).toBe(result.off.exclamationMark);
});

test('autocapitalize | mixed | rule === undefined', () => {
  const capitalizedText = autocapitalize(text.mixed);

  expect(capitalizedText).toBe(result.off.mixed);
});

test('autocapitalize | epmty string | rule === "on"', () => {
  const capitalizedText = autocapitalize(text.empty, 'on');

  expect(capitalizedText).toBe(result.on.empty);
});

test('autocapitalize | sentence long | rule === "on"', () => {
  const capitalizedText = autocapitalize(text.sentenceLong, 'on');

  expect(capitalizedText).toBe(result.on.sentenceLong);
});

test('autocapitalize | sentence short | rule === "on"', () => {
  const capitalizedText = autocapitalize(text.sentenceShort, 'on');

  expect(capitalizedText).toBe(result.on.sentenceShort);
});

test('autocapitalize | one word | rule === "on"', () => {
  const capitalizedText = autocapitalize(text.oneWord, 'on');

  expect(capitalizedText).toBe(result.on.oneWord);
});

test('autocapitalize | one word + white space | rule === "on', () => {
  const capitalizedText = autocapitalize(text.oneWordWhiteSpace, 'on');

  expect(capitalizedText).toBe(result.on.oneWordWhiteSpace);
});


test('autocapitalize | hello world | rule === "on"', () => {
  const capitalizedText = autocapitalize(text.helloWorld, 'on');

  expect(capitalizedText).toBe(result.on.helloWorld);
});

test('autocapitalize | hello world + white space | rule === "on"', () => {
  const capitalizedText = autocapitalize(text.helloWorldWhiteSpace, 'on');

  expect(capitalizedText).toBe(result.on.helloWorldWhiteSpace);
});

test('autocapitalize | question mark | rule === "on"', () => {
  const capitalizedText = autocapitalize(text.questionMark, 'on');

  expect(capitalizedText).toBe(result.on.questionMark);
});

test('autocapitalize | exclamation mark | rule === "on"', () => {
  const capitalizedText = autocapitalize(text.exclamationMark, 'on');

  expect(capitalizedText).toBe(result.on.exclamationMark);
});

test('autocapitalize | mixed | rule === "on"', () => {
  const capitalizedText = autocapitalize(text.mixed, 'on');

  expect(capitalizedText).toBe(result.on.mixed);
});

test('autocapitalize | epmty string | rule === "sentences"', () => {
  const capitalizedText = autocapitalize(text.empty, 'sentences');

  expect(capitalizedText).toBe(result.sentences.empty);
});

test('autocapitalize | sentence long | rule === "sentences"', () => {
  const capitalizedText = autocapitalize(text.sentenceLong, 'sentences');

  expect(capitalizedText).toBe(result.sentences.sentenceLong);
});

test('autocapitalize | sentence short | rule === "sentences"', () => {
  const capitalizedText = autocapitalize(text.sentenceShort, 'sentences');

  expect(capitalizedText).toBe(result.sentences.sentenceShort);
});

test('autocapitalize | one word | rule === "sentences"', () => {
  const capitalizedText = autocapitalize(text.oneWord, 'sentences');

  expect(capitalizedText).toBe(result.sentences.oneWord);
});

test('autocapitalize | one word + white space | rule === "sentences', () => {
  const capitalizedText = autocapitalize(text.oneWordWhiteSpace, 'sentences');

  expect(capitalizedText).toBe(result.sentences.oneWordWhiteSpace);
});

test('autocapitalize | hello world | rule === "sentences"', () => {
  const capitalizedText = autocapitalize(text.helloWorld, 'sentences');

  expect(capitalizedText).toBe(result.sentences.helloWorld);
});

test('autocapitalize | hello world + white space | rule === "sentences"', () => {
  const capitalizedText = autocapitalize(text.helloWorldWhiteSpace, 'sentences');

  expect(capitalizedText).toBe(result.sentences.helloWorldWhiteSpace);
});

test('autocapitalize | question mark | rule === "sentences"', () => {
  const capitalizedText = autocapitalize(text.questionMark, 'sentences');

  expect(capitalizedText).toBe(result.sentences.questionMark);
});

test('autocapitalize | exclamation mark | rule === "sentences"', () => {
  const capitalizedText = autocapitalize(text.exclamationMark, 'sentences');

  expect(capitalizedText).toBe(result.sentences.exclamationMark);
});

test('autocapitalize | mixed | rule === "sentences"', () => {
  const capitalizedText = autocapitalize(text.mixed, 'sentences');

  expect(capitalizedText).toBe(result.sentences.mixed);
});

test('autocapitalize | epmty string | rule === "words"', () => {
  const capitalizedText = autocapitalize(text.empty, 'words');

  expect(capitalizedText).toBe(result.words.empty);
});

test('autocapitalize | sentence long | rule === "words"', () => {
  const capitalizedText = autocapitalize(text.sentenceLong, 'words');

  expect(capitalizedText).toBe(result.words.sentenceLong);
});

test('autocapitalize | sentence short | rule === "words"', () => {
  const capitalizedText = autocapitalize(text.sentenceShort, 'words');

  expect(capitalizedText).toBe(result.words.sentenceShort);
});

test('autocapitalize | one word | rule === "words"', () => {
  const capitalizedText = autocapitalize(text.oneWord, 'words');

  expect(capitalizedText).toBe(result.words.oneWord);
});

test('autocapitalize | one word + white space | rule === "words', () => {
  const capitalizedText = autocapitalize(text.oneWordWhiteSpace, 'words');

  expect(capitalizedText).toBe(result.words.oneWordWhiteSpace);
});

test('autocapitalize | hello world | rule === "words"', () => {
  const capitalizedText = autocapitalize(text.helloWorld, 'words');

  expect(capitalizedText).toBe(result.words.helloWorld);
});

test('autocapitalize | hello world + white space | rule === "words"', () => {
  const capitalizedText = autocapitalize(text.helloWorldWhiteSpace, 'words');

  expect(capitalizedText).toBe(result.words.helloWorldWhiteSpace);
});

test('autocapitalize | question mark | rule === "words"', () => {
  const capitalizedText = autocapitalize(text.questionMark, 'words');

  expect(capitalizedText).toBe(result.words.questionMark);
});

test('autocapitalize | exclamation mark | rule === "words"', () => {
  const capitalizedText = autocapitalize(text.exclamationMark, 'words');

  expect(capitalizedText).toBe(result.words.exclamationMark);
});

test('autocapitalize | mixed | rule === "words"', () => {
  const capitalizedText = autocapitalize(text.mixed, 'words');

  expect(capitalizedText).toBe(result.words.mixed);
});

test('autocapitalize | epmty string | rule === "characters"', () => {
  const capitalizedText = autocapitalize(text.empty, 'characters');

  expect(capitalizedText).toBe(result.characters.empty);
});

test('autocapitalize | sentence long | rule === "characters"', () => {
  const capitalizedText = autocapitalize(text.sentenceLong, 'characters');

  expect(capitalizedText).toBe(result.characters.sentenceLong);
});

test('autocapitalize | sentence short | rule === "characters"', () => {
  const capitalizedText = autocapitalize(text.sentenceShort, 'characters');

  expect(capitalizedText).toBe(result.characters.sentenceShort);
});

test('autocapitalize | one word | rule === "characters"', () => {
  const capitalizedText = autocapitalize(text.oneWord, 'characters');

  expect(capitalizedText).toBe(result.characters.oneWord);
});

test('autocapitalize | one word + white space | rule === "characters', () => {
  const capitalizedText = autocapitalize(text.oneWordWhiteSpace, 'characters');

  expect(capitalizedText).toBe(result.characters.oneWordWhiteSpace);
});

test('autocapitalize | hello world | rule === "characters"', () => {
  const capitalizedText = autocapitalize(text.helloWorld, 'characters');

  expect(capitalizedText).toBe(result.characters.helloWorld);
});

test('autocapitalize | hello world + white space | rule === "characters"', () => {
  const capitalizedText = autocapitalize(text.helloWorldWhiteSpace, 'characters');

  expect(capitalizedText).toBe(result.characters.helloWorldWhiteSpace);
});

test('autocapitalize | question mark | rule === "characters"', () => {
  const capitalizedText = autocapitalize(text.questionMark, 'characters');

  expect(capitalizedText).toBe(result.characters.questionMark);
});

test('autocapitalize | exclamation mark | rule === "characters"', () => {
  const capitalizedText = autocapitalize(text.exclamationMark, 'characters');

  expect(capitalizedText).toBe(result.characters.exclamationMark);
});

test('autocapitalize | mixed | rule === "characters"', () => {
  const capitalizedText = autocapitalize(text.mixed, 'characters');

  expect(capitalizedText).toBe(result.characters.mixed);
});

test('autocapitalize | epmty string | rule === "characters"', () => {
  const capitalizedText = autocapitalize(text.empty, 'characters');

  expect(capitalizedText).toBe(result.characters.empty);
});

test('autocapitalize | sentence long | rule === "characters"', () => {
  const capitalizedText = autocapitalize(text.sentenceLong, 'characters');

  expect(capitalizedText).toBe(result.characters.sentenceLong);
});

test('autocapitalize | sentence short | rule === "characters"', () => {
  const capitalizedText = autocapitalize(text.sentenceShort, 'characters');

  expect(capitalizedText).toBe(result.characters.sentenceShort);
});

test('autocapitalize | question mark | rule === "characters"', () => {
  const capitalizedText = autocapitalize(text.questionMark, 'characters');

  expect(capitalizedText).toBe(result.characters.questionMark);
});

test('autocapitalize | exclamation mark | rule === "characters"', () => {
  const capitalizedText = autocapitalize(text.exclamationMark, 'characters');

  expect(capitalizedText).toBe(result.characters.exclamationMark);
});

test('autocapitalize | mixed | rule === "characters"', () => {
  const capitalizedText = autocapitalize(text.mixed, 'characters');

  expect(capitalizedText).toBe(result.characters.mixed);
});

test('autocapitalize | epmty string | rule === "someRuleThatDoesNotExist"', () => {
  const capitalizedText = autocapitalize(text.empty, 'someRuleThatDoesNotExist');

  expect(capitalizedText).toBe(result.none.empty);
});

test('autocapitalize | sentence long | rule === "someRuleThatDoesNotExist"', () => {
  const capitalizedText = autocapitalize(text.sentenceLong, 'someRuleThatDoesNotExist');

  expect(capitalizedText).toBe(result.none.sentenceLong);
});

test('autocapitalize | sentence short | rule === "someRuleThatDoesNotExist"', () => {
  const capitalizedText = autocapitalize(text.sentenceShort, 'someRuleThatDoesNotExist');

  expect(capitalizedText).toBe(result.none.sentenceShort);
});

test('autocapitalize | one word | rule === "someRuleThatDoesNotExist"', () => {
  const capitalizedText = autocapitalize(text.oneWord, 'someRuleThatDoesNotExist');

  expect(capitalizedText).toBe(result.none.oneWord);
});

test('autocapitalize | one word + white space | rule === "someRuleThatDoesNotExist', () => {
  const capitalizedText = autocapitalize(text.oneWordWhiteSpace, 'someRuleThatDoesNotExist');

  expect(capitalizedText).toBe(result.none.oneWordWhiteSpace);
});

test('autocapitalize | hello world | rule === "someRuleThatDoesNotExist"', () => {
  const capitalizedText = autocapitalize(text.helloWorld, 'someRuleThatDoesNotExist');

  expect(capitalizedText).toBe(result.none.helloWorld);
});

test('autocapitalize | hello world + white space | rule === "someRuleThatDoesNotExist"', () => {
  const capitalizedText = autocapitalize(text.helloWorldWhiteSpace, 'someRuleThatDoesNotExist');

  expect(capitalizedText).toBe(result.none.helloWorldWhiteSpace);
});

test('autocapitalize | question mark | rule === "someRuleThatDoesNotExist"', () => {
  const capitalizedText = autocapitalize(text.questionMark, 'someRuleThatDoesNotExist');

  expect(capitalizedText).toBe(result.none.questionMark);
});

test('autocapitalize | exclamation mark | rule === "someRuleThatDoesNotExist"', () => {
  const capitalizedText = autocapitalize(text.exclamationMark, 'someRuleThatDoesNotExist');

  expect(capitalizedText).toBe(result.none.exclamationMark);
});

test('autocapitalize | mixed | rule === "someRuleThatDoesNotExist"', () => {
  const capitalizedText = autocapitalize(text.mixed, 'someRuleThatDoesNotExist');

  expect(capitalizedText).toBe(result.none.mixed);
});

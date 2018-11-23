import { autocapitalize } from '../src';

import { text, result } from './fixtures/text';

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

test('autocapitalize | hyphenated compound word | rule === "characters"', () => {
  const capitalizedText = autocapitalize(text.hyphenatedCompoundWord, 'characters');

  expect(capitalizedText).toBe(result.characters.hyphenatedCompoundWord);
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

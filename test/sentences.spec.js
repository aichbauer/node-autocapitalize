import { autocapitalize } from '../src';

import { text, result } from './fixtures/text';

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

test('autocapitalize | hyphenated compound word | rule === "sentences"', () => {
  const capitalizedText = autocapitalize(text.hyphenatedCompoundWord, 'sentences');

  expect(capitalizedText).toBe(result.sentences.hyphenatedCompoundWord);
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

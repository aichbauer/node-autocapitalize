import { autocapitalize } from '../src';

import { text, result } from './fixtures/text';

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

test('autocapitalize | sentence fancy | rule === "words"', () => {
  const capitalizedText = autocapitalize(text.sentenceFancy, 'words');

  expect(capitalizedText).toBe(result.words.sentenceFancy);
});

test('autocapitalize | one word | rule === "words"', () => {
  const capitalizedText = autocapitalize(text.oneWord, 'words');

  expect(capitalizedText).toBe(result.words.oneWord);
});

test('autocapitalize | one word + white space | rule === "words', () => {
  const capitalizedText = autocapitalize(text.oneWordWhiteSpace, 'words');

  expect(capitalizedText).toBe(result.words.oneWordWhiteSpace);
});

test('autocapitalize | hyphenated compound word | rule === "words"', () => {
  const capitalizedText = autocapitalize(text.hyphenatedCompoundWord, 'words');

  expect(capitalizedText).toBe(result.words.hyphenatedCompoundWord);
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

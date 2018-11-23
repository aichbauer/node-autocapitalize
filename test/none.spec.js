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

test('autocapitalize | sentence fancy | rule === "none"', () => {
  const capitalizedText = autocapitalize(text.sentenceFancy, 'none');

  expect(capitalizedText).toBe(result.none.sentenceFancy);
});

test('autocapitalize | one word | rule === "none"', () => {
  const capitalizedText = autocapitalize(text.oneWord, 'none');

  expect(capitalizedText).toBe(result.none.oneWord);
});

test('autocapitalize | one word + white space | rule === "none"', () => {
  const capitalizedText = autocapitalize(text.oneWordWhiteSpace, 'none');

  expect(capitalizedText).toBe(result.none.oneWordWhiteSpace);
});

test('autocapitalize | hyphenated compound word | rule === "none"', () => {
  const capitalizedText = autocapitalize(text.hyphenatedCompoundWord, 'none');

  expect(capitalizedText).toBe(result.none.hyphenatedCompoundWord);
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

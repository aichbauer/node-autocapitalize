import { autocapitalize } from '../src';

import { text, result } from './fixtures/text';

test('autocapitalize | epmty string | rule === "nonExistingRule"', () => {
  const capitalizedText = autocapitalize(text.empty, 'nonExistingRule');

  expect(capitalizedText).toBe(result.none.empty);
});

test('autocapitalize | sentence long | rule === "nonExistingRule"', () => {
  const capitalizedText = autocapitalize(text.sentenceLong, 'nonExistingRule');

  expect(capitalizedText).toBe(result.none.sentenceLong);
});

test('autocapitalize | sentence short | rule === "nonExistingRule"', () => {
  const capitalizedText = autocapitalize(text.sentenceShort, 'nonExistingRule');

  expect(capitalizedText).toBe(result.none.sentenceShort);
});

test('autocapitalize | one word | rule === "nonExistingRule"', () => {
  const capitalizedText = autocapitalize(text.oneWord, 'nonExistingRule');

  expect(capitalizedText).toBe(result.none.oneWord);
});

test('autocapitalize | one word + white space | rule === "nonExistingRule', () => {
  const capitalizedText = autocapitalize(text.oneWordWhiteSpace, 'nonExistingRule');

  expect(capitalizedText).toBe(result.none.oneWordWhiteSpace);
});

test('autocapitalize | hyphenated compound word | rule === "nonExistingRule"', () => {
  const capitalizedText = autocapitalize(text.hyphenatedCompoundWord, 'nonExistingRule');

  expect(capitalizedText).toBe(result.none.hyphenatedCompoundWord);
});

test('autocapitalize | hello world | rule === "nonExistingRule"', () => {
  const capitalizedText = autocapitalize(text.helloWorld, 'nonExistingRule');

  expect(capitalizedText).toBe(result.none.helloWorld);
});

test('autocapitalize | hello world + white space | rule === "nonExistingRule"', () => {
  const capitalizedText = autocapitalize(text.helloWorldWhiteSpace, 'nonExistingRule');

  expect(capitalizedText).toBe(result.none.helloWorldWhiteSpace);
});

test('autocapitalize | question mark | rule === "nonExistingRule"', () => {
  const capitalizedText = autocapitalize(text.questionMark, 'nonExistingRule');

  expect(capitalizedText).toBe(result.none.questionMark);
});

test('autocapitalize | exclamation mark | rule === "nonExistingRule"', () => {
  const capitalizedText = autocapitalize(text.exclamationMark, 'nonExistingRule');

  expect(capitalizedText).toBe(result.none.exclamationMark);
});

test('autocapitalize | mixed | rule === "nonExistingRule"', () => {
  const capitalizedText = autocapitalize(text.mixed, 'nonExistingRule');

  expect(capitalizedText).toBe(result.none.mixed);
});

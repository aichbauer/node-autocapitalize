import { autocapitalize } from '../src';

import { text, result } from './fixtures/text';

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

test('autocapitalize | hyphenated compound word | rule === undefined', () => {
  const capitalizedText = autocapitalize(text.hyphenatedCompoundWord);

  expect(capitalizedText).toBe(result.off.hyphenatedCompoundWord);
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

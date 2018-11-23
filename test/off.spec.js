import { autocapitalize } from '../src';

import { text, result } from './fixtures/text';

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

test('autocapitalize | sentence fancy | rule === "off"', () => {
  const capitalizedText = autocapitalize(text.sentenceFancy, 'off');

  expect(capitalizedText).toBe(result.off.sentenceFancy);
});

test('autocapitalize | one word | rule === "off"', () => {
  const capitalizedText = autocapitalize(text.oneWord, 'off');

  expect(capitalizedText).toBe(result.off.oneWord);
});

test('autocapitalize | one word + white space | rule === "off"', () => {
  const capitalizedText = autocapitalize(text.oneWordWhiteSpace, 'off');

  expect(capitalizedText).toBe(result.off.oneWordWhiteSpace);
});

test('autocapitalize | hyphenated compound word | rule === "off"', () => {
  const capitalizedText = autocapitalize(text.hyphenatedCompoundWord, 'none');

  expect(capitalizedText).toBe(result.off.hyphenatedCompoundWord);
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

import { autocapitalize } from '../src';

import { text, result } from './fixtures/text';

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

test('autocapitalize | sentence fancy | rule === "on"', () => {
  const capitalizedText = autocapitalize(text.sentenceFancy, 'on');

  expect(capitalizedText).toBe(result.on.sentenceFancy);
});

test('autocapitalize | one word | rule === "on"', () => {
  const capitalizedText = autocapitalize(text.oneWord, 'on');

  expect(capitalizedText).toBe(result.on.oneWord);
});

test('autocapitalize | one word + white space | rule === "on', () => {
  const capitalizedText = autocapitalize(text.oneWordWhiteSpace, 'on');

  expect(capitalizedText).toBe(result.on.oneWordWhiteSpace);
});

test('autocapitalize | hyphenated compound word | rule === "on"', () => {
  const capitalizedText = autocapitalize(text.hyphenatedCompoundWord, 'on');

  expect(capitalizedText).toBe(result.on.hyphenatedCompoundWord);
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

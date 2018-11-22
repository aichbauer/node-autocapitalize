# autocapitalize

[![npm](https://img.shields.io/npm/v/autocapitalize.svg?style=flat-square)](https://www.npmjs.com/package/autocapitalize)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/autocapitalize.svg?style=flat-square)
[![Travis branch](https://img.shields.io/travis/com/aichbauer/node-autocapitalize/master.svg?style=flat-square)](https://travis-ci.com/aichbauer/node-autocapitalize)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/node-autocapitalize/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/node-autocapitalize)
[![storybook](https://img.shields.io/badge/docs%20with-docz-1F2D3D.svg?style=flat-square)](https://aichbauer.github.io/node-autocapitalize)

> A small string manipulation library to capitalize letters based on rules

## Table of Contents

* [Documentation](https://aichbauer.github.io/node-autocapitalize)
* [Why?](#why)
* [Installation](#installation)
* [Functions](#functions)
  * [autocapitalize](#autocapitalize-function)
    * [Syntax](#syntax)
* [Basic Usage](#basic-usage)
* [License](#license)

## Why?

I needed a fast and simple way to autocapitalize the first letter of a sentece. This library orients on the [autocapitalize feature](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize) although this is not for inputs on mobile devices per se. This library just borrows the implementation to bring it to strings.

This can come in handy if you have user based content and want to manipulate the string so that it is correctly displayed on a website. Or if you write long texts your self and want to auto capitalize the beginning of every sentence. You could also implement it to autocapitalize the input value on input fields, altough this is not recommended, because it breaks the natural user expiriance, but rules exist to break them, right? 😝

## Installation

```sh
$ npm i autocapitalize -S
```

or

```sh
$ yarn add autocapitalize
```

## Functions

For more detailed information you can take a look at the [documentation](https://aichbauer.github.io/node-autocapitalize).

### autocapitalize function

The function that manipulates a string.

#### Syntax

Returns a `string`.

```js
const capitalizedText = autocapitalize(value, rule);
```

#### Parameters

Parameter | Type | Required | Default | Description
---|---|---|---|---
value | `string` | true | | The string you want to manipulate
rule | `string` | false | | `off`, `none`, `on`, `sentences`, `words`, `characters`

##### rule

Type | Description
---|---
`off`, `none` | `autcapitalize` returns the value (not manipulated)
`on`, `sentences` | `autcapitalize` returns the value where the first letter of each sentence defaults to a capital letter
`words` | `autocapitalize` returns the value where the first letter of each word  defaults to a capital letter
`characters` | `autocapitalize` returns the value where all letters defaults to a capital letter

## Basic Usage

> For more detailed information you can take a look at the [documentation](https://aichbauer.github.io/node-autocapitalize).

```js
const { autocapitalize } = require('autocapitalize');

const value = 'this is an example text. this is an example text? this is an example text!'

// => "this is an example text. this is an example text? this is an example text!"
autocapitalize(value);

// => "this is an example text. this is an example text? this is an example text!"
autocapitalize(value, 'off');

// => "this is an example text. this is an example text? this is an example text!"
autocapitalize(value, 'none');


// => "This is an example text. This is an example text? This is an example text!"
autocapitalize(value, 'on');

// => "This is an example text. This is an example text? This is an example text!"
autocapitalize(value, 'sentences');


// => "This Is An Example Text. This Is An Example Text? This Is An Example Text!"
autocapitalize(value, 'words');


// => "THIS IS AN EXAMPLE TEXT. THIS IS AN EXAMPLE TEXT? THIS IS AN EXAMPLE TEXT!"
autocapitalize(value, 'characters');
```

## License

MIT © Lukas Aichbauer

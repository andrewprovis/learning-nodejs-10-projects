# cli-color-tty [![Build Status](https://travis-ci.org/alanshaw/cli-color-tty.svg?branch=master)](https://travis-ci.org/alanshaw/cli-color-tty) [![Dependency Status](https://david-dm.org/alanshaw/cli-color-tty.svg)](https://david-dm.org/alanshaw/cli-color-tty) [![Coverage Status](https://img.shields.io/coveralls/alanshaw/cli-color-tty/master.svg?style=flat)](https://coveralls.io/r/alanshaw/cli-color-tty)

The [cli-color](https://github.com/medikoo/cli-color) module but TTY aware. It provides a cli-color compatible API that doesn't colorize your strings for non-TTY use.

## Example

```js
var clc = require('cli-color-tty')(true)
// clc is = require('cli-color')

console.log(clc.red('RED')) // -> '\x1b[31mRED\x1b[39m'

clc = require('cli-color-tty')(false)
// clc is a cli-color compatible API that doesn't colorize

console.log(clc.red('RED')) // -> 'RED'
```

## Usage

```js
var clc = require('cli-color-tty')(/* true/false/default: process.stdout.isTTY */)
```

After calling the factory function, use it as per the [cli-color docs](https://github.com/medikoo/cli-color/blob/master/README.md).

Pass `true` to the factory function to get back the cli-color module.  
Pass `false` to get back a cli-color compatible object that doesn't colorize your strings.  
Defaults to `process.stdout.isTTY`
var test = require('tape')
var clcTTY = require('./')

test('Should use colors for TTY fd', function (t) {
  t.plan(1)
  var clc = clcTTY(true)
  t.equal(clc.red('RED'), '\x1b[31mRED\x1b[39m', 'String contains colors')
  t.end()
})

test('Should use colors for non-TTY fd', function (t) {
  t.plan(1)
  var clc = clcTTY(false)
  t.equal(clc.red('RED'), 'RED', 'String does not contain colors')
  t.end()
})

test('Should default to process.stdout.isTTY when isTTY option not set', function (t) {
  t.plan(2)

  process.stdout.isTTY = false
  var clc = clcTTY()
  t.equal(clc.red('RED'), 'RED', 'String does not contain colors')

  process.stdout.isTTY = true
  clc = clcTTY()
  t.equal(clc.red('RED'), '\x1b[31mRED\x1b[39m', 'String contains colors')

  t.end()
})

test('non-TTY color/style API compat', function (t) {
  t.plan(14)
  var clc = clcTTY(false)
  t.equal(clc.black('black'), 'black', 'black')
  t.equal(clc.red('red'), 'red', 'red')
  t.equal(clc.green('green'), 'green', 'green')
  t.equal(clc.yellow('yellow'), 'yellow', 'yellow')
  t.equal(clc.blue('blue'), 'blue', 'blue')
  t.equal(clc.magenta('magenta'), 'magenta', 'magenta')
  t.equal(clc.cyan('cyan'), 'cyan', 'cyan')
  t.equal(clc.white('white'), 'white', 'white')
  t.equal(clc.bold('bold'), 'bold', 'bold')
  t.equal(clc.italic('italic'), 'italic', 'italic')
  t.equal(clc.underline('underline'), 'underline', 'underline')
  t.equal(clc.blink('blink'), 'blink', 'blink')
  t.equal(clc.inverse('inverse'), 'inverse', 'inverse')
  t.equal(clc.strike('strike'), 'strike', 'strike')
  t.end()
})

test('non-TTY color/style API chaining compat', function (t) {
  t.plan(1)
  var msg = clcTTY(false)
    .black
    .red
    .green
    .yellow
    .blue
    .magenta
    .cyan
    .white
    .bold
    .italic
    .underline
    .blink
    .inverse
    .strike

  t.equal(msg('color/style'), 'color/style', 'Compatible color/style chaining API')
  t.end()
})

test('non-TTY move API compat', function (t) {
  t.plan(7)
  var clc = clcTTY(false)
  t.equal(clc.move(3, 4), '', 'move returns empty')
  t.equal(clc.moveTo(3, 4), '', 'moveTo returns empty')
  t.equal(clc.bol(), '', 'bol returns empty')
  t.equal(clc.up(), '', 'up returns empty')
  t.equal(clc.down(), '', 'down returns empty')
  t.equal(clc.right(), '', 'right returns empty')
  t.equal(clc.left(), '', 'left returns empty')
  t.end()
})

test('non-TTY dimensions API compat', function (t) {
  t.plan(2)
  var clc = clcTTY(false)
  t.equal(clc.width(), 0, 'width returns zero')
  t.equal(clc.height(), 0, 'height returns zero')
  t.end()
})

test('non-TTY xterm API compat', function (t) {
  t.plan(2)
  var clc = clcTTY(false)
  t.equal(clc.xterm(202)('xterm'), 'xterm', 'Compatible xterm API')
  t.equal(clc.bgXterm(236)('bgXterm'), 'bgXterm', 'Compatible bgXterm API')
  t.end()
})
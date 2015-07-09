var clc = require('cli-color')

function empty () { return '' }
function zero () { return 0 }

function fn () {
  return Array.prototype.join.call(arguments, ' ')
}

['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white']
  .forEach(function (c) {
    fn[c] = fn
    fn['bg' + c[0].toUpperCase() + c.slice(1)] = fn
  })

;['bold', 'italic', 'underline', 'blink', 'inverse', 'strike']
  .forEach(function (style) { fn[style] = fn })

;['move', 'moveTo', 'bol', 'up', 'down', 'right', 'left']
  .forEach(function (move) { fn[move] = empty })

;['width', 'height']
  .forEach(function (dim) { fn[dim] = zero })

;['xterm', 'bgXterm']
  .forEach(function (xterm) {
    fn[xterm] = function () { return fn }
  })

fn.reset = empty
fn.beep = empty
fn.xtermSupported = clc.xtermSupported

module.exports = function (isTTY) {
  isTTY = isTTY == null ? process.stdout.isTTY : isTTY
  return isTTY ? clc : fn
}

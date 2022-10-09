const debug = require('debug')('http')
  , http = require('http')
  , name = 'My App';

debug('booting %o', name);

http.createServer(function (req, res) {
  debug(req.method + ' ' + req.url);
  res.end('hello\n');
}).listen(3000, function () {
  debug('listening');
});

var a = require('debug')('worker:a')
  , b = require('debug')('worker:b');

function work() {
  a('doing lots of uninteresting work');
  setTimeout(work, Math.random() * 1000);
}

work();

function workb() {
  b('doing some work');
  setTimeout(workb, Math.random() * 2000);
}

workb();

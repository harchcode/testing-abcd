const test = require('ava');
const royalRumble = require('../src/royal-rumble');

test('royalRumble returns correct value', t => {
  t.deepEqual(
    royalRumble(['King III', 'King II', 'Queen IX']),
    ['King II', 'King III', 'Queen IX']
  );
});

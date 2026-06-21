import { formatClock } from './time';

test('pads minutes and seconds', () => {
  if (formatClock(65) !== '01:05') throw new Error('expected 01:05');
});

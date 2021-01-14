import { range } from '../src/iterator';

test('range creates an iterator', () => {
  expect([...range(0, 5)]).toEqual([0, 1, 2, 3, 4, 5]);
});

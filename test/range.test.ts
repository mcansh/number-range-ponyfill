/**
 * tests are taken from the Number.range spec
 * https://github.com/tc39/proposal-Number.range/blob/master/__tests__/test.js
 */

import { range, take } from '../src';

test('range', () => {
  expect(range(-1, 5)).toEqual([-1, 0, 1, 2, 3, 4, 5]);
  expect(range(-5, 1)).toEqual([-5, -4, -3, -2, -1, 0, 1]);
  expect(range(5, 1)).toEqual([5, 4, 3, 2, 1]);
  expect(range(0, 1, 0.1)).toEqual([
    0,
    0.1,
    0.2,
    0.30000000000000004,
    0.4,
    0.5,
    0.6000000000000001,
    0.7000000000000001,
    0.8,
    0.9,
    1,
  ]);
  expect(range(0, 0)).toEqual([0]);
  expect(take(range(0, 10), 5)).toEqual([0, 1, 2, 3, 4]);
  expect(range(0, 10).map(x => x * 2)).toEqual([
    0,
    2,
    4,
    6,
    8,
    10,
    12,
    14,
    16,
    18,
    20,
  ]);
  expect(range(1)).toEqual([0, 1]);

  expect(range(NaN, 0)).toBeUndefined();
  expect(range(0, NaN)).toBeUndefined();
  expect(range(NaN, NaN)).toBeUndefined();
});

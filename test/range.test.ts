/**
 * tests are taken from the Number.range spec
 * https://github.com/tc39/proposal-Number.range/blob/master/__tests__/test.js
 */

import { Range } from '../src';

test('new Range', () => {
  expect(new Range(-1, 5).range).toMatchInlineSnapshot(`
    Array [
      -1,
      0,
      1,
      2,
      3,
      4,
      5,
    ]
  `);
  expect(new Range(-1, 5).range).toMatchInlineSnapshot(`
    Array [
      -1,
      0,
      1,
      2,
      3,
      4,
      5,
    ]
  `);
  expect(new Range(-5, 1).range).toMatchInlineSnapshot(`
    Array [
      -5,
      -4,
      -3,
      -2,
      -1,
      0,
      1,
    ]
  `);
  expect(new Range(5, 1).range).toMatchInlineSnapshot(`
    Array [
      5,
      4,
      3,
      2,
      1,
    ]
  `);
  expect(new Range(0, 1, 0.1).range).toMatchInlineSnapshot(`
    Array [
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
    ]
  `);
  expect(new Range(0, 0).range).toMatchInlineSnapshot(`
    Array [
      0,
    ]
  `);
  expect(new Range(0, 10).take(5)).toMatchInlineSnapshot(`
    Array [
      0,
      1,
      2,
      3,
      4,
    ]
  `);
  expect(new Range(0, 10).range.map(x => x * 2)).toMatchInlineSnapshot(`
    Array [
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
    ]
  `);
  expect(new Range(4).range).toMatchInlineSnapshot(`
    Array [
      0,
      1,
      2,
      3,
      4,
    ]
  `);
  expect(new Range(NaN, 0).range).toMatchInlineSnapshot(`Array []`);
  expect(new Range(0, NaN).range).toMatchInlineSnapshot(`
    Array [
      0,
    ]
  `);
  expect(new Range(NaN, NaN).range).toMatchInlineSnapshot(`Array []`);
});

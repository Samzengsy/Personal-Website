import assert from 'node:assert/strict';
import test from 'node:test';

import { getNextLifestyleIndex } from './lifestyleNavigation.ts';

test('ArrowRight and ArrowLeft wrap between the four lifestyle tabs', () => {
  assert.equal(getNextLifestyleIndex(3, 'ArrowRight', 4), 0);
  assert.equal(getNextLifestyleIndex(0, 'ArrowLeft', 4), 3);
});

test('Home and End move to the first and last lifestyle tabs', () => {
  assert.equal(getNextLifestyleIndex(2, 'Home', 4), 0);
  assert.equal(getNextLifestyleIndex(1, 'End', 4), 3);
});

test('unsupported keys keep the current lifestyle tab selected', () => {
  assert.equal(getNextLifestyleIndex(2, 'Enter', 4), 2);
});

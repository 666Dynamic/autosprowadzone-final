import assert from 'node:assert';
import { test, describe } from 'node:test';
import { cn } from './utils.ts';

describe('cn utility', () => {
  test('concatenates strings correctly', () => {
    assert.strictEqual(cn('a', 'b'), 'a b');
  });

  test('handles conditional classes', () => {
    assert.strictEqual(cn('a', true && 'b', false && 'c'), 'a b');
  });

  test('handles null and undefined', () => {
    assert.strictEqual(cn('a', null, undefined), 'a');
  });

  test('handles arrays of classes', () => {
    assert.strictEqual(cn(['a', 'b'], 'c'), 'a b c');
  });

  test('handles objects of classes', () => {
    assert.strictEqual(cn({ 'a': true, 'b': false, 'c': true }), 'a c');
  });

  test('merges tailwind classes correctly (via twMerge)', () => {
    // This test specifically checks if twMerge is working
    // p-2 and p-4 should result in p-4
    assert.strictEqual(cn('p-2', 'p-4'), 'p-4');
  });

  test('handles conflicting tailwind classes', () => {
    assert.strictEqual(cn('text-red-500', 'text-blue-500'), 'text-blue-500');
  });

  test('complex combination of inputs', () => {
    assert.strictEqual(
      cn('base-class', ['arr-1', 'arr-2'], { 'obj-1': true, 'obj-2': false }, 'last'),
      'base-class arr-1 arr-2 obj-1 last'
    );
  });
});

import { describe, it, expect } from 'vitest';
import { add } from '../src/index';

describe('add', () => {
  it('should add two numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
  });
});

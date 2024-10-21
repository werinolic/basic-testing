import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 5, b: 3, action: Action.Subtract, expected: 2 },
  { a: 6, b: 2, action: Action.Subtract, expected: 4 },
  { a: 3, b: 3, action: Action.Multiply, expected: 9 },
  { a: 8, b: 2, action: Action.Multiply, expected: 16 },
  { a: 10, b: 2, action: Action.Divide, expected: 5 },
  { a: 9, b: 3, action: Action.Divide, expected: 3 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 5, b: 2, action: Action.Exponentiate, expected: 25 },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should calculate $a $action $b to be $expected',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    },
  );

  test('should return null for invalid action', () => {
    const result = simpleCalculator({ a: 1, b: 2, action: 'invalid' });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator({ a: '1', b: 2, action: Action.Add });
    expect(result).toBeNull();
  });
});
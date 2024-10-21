import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const input = { a: 3, b: 5, action: Action.Add };
    const result = simpleCalculator(input);
    expect(result).toBe(8);
  });

  test('should subtract two numbers', () => {
    const input = { a: 10, b: 4, action: Action.Subtract };
    const result = simpleCalculator(input);
    expect(result).toBe(6);
  });

  test('should multiply two numbers', () => {
    const input = { a: 6, b: 7, action: Action.Multiply };
    const result = simpleCalculator(input);
    expect(result).toBe(42);
  });

  test('should divide two numbers', () => {
    const input = { a: 20, b: 5, action: Action.Divide };
    const result = simpleCalculator(input);
    expect(result).toBe(4);
  });

  test('should exponentiate two numbers', () => {
    const input = { a: 2, b: 3, action: Action.Exponentiate };
    const result = simpleCalculator(input);
    expect(result).toBe(8);
  });

  test('should return null for invalid action', () => {
    const input = { a: 5, b: 10, action: 'invalid_action' };
    const result = simpleCalculator(input);
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const input1 = { a: 'string', b: 10, action: Action.Add };
    const input2 = { a: 5, b: null, action: Action.Subtract };
    const input3 = { a: 5, b: 10, action: 123 }; // invalid action type

    expect(simpleCalculator(input1)).toBeNull();
    expect(simpleCalculator(input2)).toBeNull();
    expect(simpleCalculator(input3)).toBeNull();
  });
});

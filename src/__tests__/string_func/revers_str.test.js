import{reversStr} from "../../string_func/revers_str";

describe('reverseString', () => {
  it('should reverse a string', () => {
    expect(reversStr('hello')).toBe('olleh');
    console.log('Test OK');
  });

  it('should return an empty string when passed an empty string', () => {
    expect(reversStr('')).toBe('');
    console.log('Test OK');
  });

  it('should return the same string when passed a single character string', () => {
    expect(reversStr('a')).toBe('a');
    console.log('Test OK');
  });

  it('should handle special characters correctly', () => {
    expect(reversStr('!@#$%^&*()_+')).toBe('+_)(*&^%$#@!');
    console.log('Test OK');
  });

  it('should reverse a long string quickly', () => {
  const str = 'a'.repeat(1000000);
  const start = Date.now();
  reversStr(str);
  const end = Date.now();
  expect(end - start).toBeLessThan(100); // проверяем, что функция выполняется менее, чем за 100 миллисекунд
  console.log('Test OK');
  });

});

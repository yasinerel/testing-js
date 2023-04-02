//capitalize
/*function capitalize(str) {
    if (str.length === 0) {
      return '';
    }
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  describe('capitalize', () => {
    it('capitalizes the first character of a word', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('world')).toBe('World');
    });
  
    it('does not modify an already capitalized word', () => {
      expect(capitalize('Hello')).toBe('Hello');
      expect(capitalize('World')).toBe('World');
    });
  
    it('returns an empty string when given an empty string', () => {
      expect(capitalize('')).toBe('');
    });
  
    it('returns the input when given a single character string', () => {
      expect(capitalize('a')).toBe('A');
    });
  });
*/



//analyzeArray
describe("analyzeArray", () => {
  it("should return an object with average, min, max, and length properties", () => {
    const result = analyzeArray([1, 2, 3]);
    expect(result).toHaveProperty("average");
    expect(result).toHaveProperty("min");
    expect(result).toHaveProperty("max");
    expect(result).toHaveProperty("length");
  });

  it("should return the correct average", () => {
    const result = analyzeArray([1, 2, 3]);
    expect(result.average).toBe(2);
  });

  it("should return the correct min value", () => {
    const result = analyzeArray([1, 2, 3]);
    expect(result.min).toBe(1);
  });

  it("should return the correct max value", () => {
    const result = analyzeArray([1, 2, 3]);
    expect(result.max).toBe(3);
  });

  it("should return the correct length", () => {
    const result = analyzeArray([1, 2, 3]);
    expect(result.length).toBe(3);
  });
});

function analyzeArray(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const length = arr.length;
  const average = sum / length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return { average, min, max, length };
}



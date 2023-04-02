//capitalize
function capitalize(str) {
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

//reverseString


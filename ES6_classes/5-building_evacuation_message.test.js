import Building from './5-building.js';

describe('Building forces override', () => {
  test('should throw error when subclass does not override evacuationWarningMessage', () => {
    class TestBuilding extends Building {}
    
    expect(() => {
      new TestBuilding(200);
    }).toThrow("Class extending Building must override evacuationWarningMessage");
  });
});

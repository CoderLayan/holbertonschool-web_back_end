// Test the implementation
import Building from './5-building.js';

// Test valid Building
const building = new Building(1000);
console.log('Valid building:', building);

// Test subclass without evacuationWarningMessage
class TestBuilding extends Building {}
// This should throw an error
try {
  new TestBuilding(200);
} catch (error) {
  console.log('Error caught:', error.message);
}

// Test subclass with evacuationWarningMessage
class GoodBuilding extends Building {
  evacuationWarningMessage() {
    return 'Evacuate immediately!';
  }
}
// This should work
const goodBuilding = new GoodBuilding(500);
console.log('Good building:', goodBuilding);

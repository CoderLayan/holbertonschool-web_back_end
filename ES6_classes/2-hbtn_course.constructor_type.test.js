// Test the implementation
import HolbertonCourse from "./2-hbtn_course.js";

// Test valid creation
const course = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
console.log('Valid course:', course);

// Test invalid name
try {
  new HolbertonCourse(10, 20, ["Lucie", "Guillaume"]);
} catch (err) {
  console.log('Error (name):', err.message); // "Name must be a string"
}

// Test invalid length
try {
  new HolbertonCourse('PHP', '20', ["Lucie", "Guillaume"]);
} catch (err) {
  console.log('Error (length):', err.message); // "Length must be a number"
}

// Test invalid students
try {
  new HolbertonCourse('PHP', 20, "not an array");
} catch (err) {
  console.log('Error (students):', err.message); // "Students must be an array of strings"
}

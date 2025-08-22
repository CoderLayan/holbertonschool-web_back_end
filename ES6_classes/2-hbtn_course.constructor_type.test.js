import HolbertonCourse from './2-hbtn_course.js';

test('HolbertonCourse checks constructor types', () => {
  expect(() => {
    new HolbertonCourse(10, 20, ["Lucie", "Guillaume"]);
  }).toThrow(TypeError);

  expect(() => {
    new HolbertonCourse('PHP', '20', ["Lucie", "Guillaume"]);
  }).toThrow(TypeError);

  expect(() => {
    new HolbertonCourse('PHP', 20, [123, "Guillaume"]);
  }).toThrow(TypeError);
});

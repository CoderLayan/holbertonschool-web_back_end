import HolbertonCourse from './HolbertonCourse';

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

test('HolbertonCourse is implemented correctly', () => {
  const course = new HolbertonCourse("PHP", 20, ["Lucie", "Guillaume"]);
  expect(course.name).toBe("PHP");
  expect(course.length).toBe(20);
  expect(course.students).toEqual(["Lucie", "Guillaume"]);
});

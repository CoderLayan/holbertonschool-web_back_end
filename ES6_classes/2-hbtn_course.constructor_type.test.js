import HolbertonCourse from "./2-hbtn_course.js";

describe("HolbertonCourse checks constructor types", () => {
  test("should throw errors for invalid types", () => {
    expect(() => {
      new HolbertonCourse(10, 20, ["Lucie", "Guillaume"]);
    }).toThrow('Name must be a string');
    
    expect(() => {
      new HolbertonCourse('PHP', '20', ["Lucie", "Guillaume"]);
   }).toThrow('Length must be a number');
  });
});

const Intern = require("../lib/Intern");

test("Should set school", () => {
  const school = "PSL";
  const intern = new Intern("Jon", "505", "email", school);
  expect(intern.school).toBe(school);
});

test("returns role", () => {
  const role = "Intern";
  const intern = new Intern("Jon", "505", "email", "PSL");
  expect(intern.getRole()).toBe(role);
});

test("returns school name", () => {
  const school = "PSL";
  const intern = new Intern("Jon", 505, "email", school);
  expect(intern.getSchool()).toBe(school);
});

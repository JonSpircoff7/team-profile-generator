const Manager = require("../lib/Manager");

test("Should set officeNumber", () => {
  const officeNumber = 505;
  const manager = new Manager("Jon", "300", "email.com", officeNumber);
  expect(manager.officeNumber).toBe(officeNumber);
});

test("returns officeNumber", () => {
  const officeNumber = 505;
  const manager = new Manager("Jon", "300", "email.com", officeNumber);
  expect(manager.getOfficeNumber()).toBe(officeNumber);
});

test("returns role", () => {
  const role = "Manager";
  const manager = new Manager("Jon", "300", "email.com", "5050505");
  expect(manager.getRole()).toBe(role);
});

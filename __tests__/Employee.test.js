const Employee = require("../lib/Employee");

test("Can instantiate Employee", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});

test("Can set name", () => {
  const name = "Jonathan";
  const employee = new Employee(name);
  expect(employee.name).toBe("Jonathan");
});
test("Can set ID", () => {
  const ID = 505;
  const employee = new Employee("jon", ID);
  expect(employee.id).toBe(ID);
});

test("Can set email ", () => {
  const email = "Spircoff_j@yahoo.com";
  const employee = new Employee("name", 505, email);
  expect(employee.email).toBe(email);
});

test("Can get name", () => {
  const name = "Jonathan";
  const employee = new Employee(name, 550);
  expect(employee.getName()).toBe(name);
});

test("Can get ID", () => {
  const ID = "550";
  const employee = new Employee("Jonathan", ID);
  expect(employee.getId()).toBe(ID);
});

test("Can get email", () => {
  const email = "Spircoff_j@yahoo.com";
  const employee = new Employee("Jonathan", 550, email);
  expect(employee.getEmail()).toBe(email);
});

test("Can get role", () => {
  const role = "Employee";
  const employee = new Employee("Jonathan", 550, "Spircoff_j@yahoo.com", role);
  expect(employee.getRole()).toBe(role);
});

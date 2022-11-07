const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  const mockEngineer = {
  name: 'Jonathan',
  id: 76,
  email: "Spircoff_j@yahoo.com",
  github: 'testGithub.github.io'
  };
  test('Should create a instance of the engineer class', () => {
    const mockEng = new Engineer(mockEngineer)
    expect(mockEng).toBe(Engineer);
});
});

test("Should set github value", () => {
  const github = "testGithub.github.io";
  const engineer = new Engineer("name", "id", "email", github);
  expect(engineer.github).toBe(github);
});

test("should return role", () => {
  const role = "Engineer";
  const engineer = new Engineer("Jonathan", "id", "email", "github");
  expect(engineer.getRole()).toBe(role);
});

test("should return the github for the user", () => {
  const github = "engineer.github.io";
  const engineer = new Engineer("Jonathan", "505", "email", github);
  expect(engineer.getGithub()).toBe(github);
});

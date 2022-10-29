class Intern extends Employee{
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

class Manager extends Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officerNumber;
  }
  getOfficerNumber() {
    return this.officerNumber;
  }
  getRole() {
    return "Intern";
  }
}

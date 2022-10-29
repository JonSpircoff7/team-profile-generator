class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Manager;

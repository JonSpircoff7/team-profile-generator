class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

const employee1 = new Employee("John", "5", "Spircoff_j@yahoo.com");
const employee2 = new Employee("Jrn", "8", "Spircoff_j@yahoo.com");
console.log(employee2);
console.log(employee1);

module.exports = Employee;

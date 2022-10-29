class Engineer extends Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getGitHub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

/* Task 1 */

class Elem {
  constructor(selector) {
    this.html_selector = document.querySelector(selector);
    return this;
  }

  html(text) {
    this.html_selector.textContent = text;
    return this;
  }

  append(text) {
    this.html_selector.textContent = text + this.html_selector.textContent;
    return this;
  }

  prepend(text) {
    this.html_selector.textContent = this.html_selector.textContent + text;
    return this;
  }

  attr(attribute, value) {
    this.html_selector.setAttribute(attribute, value);
    return this;
  }
}

/*---------------------------------------------------------------------------------*/
/* Task 2 */

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getFullName = this.name + " " + this.surname;
  }
}
class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
    this.getCourse = new Date().getFullYear() - this.year;
  }
}

/*---------------------------------------------------------------------------------*/
/* Task 3 */

class Worker {
  #name;
  #surname;
  #rate;
  #days;
  constructor(name, surname, rate, days) {
    this.#name = name;
    this.#surname = surname;
    this.#rate = rate;
    this.#days = days;

    this.getName = this.#name;
    this.getSurname = this.#surname;
    this.getRate = this.#rate;
    this.getDays = this.#days;
    this.getSalary = this.getRate * this.getDays + "$";
  }
}

/*---------------------------------------------------------------------------------*/
/* Task 4 */

class Base {
  constructor() {
    Base.prototype.params = {
      page: 1,
    };
  }
}

class Filter extends Base {}

class Sort extends Base {}

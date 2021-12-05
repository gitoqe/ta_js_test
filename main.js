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

const elem = new Elem(".q");

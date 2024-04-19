class CalculatorController {
  constructor() {
    // _ => Private methods or attributes, only the class should have access
    this._display = "0";
    this._currentDate;
  }

  initialize() {
    // DOM = Document Object Model (document and browser) - document object
    // BOM = Browser Object Model (window, location, history, screen, navigator) - window object
    let displayElement = document.querySelector("#display");
    let dateElement = document.querySelector("#date");
    let timeElement = document.querySelector("#time");

    displayElement.innerHTML = this.display;
    //SET DATE
    // in this line this.currentDate = new Date();, you are using the currentDate setter.
    // In JavaScript, setters are a way to set the value of an object's property. They are used with assignment syntax, as if you were assigning a value to a variable.
    // So, when you write this.currentDate = new Date();, you are calling the currentDate setter and passing new Date() as an argument.
    this.currentDate = new Date();
    dateElement.innerHTML = this.currentDate.toLocaleDateString();
    timeElement.innerHTML = this.currentDate.toLocaleTimeString();
  }

  get display() {
    return this._display;
  }

  set display(value) {
    this._display = value;
  }

  get currentDate() {
    return this._currentDate;
  }

  set currentDate(value) {
    this._currentDate = value;
  }
}
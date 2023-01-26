import Element from "./element.js";
export default class Form {
  constructor() {
    this.div = document.querySelector(".third");
  }
  readForm() {
    const submit = document.querySelector(".submit");
    submit.addEventListener("click", () => {
      const inputs = document.querySelectorAll(".input");
      const el = new Element(...inputs).createElement();
      this.div.append(el);
    });
  }
}

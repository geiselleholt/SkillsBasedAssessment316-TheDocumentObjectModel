var inputs = [
  {
    id: "noun",
    type: "text",
    placeholder: "Enter a NOUN",
  },
  {
    id: "verb",
    type: "text",
    placeholder: "Enter a VERB",
  },
  {
    id: "date",
    type: "date",
  },
  {
    id: "adjective",
    type: "text",
    placeholder: "Enter a ADJECTIVE",
  },
  {
    id: "number",
    type: "number",
    placeholder: "Enter a NUMBER",
  },
];

let body = document.querySelector(`body`);
body.style.backgroundColor = `var(--body-bg)`;
body.innerHTML = `<h1>Mad Lib for Tech Newbs</h1>`;
body.classList.add(`bodyStyle`);

let instructions = document.createElement(`h2`);
instructions.textContent = `Enter in the first word or number that comes to mind and I'll put it into a fun story.`;
body.appendChild(instructions);

let inputForm = document.createElement(`form`);
body.appendChild(inputForm);
inputForm.classList.add("inputForm");

inputs.forEach((input) => {
  let inputEl = document.createElement(`input`);
  inputEl.setAttribute(`id`, input.id);
  inputEl.setAttribute(`type`, input.type);
  inputEl.setAttribute(`placeholder`, input.placeholder);
  inputForm.appendChild(inputEl);
});

let submitButton = document.createElement("button");
inputForm.appendChild(submitButton);
submitButton.classList.add("button");
submitButton.textContent = "Submit";

let inputEls = document.querySelectorAll("input");
inputEls.forEach((inputEl) => {
  inputEl.classList.add("inputEls");
});



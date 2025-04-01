var inputs = [
  {
    id: `animal`,
    type: `text`,
    placeholder: `Favorite animal`,
  },
  {
    id: `action`,
    type: `text`,
    placeholder: `Action word`,
  },
  {
    id: `date`,
    type: `date`,
  },
  {
    id: `adjective`,
    type: `text`,
    placeholder: `Adjective`,
  },
  {
    id: `number`,
    type: `number`,
    placeholder: `Number`,
  },
];

let main = document.querySelector(`main`);
main.style.backgroundColor = `var(--main-bg)`;
main.innerHTML = `<h1>🤖 Mad Lib from a Tech Newb 👩‍💻</h1>`;
main.classList.add(`mainStyle`);

let instructions = document.createElement(`h2`);
instructions.textContent = `Don't think!🚫🤔 Just enter in the first word or number that comes to mind and I'll put it into a funny story 🤪`;
main.appendChild(instructions);

let inputForm = document.createElement(`form`);
main.appendChild(inputForm);
inputForm.classList.add(`inputForm`);

inputs.forEach((input) => {
  let inputEl = document.createElement(`input`);
  inputEl.setAttribute(`id`, input.id);
  inputEl.setAttribute(`type`, input.type);
  inputEl.setAttribute(`placeholder`, input.placeholder);
  inputForm.appendChild(inputEl);
});

let submitButton = document.createElement(`button`);
inputForm.appendChild(submitButton);
submitButton.classList.add(`button`);
submitButton.textContent = `Submit`;

let inputEls = document.querySelectorAll(`input`);
inputEls.forEach((inputEl) => {
  inputEl.classList.add(`inputEls`);
});

let storyDiv = document.getElementById(`story`);
storyDiv.classList.add(`storyDiv`);
let storyEl = document.createElement(`p`);
storyDiv.appendChild(storyEl);

inputForm.addEventListener(`submit`, handleInputForm);

function handleInputForm(e) {
  e.preventDefault();
  let animal = document.getElementById(`animal`).value;
  let action = document.getElementById(`action`).value;
  let adjective = document.getElementById(`adjective`).value;
  let date = document.getElementById(`date`).value;
  let number = document.getElementById(`number`).value;

  if (
    animal == `` ||
    action == `` ||
    adjective == `` ||
    date == `` ||
    number == ``
  ) {
    alert(`You missed an entry or 2... or 5 😜`);
  } else {
    let story = `On the unforgettable day of ${date}, a ${animal} decided to ${action} for the first time. It took them ${number} hours, but they finally succeeded! They celebrated by ordering ${number} bowls of ${food}. Then, they accidentally spilled ${food} on their ${animal}, causing it to start speaking in ${language}. It was the most ${adjective} day of their lives!`;

    storyEl.innerHTML = `<h3>${story}</h3>`;
    console.log(story);
    // localStorage.setItem(`madLibsStory`, story);
  }
}

var inputs = [
  {
    id: `animal`,
    type: `text`,
    placeholder: `Animal`,
  },
  {
    id: `action`,
    type: `text`,
    placeholder: `Action word`,
  },
  {
    id: `adjective`,
    type: `text`,
    placeholder: `Describing word`,
  },
  {
    id: `number`,
    type: `number`,
    placeholder: `Number`,
  },
  {
    id: `food`,
    type: `text`,
    placeholder: `Food`,
  },
  {
    id: `date`,
    type: `date`,
  },
  {
    id: `occupation`,
    type: `text`,
    placeholder: `Job`,
  },
  {
    id: `language`,
    type: `text`,
    placeholder: `Language`,
  },
];

let main = document.querySelector(`main`);
// Cache at least one element using querySelector or querySelectorAll ✅
main.style.backgroundColor = `var(--main-bg)`;
main.innerHTML = `<h2>🤖 Mad Libs from a Tech Newb 👩‍💻</h2>`;
main.classList.add(`mainStyle`);

let instructions = document.createElement(`h3`);
// Create at least one element using createElement ✅
instructions.textContent = `Don't think!🚫🤔 Just enter in the first word or number that comes to mind and see a funny story 🤪`;
main.appendChild(instructions);
// Use appendChild and/or prepend to add new elements to the DOM ✅

let inputForm = document.createElement(`form`);
main.appendChild(inputForm);
inputForm.classList.add(`inputForm`);
// Include at least one form and/or input with HTML attribute validation ✅

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
  // Iterate over a collection of elements to accomplish some task ✅
});

inputForm.addEventListener(`submit`, handleInputForm);
// Register at least two different event listeners and create the associated event handler functions - #1 ✅

function handleInputForm(e) {
  e.preventDefault();
  let animal = document.getElementById(`animal`).value;
  let action = document.getElementById(`action`).value;
  let adjective = document.getElementById(`adjective`).value;
  let date = document.getElementById(`date`).value;
  let number = document.getElementById(`number`).value;
  let food = document.getElementById(`food`).value;
  let language = document.getElementById(`language`).value;
  let occupation = document.getElementById(`occupation`).value;

  // Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.) ✅
  if (
    animal == `` ||
    action == `` ||
    adjective == `` ||
    date == `` ||
    number == `` ||
    food == `` ||
    language == `` ||
    occupation == ``
  ) {
    alert(`You missed an entry or 2... 😜`);
    // Use at least two Browser Object Model (BOM) properties or methods - #1 ✅
  } else {
    let storySection = document.getElementById(`storySection`);

    if (!storySection.firstChild) {
      // Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.) ✅
      let firstStory = `On the unforgettable day of ${date}🌞, a ${occupation} decided to ${action} for the first time 🤩. It took them ${number} hours😮‍💨, but they finally succeeded🥳! They celebrated by ordering ${number} bowls of ${food}😋. Then, they accidentally spilled ${food} on their ${animal}🤭, causing it to start speaking in ${language}🙀. It was the most ${adjective} day of their lives🤪!`;

      let firstTitle = `Funny story...`;

      createStory(firstTitle, firstStory);
    } else {
      let newStory = `One cloudy day on ${date} ⛅, a ${adjective} ${animal} wandered into the forest🌲. It decided to ${action} near a group of ${occupation}s who were having a picnic🧺. After ${number} minutes, the ${animal} joined them and started eating their ${food}🥣. To everyone's surprise, the ${animal} began speaking in ${language}, telling jokes and making everyone laugh🤣😂. It was the most ${adjective} day in the forest🌄, and the ${animal} became the forest's favorite comedian!🤡`;

      let newTitle = `Forest funday...`;

      createStory(newTitle, newStory);

      actionButtons.style.visibility = `hidden`;

      setTimeout(() => {
        alert(`🎉 Thanks for playing! 🎉`);
        window.location.reload();
      }, 10000);
    }
  }
}

function createStory(title, story) {
  // Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content ✅
  let template = document.getElementById(`storyTemplate`);
  //Cache at least one element using *get*ElementById ✅

  let fragment = document.createDocumentFragment();

  let clone = template.content.cloneNode(true);

  clone.getElementById(`templateTitle`).textContent = title;
  clone.getElementById(`templateStory`).innerHTML = `<h3>${story}</h3>`;
  // Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent ✅

  fragment.appendChild(clone);

  let storySection = document.getElementById(`storySection`);
  let storyDiv = document.createElement(`div`);
  storyDiv.classList.add(`storyDivStyle`);
  storySection.appendChild(storyDiv);
  storyDiv.appendChild(fragment);

  let actionButtons = document.getElementById(`actionButtons`);
  actionButtons.style.visibility = `visible`;
  // Modify at least one attribute of an element in response to user interaction ✅
  // Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties ✅
}

let replay = document.getElementById(`replayButton`);
replay.classList.add(`button`);
replay.addEventListener(`click`, handleReplay);
// Register at least two different event listeners and create the associated event handler functions - #2 ✅

function handleReplay(e) {
  e.preventDefault();
  window.location.reload();
  // Use at least two Browser Object Model (BOM) properties or methods - #2 ✅
}

let newStory = document.getElementById(`newStoryButton`);
newStory.classList.add(`button`);
newStory.addEventListener(`click`, handleNewStory);

function handleNewStory(e) {
  e.preventDefault();

  let inputEls = document.querySelectorAll(`input`);
  inputEls.forEach((inputEl) => {
    inputEl.value = ``;
  });

  alert(`🐻 Enter new words and numbers for a funny forest story 🌲🦫`);
}

// ADDITIONAL REQUIREMENTS ------------

// Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit). ✅

//Commit frequently to the git repository ✅

// Include a README file that contains a description of your application ✅

// Level of effort displayed in creativity, presentation, and user experience ✅

const checkboxContainer = document.getElementById('checkbox-container')
const sectionButton = document.getElementById('section-btn')
const clearButton = document.getElementById('clear-btn-sections')
const newDiv = document.getElementsByClassName('song-section');
const instrumentContainer = document.getElementById('instrument-container')
const instrumentButton = document.getElementById('instrument-btn')
const clearInstruments = document.getElementById('clear-btn-instruments')

// function for creating new song sections with options

let i = 0

function sectionFunction() {

  i += 1

  const checkboxElement = document.createElement('div');
  checkboxElement.setAttribute('class', 'new-section')

  checkboxElement.innerHTML = `

                    <label>Section:</label><br>

                    <input type="text" id="section-${i}" class="section-input">
                           
  `;

  checkboxContainer.appendChild(checkboxElement);
}

// function for deleting song sections
function clearSections() {
  const newDiv = document.getElementsByClassName('new-section');
  while (newDiv.length > 0) newDiv[0].remove();
}

sectionButton.addEventListener('click', sectionFunction);
clearButton.addEventListener('click', clearSections);

// function for creating new instruments with range of prominence

function newInstrument() {

  i += 1

  const instrumentElement = document.createElement('div');
  instrumentElement.setAttribute('class', 'new-instrument')

  instrumentElement.innerHTML = `<input id="instrument-${i}" class="instrument-input" type="text" placeholder="Enter Instrument"><input id="range-${i}" class="range-input" type="range" value="0" max="10" min="0" step=".5" /><br> `;

  instrumentContainer.appendChild(instrumentElement);
}

// function for deleting new instruments with range of prominence
function removeInstruments() {
  const newInst = document.getElementsByClassName('new-instrument');
  while (newInst.length > 0) newInst[0].remove();
}

instrumentButton.addEventListener('click', newInstrument);
clearInstruments.addEventListener('click', removeInstruments)

// function for setting local storage from form inputs

function formSubmit(event) {
  event.preventDefault();
  
  // selecting all text inputs
  const nameInput = document.getElementById('name-input')
  const meaningInput = document.getElementById('meaning-input')
  const moodInput = document.getElementById('mood-input')
  const instrumentInput = document.getElementById('instrument-input')
  const imageryInput = document.getElementById('imagery-input')

  const ideaContainer = document.getElementById('idea-container')

  
  const sections = [];
  for (let j = 1; j <= i; j++) {
    const input = document.getElementById(`section-${j}`);
    if (input) {
      sections.push(input.value);
    }
  }

  const ranges = [];
  for (let r = 1; r <= i; r++) {
    const input = document.getElementById(`range-${r}`);
    if (input) {
      ranges.push(input.value);
    }
  }

  const instruments = [];
  for (let t = 1; t <= i; t++) {
    const input = document.getElementById(`instrument-${t}`);
    if (input) {
      instruments.push(input.value);
    }
  }


    // grouping and setting text inputs as localstorage
    const formTotal = 
    {name: nameInput.value, 
    meaning: meaningInput.value, 
    mood: moodInput.value, 
    instrumentation: instrumentInput.value, 
    imagery: imageryInput.value, 
    sections: sections, 
    instruments: instruments, 
    ranges: ranges,}

  localStorage.setItem("Idea", JSON.stringify(formTotal));





// getting from local storage

  let inputs = JSON.parse(localStorage.getItem("Idea")||"[]");

  if (inputs) {

    let rows = '';
    for (let i = 0; i < inputs.instruments.length; i++) {
      rows += `
    <tr>
      <td>${inputs.instruments[i]}</td>
      <td>${inputs.ranges[i]}</td>
    </tr>
  `;
    }

    // inputs.forEach(input => {

    const newIdea = document.createElement('div');

    newIdea.innerHTML = `
  <div class="new-idea">
    <h2>${inputs.name}</h2>
      <p>Meaning: ${inputs.meaning}</p>
      <p>Mood: ${inputs.mood}</p>
      <p>Instrumentation: ${inputs.instrumentation}</p>
      <p>Imagery: ${inputs.imagery}</p>
      <p>Song Sections: ${inputs.sections}</p>
  <table class="instrument-table">
    <tr>
      <th>Instrument</th>
      <th>Level</th>
    </tr>
    ${rows}
    </table>
  </div>
`;

    ideaContainer.appendChild(newIdea);
  };

}



const form = document.getElementById('idea-form');
form.addEventListener('submit', formSubmit);


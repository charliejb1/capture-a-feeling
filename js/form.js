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

  const testContainer = document.getElementById('test')
  
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
  // let inputs = JSON.parse(localStorage.getItem("Idea"));

  // if (inputs) {

  //   const newIdea = document.createElement('div');

  //   newIdea.innerHTML = `
  //   <h2>${inputs.name}</h2>
  //   <p>Meaning: ${inputs.meaning}<p>
  //   <p>Instrumentation: ${inputs.instrumentation}</p>
  //   <p>Imagery: ${inputs.imagery}</p>
  //   <p>Song Sections: ${inputs.sections}</p>
  //   <table class="instrument-table">
  //     <tr>
  //       <th>Instrument</th>
  //       <th>Level</th>
  //     </tr>
  //     <tr>
  //      <td>${inputs.instruments[0]}</td>
  //      <td>${inputs.ranges[0]}</td>
  //      </tr>
  //      <tr>
  //      <td>${inputs.instruments[1]}</td>
  //      <td>${inputs.ranges[1]}</td>
  //      </tr>
  //      <tr>
  //      <td>${inputs.instruments[2]}</td>
  //      <td>${inputs.ranges[2]}</td>
  //      </tr>
  //      <tr>
  //      <td>${inputs.instruments[3]}</td>
  //      <td>${inputs.ranges[3]}</td>
  //      </tr>
  //      <tr>
  //      <td>${inputs.instruments[4]}</td>
  //      <td>${inputs.ranges[4]}</td>
  //      </tr>
  //      <tr>
  //      <td>${inputs.instruments[5]}</td>
  //      <td>${inputs.ranges[5]}</td>
  //      </tr>
  //      <tr>
  //      <td>${inputs.instruments[6]}</td>
  //      <td>${inputs.ranges[6]}</td>
  //      </tr>
  //      <tr>
  //      <td>${inputs.instruments[7]}</td>
  //      <td>${inputs.ranges[7]}</td>
  //      </tr>
  //      <tr>
  //      <td>${inputs.instruments[8]}</td>
  //      <td>${inputs.ranges[8]}</td>
  //      </tr>
  //      <tr>
  //      <td>${inputs.instruments[9]}</td>
  //      <td>${inputs.ranges[9]}</td>
  //      </tr>
  //      <tr>
  //      <td>${inputs.instruments[10]}</td>
  //      <td>${inputs.ranges[10]}</td>
  //      </tr>
  //    </table>
  // `;

  //  ideaContainer.appendChild(newIdea);
  // };




  window.location.assign('./ideas.html')
};

const form = document.getElementById('idea-form');
form.addEventListener('submit', formSubmit);
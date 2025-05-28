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

  const instrumentElement = document.createElement('div');
  instrumentElement.setAttribute('class', 'new-instrument')

  instrumentElement.innerHTML = `<input class="prominence-input" type="text" placeholder="Enter Instrument"><input class="range-input" type="range"/><br>`;

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

function formSubmit() {
  
  // selecting all text inputs
  const nameInput = document.getElementById('name-input')
  const meaningInput = document.getElementById('meaning-input')
  const moodInput = document.getElementById('mood-input')
  const instrumentInput = document.getElementById('instrument-input')
  const imageryInput = document.getElementById('imagery-input')
  
  const sections = [];
  for (let j = 1; j <= i; j++) {
    const input = document.getElementById(`section-${j}`);
    if (input) {
      sections.push(input.value);
    }
  }

  // grouping and setting text inputs as localstorage
  const formTotal = [nameInput.value, meaningInput.value, moodInput.value, instrumentInput.value, imageryInput.value, sections]
  localStorage.setItem("Idea", formTotal);




  window.location.assign('./dreams.html')
};


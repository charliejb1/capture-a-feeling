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

                    <input type="radio" class="section-input" name="circle+${i}">
                    <label> intro</label><br>

                    <input type="radio" class="section-input" name="circle+${i}">
                    <label> pre-verse</label><br>

                    <input type="radio" class="section-input" name="circle+${i}">
                    <label> verse</label><br>

                    <input type="radio" class="section-input" name="circle+${i}">
                    <label> pre-chorus</label><br>

                    <input type="radio" class="section-input" name="circle+${i}">
                    <label> chorus</label><br>

                    <input type="radio" class="section-input" name="circle+${i}">
                    <label> bridge</label><br>

                    <input type="radio" class="section-input" name="circle+${i}">
                    <label> interlude</label><br>

                    <input type="radio" class="section-input" name="circle+${i}">
                    <label> outro</label><br>
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

  const nameInput = document.getElementById('name-input')
  const meaningInput = document.getElementById('meaning-input')
  const moodInput = document.getElementById('mood-input')
  const introInput = document.querySelectorAll('intro-input')

  const formTotal = [nameInput.value, meaningInput.value, moodInput.value]

  localStorage.setItem("Idea", formTotal);


  window.location.assign('./dreams.html')
}
const checkboxContainer = document.getElementById('checkbox-container')
const sectionButton = document.getElementById('section-btn')
const clearButton = document.getElementById('clear-btn-sections')
const newDiv = document.getElementsByClassName('song-section');
const instrumentContainer = document.getElementById('instrument-container')
const instrumentButton = document.getElementById('instrument-btn')
const clearInstruments = document.getElementById('clear-btn-instruments')

// function for creating new song sections with options
function sectionFunction() {
   
    const checkboxElement = document.createElement('div');
    checkboxElement.setAttribute('class', 'new-section')


    checkboxElement.innerHTML = `

                    <label>Section:</label><br>

                    <input type="checkbox" class="intro-input">
                    <label> intro</label><br>

                    <input type="checkbox" class="pre-verse-input">
                    <label> pre-verse</label><br>

                    <input type="checkbox" class="verse-input">
                    <label> verse</label><br>

                    <input type="checkbox" class="pre-chorus-input">
                    <label> pre-chorus</label><br>

                    <input type="checkbox" class="chorus-input">
                    <label> chorus</label><br>

                    <input type="checkbox" class="bridge-input">
                    <label> bridge</label><br>

                    <input type="checkbox" class="interlude-input">
                    <label> interlude</label><br>

                    <input type="checkbox" class="outro-input">
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
function newInstrument () {
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
const checkboxContainer = document.getElementById('checkbox-container')
const sectionButton = document.getElementById('section-btn')
const clearButton = document.getElementById('clear-btn')
const newDiv = document.getElementsByClassName('song-section');


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

function clearSections() {
  const newDiv = document.getElementsByClassName('new-section');
  while (newDiv.length > 0) newDiv[0].remove();
}

sectionButton.addEventListener('click', sectionFunction);
clearButton.addEventListener('click', clearSections);


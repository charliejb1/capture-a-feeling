const checkboxContainer = document.getElementById('new-div')
const sectionButton = document.getElementById('section-btn')


function sectionFunction() {
   
    const checkboxElement = document.createElement('div');
    checkboxElement.setAttribute('class', 'song-section')


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

sectionButton.addEventListener('click', sectionFunction);


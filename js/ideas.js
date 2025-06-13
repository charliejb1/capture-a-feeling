const ideaContainer = document.getElementById('idea-container')

// getting from local storage
function startFunction() {

  let inputs = JSON.parse(localStorage.getItem("Idea"));

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

startFunction()

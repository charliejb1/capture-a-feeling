const ideaContainer = document.getElementById('idea-container')

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

        const newIdea = document.createElement('div');

        newIdea.innerHTML = `
  <h2>${inputs.name}</h2>
  <p>Meaning: ${inputs.meaning}<p>
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
`;


        ideaContainer.appendChild(newIdea);
    };

}

startFunction()

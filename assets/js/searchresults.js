//Depends
const buttonSearch = document.getElementById("button-search");
const buttonBack = document.getElementById("button-back");
const inputSearch = document.getElementById("input-search");
const inputFilter = document.getElementById("input-filter");
const resultsEl = document.getElementById("results");

//Data

//Functions
function getResults(input, filter) {
  resultsEl.textContent = "";
  const url = `https://www.loc.gov/${
    filter === null ? "search" : filter
  }/?q=${input}&fo=json`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data === null) return;
      for (const result of data.results) {
        displayResult(result);
      }
    });
}

function displayResult(result) {
  console.log(result);
  const resultEl = document.createElement("div");

  const titleEl = document.createElement("h3");
  titleEl.textContent = `${result.title}`;
  resultEl.append(titleEl);

  const dateEl = document.createElement("p");
  dateEl.textContent = `Date: ${result.date}`;
  resultEl.append(dateEl);
  //Subject
  const subjectsEl = document.createElement("p");
  subjectsEl.textContent = `Subject: ${result.subject.toString()}`;
  resultEl.append(subjectsEl);

  if ("description" in result) {
    const descEl = document.createElement("p");
    descEl.textContent = `Description: ${result.description.toString()}`;
    resultEl.append(descEl);
  }
  const btnRead = document.createElement("a");
  btnRead.innerHTML = `<button>Read More</button>`;
  resultEl.append(btnRead);
  //Add to page
  resultsEl.appendChild(resultEl);
}

//User Interactions
//On load, get results from api
window.onload = (event) => {
  const url = new URL(location.href);
  const input = url.searchParams.get("input");
  const filter = url.searchParams.get("filter");

  if (input != null) {
    getResults(input, filter);
  }
};

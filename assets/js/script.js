//Depends
const formEl = document.getElementById("form");
const inputSearch = document.getElementById("input-search");
const inputFilter = document.getElementById("input-filter");

//Functions
//Search click event
function clickHandler_Search(event) {
  event.preventDefault();
  const url = "search-results.html";
  const input = inputSearch.value;
  event.defai;
  const filter = inputFilter.value;
  location.assign(`${url}?input=${input}&filter=${filter}`);
}

//User Interactions
formEl.addEventListener("submit", clickHandler_Search);

//You can edit ALL of the code here

function setup() {
  const selection = document.getElementById("bar");
  selection.addEventListener("change", () => {
    showTech(selection.value);
  });
  const img = document.getElementById("logo");
  img.addEventListener("click", () => {
    window.location = "./";
  });
}

window.onload = setup;

function clearContent() {
  document.querySelectorAll("#container").forEach((el) => el.remove());
}
function selectionChange(selValue) {
  const selection = document.getElementById("bar");
  selection.value = selValue;
  selection.dispatchEvent(new Event("change"));
}
function showTech(selValue) {
  clearContent();

  const mainEl = document.getElementById("mainContent");

  const containEl = document.createElement("div");
  containEl.id = "container";

  const divEl1 = document.createElement("p");
  divEl1.id = "hero-text";
  divEl1.innerText = headers[selValue];
  containEl.appendChild(divEl1);

  const sectionEl = document.createElement("section");
  sectionEl.className = "section";

  let dataArr = [];
  if (selValue == "techOpt") dataArr = getAllTechs();
  else if (selValue == "aniOpt") dataArr = getAllAnimals();
  else if (selValue == "recOpt") dataArr = getAllRecycles();
  else {
    window.location = "./";
  }

  dataArr.forEach((obj) => {
    const cardEl = document.createElement("div");

    const titleEl = document.createElement("h2");
    const imgEl = document.createElement("img");
    const pEl = document.createElement("p");
    const brEl1 = document.createElement("br");
    const brEl2 = document.createElement("br");
    pEl.innerText = obj.summary;
    const spanEl = document.createElement("span");

    pEl.appendChild(brEl1);
    pEl.appendChild(brEl2);
    pEl.appendChild(spanEl);

    cardEl.appendChild(titleEl);
    cardEl.appendChild(imgEl);
    cardEl.appendChild(pEl);

    cardEl.className = "content";
    imgEl.className = "content_image";
    pEl.className = "content-summary";

    titleEl.innerText = obj.name;
    imgEl.src = obj.image;

    spanEl.innerHTML = `<a href = ${obj.url}>Find more</a>`;

    sectionEl.appendChild(cardEl);
  });

  containEl.appendChild(sectionEl);
  mainEl.appendChild(containEl);
}

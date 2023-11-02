let title = document.querySelector(".title");
let incre = document.querySelector(".incre");
let decre = document.querySelector(".decre");

let getText = 0;

function getValues() {
  title.textContent = getText;
}

incre.addEventListener("click", () => {
  getText++;
  getValues();
});

decre.addEventListener("click", () => {
  getText--;
  getValues();
});

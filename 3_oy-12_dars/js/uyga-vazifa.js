// let red = "Qizil";
// let yellow = "Sariq";
// let green = "Yashil";

// function redLight() {
//   document.body.innerHTML = red;
// }

// function yellowLight() {
//   document.body.innerHTML = yellow;
// }

// function greenLight() {
//   document.body.innerHTML = green;
// }

// function tl() {
//   redLight();

//   setTimeout(() => {
//     yellowLight();

//     setTimeout(() => {
//       greenLight();

//       setTimeout(yellowLight, 5_000);
//     }, 2_000);
//   }, 5_000);
// }

// tl();
// setInterval(tl, 14_000);

// let circles = document.querySelectorAll(".circle"),
//   light = 0;

// setInterval(() => {
//   changeLight();
// }, 1000);

// function changeLight() {
//   circles[light].classList = "circle";
//   light++;
//   if (light > 2) {
//     light = 0;
//   }
//   const selectLight = circles[light];
//   selectLight.classList.add(selectLight.getAttribute("color"));
// }

// let arr = ["Hilola", "Muhayyo", "Sojida", "Jamila"];
// let num = [1, 23, 45, 36, 345, 23, 4343, 6];
// console.log(`${arr[1]} ${num[3]} yoshda`);

const title = document.getElementById("title");
const soat = new Date().getHours();
const minute = new Date().getMinutes();
const second = new Date().getSeconds();

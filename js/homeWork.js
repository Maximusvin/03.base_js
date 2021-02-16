// task-1
const inputRef = document.querySelector(".input-task-home-1");
const btnRef = document.querySelector(".btn-home-js1");
const th1 = document.querySelector(".th1-js");

btnRef.addEventListener("click", (event) => {
  event.preventDefault();
  const age = inputRef.value;
  inputRef.value = "";

  if (Number.isNaN(+age)) {
    th1.textContent = "Enter a number, not text";
  } else if (!age.trim()) {
    th1.textContent = "Enter data";
  } else {
    th1.textContent = `Привіт! Мені - ${age} років`;
  }
});

// task-2
const inputRef2 = document.querySelector(".input-task-home-2");
const btnRef2 = document.querySelector(".btn-home-js2");
const th2 = document.querySelector(".th2-js");

const currentYear = new Date().getFullYear();

btnRef2.addEventListener("click", (event) => {
  event.preventDefault();
  const yearOfBirth = inputRef2.value;
  inputRef2.value = "";

  if (Number.isNaN(+yearOfBirth)) {
    th2.textContent = "Enter a year, not text";
  } else if (!yearOfBirth.trim()) {
    th2.textContent = "Enter data";
  } else {
    th2.textContent = `Вам ${currentYear - yearOfBirth} років`;
  }
});

// task-3
const inputOfHeightRef = document.querySelector(".input-task-home-3_height");
const inputOfWidthtRef = document.querySelector(".input-task-home-3_width");
const btnRef3 = document.querySelector(".btn-home-js3");
const th3 = document.querySelector(".th3-js");

btnRef3.addEventListener("click", (event) => {
  event.preventDefault();
  const heightOfRectangle = inputOfHeightRef.value;
  const widthOfRectangle = inputOfWidthtRef.value;
  inputOfHeightRef.value = "";
  inputOfWidthtRef.value = "";

  th3.textContent = `Периметр прямокутника ${
    heightOfRectangle * 2 + widthOfRectangle * 2
  } см`;
});

// task-4
const input4Ref = document.querySelector(".input-task-home-4");
const btnRef4 = document.querySelector(".btn-home-js4");
const th4 = document.querySelector(".th4-js");

const PI = 3.14;

btnRef4.addEventListener("click", (event) => {
  event.preventDefault();
  const r = input4Ref.value;
  input4Ref.value = "";

  th4.textContent = `Площа круга ${PI * r ** 2} см`;
});

// task-5
const input5Ref = document.querySelector(".input-task-home-5");
const btnRef5 = document.querySelector(".btn-home-js5");
const th5 = document.querySelector(".th5-js");

const averageSpeed = 50;

btnRef5.addEventListener("click", (event) => {
  event.preventDefault();
  const time = input5Ref.value;
  input5Ref.value = "";

  th5.textContent = `Плануєма відстань становить ${averageSpeed * time} км`;
});

// task-6
const inputKmRef = document.querySelector(".input-task-home-6-km");
const inputMlRef = document.querySelector(".input-task-home-8-ml");
const th6 = document.querySelector(".th6-js");

const Miles = 0.621371;

inputKmRef.addEventListener("input", (event) => {
  event.preventDefault();
  inputMlRef.value = (inputKmRef.value * Miles).toFixed(3);
});

inputMlRef.addEventListener("input", (event) => {
  event.preventDefault();
  inputKmRef.value = (inputMlRef.value / Miles).toFixed(1);
});

// task-7
const balanceRef = document.querySelector(".input-task-home-7b");
const priceRef = document.querySelector(".input-task-home-7p");
const btnRef7 = document.querySelector(".btn-home-js7");
const th7 = document.querySelector(".th7-js");

btnRef7.addEventListener("click", (e) => {
  e.preventDefault();
  const balance = balanceRef.value;
  const price = priceRef.value;
  const bonus = 0.02;
  const volume = Math.floor(balance / price);
  const currentBalance = balance % price;

  th7.innerHTML = `<p>Ви зможете купити ${volume} літрів бензину.</p>
   <p>При цьому ваш баланс складатиме ${currentBalance} грн.</p>
   <p>Ви накопичили ${(balance - currentBalance) * bonus} грн бонусом.</p>
    <p>Дякуємо за покупку.</p>`;
});

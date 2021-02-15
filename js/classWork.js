// task-1
const t1 = document.querySelector(".t1-js");
t1.textContent = "Hello World";

// task-2
const t2 = document.querySelector(".t2-js");

const message = ["Я люблю фронтенд", "Я люблю JS"];
const html = message.map((item) => `<li>${item}</li>`);

t2.insertAdjacentHTML("beforeend", html.join(""));

// task-3
const t3 = document.querySelector(".t3-js");

let admin = undefined;
let name1 = "Max";

admin = name1;

t3.textContent = admin;

// task-4
// Запитати в юзера його імя, додати до імені – “Батькович” та вивести
// його на екран
const inputRef = document.querySelector(".input");
const btnRef = document.querySelector(".btn-js4");
const t4 = document.querySelector(".t4-js");

btnRef.addEventListener("click", (event) => {
  event.preventDefault();
  const user = inputRef.value;
  inputRef.value = "";

  t4.textContent = `${user} Батькович`;
});

// task-5
const t5 = document.querySelector(".t5-js");
let variable;
t5.textContent = "See the task in the console";

console.log(variable);

// Выберите section с id “container” без метода querySelector и с ним.

const container1 = document.getElementById("container");
const container2 = document.querySelector("#container");
console.log(container1);
console.log(container2);

// Выберите все li с классом "second".

const secondLi = document.querySelectorAll("li.second");
console.log(...secondLi);

// Выберите li с классом "third" внутри ol .

const thirdLi = document.querySelector("ol > li.third");
console.log(thirdLi);

// Поместите текст “Hello” в элемент с классом “header”.

document.querySelector(".header").textContent = "Hello";

// Добавьте класс “main” элементу с классом “footer”, а затем уберите его.

const footer = document.querySelector(".footer");
footer.classList.add("main");
footer.classList.remove("main");
console.log(footer);

// Создайте новый элемент li, затем добавьте в него текст "four".

const newLi = document.createElement("li");
newLi.textContent = "four";

console.log(newLi);

// Поместите li в элемент ul.

const ul = document.querySelector("ul");
ul.append(newLi);

// Сделайте зелёный фон всем li внутри ol.

const li = document.querySelectorAll("ul li");

for (let key of li) {
  key.style.backgroundColor = "green";
}

// Удалите div с классом “footer”.

const footer1 = document.querySelector(".footer");
footer.remove();

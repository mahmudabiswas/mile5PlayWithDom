const h1 = document.getElementById("text1");
// h1.innerText = "hello";
// h1.textContent = "hello everyOne";

const item = document.getElementsByClassName("item");
// for (let items of item) {
//   items.style.color = "red";
// }

// for (let i = 0; i <= item.length; i++) {
//   item[i].style.backgroundColor = "red";
// }

// const li = document.querySelector("item");
// console.log(li);

// const parent = document.querySelector(".grandParent");
// const children = parent.children;
// console.log(children[0]);

// const gp = document.querySelector(".grandParent");
// const children = gp.querySelectorAll(".listItem");
// console.log(children);

// const children = document.querySelector(".listItem");
// const parent = children.parentElement;
// console.log(parent.parentElement.parentElement);

// const children = document.querySelector(".listItem");
// const gp = children.closest(".grandParent");
// console.log(gp);

// const items = document.getElementsByClassName("items");
// console.log(items.previousElementSibling);

// const container = document.getElementById("gp");
// const h3 = document.createElement("h1");
// h3.innerText = "made by js";
// container.appendChild(h3);

const container = document.getElementById("gp");
const div = document.createElement("div");
div.innerHTML = `
<h1>Hello</h1>
<h2>Hi</h2>
<h3>wellcome</h3>
<h4>that's good</h4>
`;

// div.className = "commonClass";
div.classList.add("commonClass");
div.setAttribute("title", "myTitle");
div.setAttribute("id", "newId");

const parent1 = document.getElementById("classes");
container.insertBefore(div, classes);

// container.appendChild(div);

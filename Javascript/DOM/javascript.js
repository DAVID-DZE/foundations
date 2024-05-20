const container = document.querySelector("#container");

// a <p> with red text that says “Hey I’m red!”
const p = document.createElement("p");
p.textContent = "Hey I'm red";
p.style.color = "red";
container.appendChild(p);

// an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement("h3");
h3.textContent = "I'm blue h3";
h3.style.color = "blue";
container.appendChild(h3);

// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”

const div = document.createElement("div");

div.style.borderColor = "black";
div.style.backgroundColor = "pink";

const div_h1 = document.createElement("h1");
div_h1.textContent = "I'm in a div";
div.appendChild(div_h1);

const div_p = document.createElement("p");
div_p.textContent = "ME TOO!";
div.appendChild(div_p);

container.appendChild(div);


const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  alert("Hello World");
});



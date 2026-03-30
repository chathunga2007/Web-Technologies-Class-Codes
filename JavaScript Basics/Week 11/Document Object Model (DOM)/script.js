// 1. Selecting Elements

//getElementById
const element1 = document.getElementById("element01");
//getElementsByTagName
const element2 = document.getElementsByTagName("p");
//getElementsByClassName
const element3 = document.getElementsByClassName("myClass");
//getElementsByName
const element4 = document.getElementsByName("myName");
//querySelector
const element5 = document.querySelector(".item");
console.log(element5.textContent);
//querySelectorAll
const element6 = document.querySelectorAll(".item");
console.log(element6.textContent);

//2. Manipulating Elements

//Manipulating Text
document.getElementById("txt").textContent = "Welcome";
//Manipulating HTML
document.getElementById("txt").innerHTML = "<i>Welcome</i>";
//Manipulating Attributes
const attrElement = document.getElementById("img").src = "image.jpg";
console.log(attrElement);
//Manipulating Styles
let styleElement = document.getElementById("title");
styleElement.style.color = "red";
styleElement.style.fontSize = "24px";

// 3. Creating and Removing Elements

//Creating Elements
let p = document.createElement("p");
//Add Content to the Element
p.textContent = "This is a new paragraph.";
//Add to Page
document.body.appendChild(p);

//Removing Elements
function dele() {
    document.body.removeChild(document.getElementById("removeMe"));
}
    
    

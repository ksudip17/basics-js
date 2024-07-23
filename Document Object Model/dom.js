//Question no 1 :- Create a new Input and button element on the page using JS only. Set the text of Button "Click Me!!"//

let button = document.createElement("button");
let input = document.createElement("input");

button.innerText = "Click Me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

//Question no 2 :- Add following attributes to the element : 1) change placeholder value input to "username" 2)change the id of button to btn.//

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

//Question no 3 :- Access the btn using the querySelector and button id. Change the button background color to blue and text to white. //

let btn = document.querySelector("#btn");
button.classList.add("btnStyle");

//Question no 4 :- Create an h1 element on the page and set its text to "DOM Practice" underlined. Change it color to purple.//

let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
h1.classList.add("h1Style");
document.querySelector("body").append(h1);

// Question No 5 :- Create a p tag on the page and set its text to "Apna Collge Delta Practice", where delta is Bold.//

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice.";
document.querySelector("body").append(p);

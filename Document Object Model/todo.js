let button = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

button.addEventListener("click" , function() {
    let item = document.createElement("li");
    item.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");


    item.appendChild(delBtn);
    ul.appendChild(item);
    input.value = "";
} );

ul.addEventListener("click" , function(event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})
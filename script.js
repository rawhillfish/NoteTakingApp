// Lecture: Project - Coding Task 3
/*
- Add ability to click 'Add Button'
- When I click 'Add button' two things need to happen
1a. Create a new note
1b. Add content of 'input box' to new note
2. Clear text in 'input box', and show placeholder


*/
//create variable in JS for the listitems
var listItems = document.getElementById("list");
//create variable in JS for the add input box
var input = document.getElementById("add-input");
//create variable in JS for the button
var submitbutton = document.getElementById("add-btn");

//var newListItem = document.createElement("li");
//newListItem.setAttribute

var toBeClonedElement = document.getElementById("clone");

var newListItem = clone.cloneNode(true);

/*
submitbutton.onclick = function () {
  console.log("clicked");
  listItems.appendChild(newListItem);
};
*/
submitbutton.addEventListener("click", function () {
  event.preventDefault();
  console.log("clicked");
  listItems.appendChild(newListItem);
  //newListItem.innerHTML(input.nodeValue);
  console.log(input.nodeValue);
});

//addEventListener(click);
console.log(listItems);

console.log(input);

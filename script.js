// Lecture: Project - Coding Task 3
/*
- Add ability to click 'Add Button'
- When I click 'Add button' two things need to happen
1a. Create a new note
1b. Add content of 'input box' to new note
2. Clear text in 'input box', and show placeholder


*/
//create variable in JS for the listitems
var ul = document.querySelector("ul");
//create variable in JS for the add input box
var input = document.getElementById("add-input");
//create variable in JS for the button
var submitbutton = document.getElementById("add-btn");

function cleartext() {
  input.value = "";
}
//var newListItem = document.createElement("li");
//newListItem.setAttribute

//create variable in JS to be cloned
//var toBeClonedElement = document.getElementById("clone");
//create newListItem variable as a clone of toBeClonedElement

//var newListItem = clone.cloneNode(true);
/*var newListItem = document.createElement(li),
  p1 = document.createElement("p"),
  p2 = document.createElement("p"),
  icon1 = document.createElement("i"),
  icon2 = document.createElement("i"),
  input = document.createElement("input");
*/
/*
submitbutton.onclick = function () {
  console.log("clicked");
  listItems.appendChild(newListItem);
};
*/

// add an event listener to the button for when it is clicked
submitbutton.addEventListener("click", function () {
  // prevent default beavhiour of event (refresh the page)
  event.preventDefault();

  //create the new list item
  var li = document.createElement("li"),
    //create the first <p> in new list item
    p1 = document.createElement("p"),
    //create the second <p> in new list item
    p2 = document.createElement("p"),
    //create the first <i> in new list item
    icon1 = document.createElement("i"),
    //create the second <i> in new list item
    icon2 = document.createElement("i"),
    //create the the input in new list item
    innerInput = document.createElement("input");

  //add class to input in new list item
  innerInput.className = "edit-note";
  //add attribute to input in new list item
  innerInput.setAttribute("type", "text");
  //add class(css) to icon1 in new list item
  icon1.className = "fa fa-pencil-square-o";
  //add class(css) to icon2 in new list item
  icon2.className = "fa fa-times";
  //add input value first <p>
  p1.innerHTML = input.value;
  // add the two icons to second <p> in html
  p2.appendChild(icon1);
  p2.appendChild(icon2);
  // add the two <p> and <input> into html of <li>
  li.appendChild(p1);
  li.appendChild(p2);
  li.appendChild(innerInput);
  // console.log("clicked");
  //listItems.appendChild(newListItem);
  //newListItem.innerHTML(input.nodeValue);
  //console.log(input.nodeValue);

  var list = document.getElementById("list");
  console.log(li);
  list.appendChild(li);
  cleartext();
});

//addEventListener(click);
//console.log(ul);

//console.log(input);

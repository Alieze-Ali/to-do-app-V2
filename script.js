/* Ideas to implement
* Cap tasks at 5 - Done!
* Make an alert to finish 5 first - Done!
* Stretch: Toggle the button
* Change UI to "Barbie Theme" - In Progress
- Icons
- Fonts
- Change Palette to Pink
*/


// create vars for form 
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// add addTask function
/*
* if input box in empty alert "You must write something"
* once we add a task create an li element
* display in list container
* clear the box 
*/

// initialize a global counter variable
let taskCounter = 1

function addTask(){
    // retrieves the 'inputBox' value
    const inputValue = inputBox.value.trim();
    // checks if there's a value
    if(inputValue === ''){
        alert("You must write something!");
    // exits the function if the input is empty
     return; 
}
    // Check the number of tasks
    // Variable that calculates the number of child elements inside 'listContianer'
    const taskCount = listContainer.children.length;
    // Checks if 'taskCount' is >= 5, if <5, sends an alert
    if(taskCount >= 5){
        alert("Complete these five tasks first!");
    // exits the function once condition is met
        return;
    }

    // add task list
    // creates a new li element
    // sets content to the value the user inputs
    // shows up as new task in the to-do list
    const li = document.createElement("li");
    li.textContent = inputValue;

    // creates a span element for inline content input
    // sets the text content to be an 'x' symbol
    // puts the symbol on the right side of the list item
    const span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);

    // enables another task or 'child' to be added to the list
    // sets inputBox back to zero so that another task can be added
    // stores the current state of the task list
    listContainer.appendChild(li);
    inputBox.value = "";
    saveData();

    // save the current state of the task list to the browsers local storage
    // dataToSave gets the content inside listContainer
    // saves it to 'localStorage' under the key 'data' 
    // function saveData() {
    //     const dataToSave = listContainer.innerHTML;
    //     localStorage.setItem("data", dataToSave);
    // }
    
    taskCounter ++;

}

// Clearing the tasks
listContainer.addEventListener("click", function(e){
    console.dir(e.target)
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


// Storing info in Browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

//
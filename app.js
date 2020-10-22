// ===== TOC =====
// - DOM elements
// - Master Functions
// - Header elements 
// - Table
// -- Table title
// ---- Title buttons
// -- Table body
// ===============

// - DOM elements
const inputTitle = document.querySelector("#title");
const inputURL = document.querySelector("#url");

const tableTitle = document.querySelector("#table-title");
const tableURL = document.querySelector("#table-url");

const clearTable = document.querySelector("#clear");
const printTable = document.querySelector("#print");
const copyTable = document.querySelector("#copy");
const saveTable = document.querySelector("#save");

const table = document.querySelector("table");
const tableBody = document.querySelector("tbody");

const deleteRow = document.querySelector("#deleterow")
const addRow = document.querySelector("#addrow")


// - Master functions
// Create new row function
function createRow (currRow) {
    // Add new row after current
    const newRow = tableBody.insertRow(parseInt(currRow.rowIndex));
    console.log(newRow.rowIndex);
    // Add new cells into new row
    for (let i = 0; i < 4; i++) {
        let newCell = newRow.insertCell(i);
        newCell.setAttribute("contenteditable", "");
    }
}


// - Header elements
// Project title input defocused when Enter pressed ==> look (-- Table title) section


// - Table
// -- Table title
// Table title dynamically changes while typing
inputTitle.addEventListener("keydown", (e) => {
    tableTitle.innerHTML = inputTitle.value;
    if (!tableTitle.innerHTML) {
        tableTitle.innerHTML = "Lorem ipsum dolor sit amet consectetur.";
    }
    if(e.key == "Enter") {
        inputTitle.blur();
    }
})

// Table url dynamically changes while typing
inputURL.addEventListener("keydown", (e) => {
    tableURL.setAttribute("href", inputURL.value);
    tableURL.innerHTML = inputURL.value;
    if (!tableURL.innerHTML) {
        tableURL.setAttribute("href", "https://www.google.com");
        tableURL.innerHTML = "www.google.com";
    }
    if(e.key == "Enter") {
        inputURL.blur();
    }
})


// ---- Title buttons
// Clear button functionality
clearTable.addEventListener("click", (e) => {
    e.preventDefault();
    const sampleRow = tableBody.firstElementChild;
    tableBody.innerHTML = "";
    tableBody.appendChild(sampleRow);
})

// Print button
printTable.addEventListener("click", (e) => {
    e.preventDefault();
    window.print();
})

// Copy button
copyTable.addEventListener("click", (e) => {
    e.preventDefault();
    window.getSelection()
    // console.log(table.execCommand("copy"))
})

// -- Table body
// Adjust small buttons to the active row
// document.addEventListener("click", (e) => {
//     // Get current row
//     const currentRow = e.target.parentElement;
//     // Get small buttons
//     const smBtn = document.querySelector(".table-button");
//     if (e.target.parentElement.parentElement.tagName == "TBODY") {
//         // Append small buttons inside the last cell
//         currentRow.lastElementChild.style.position = "relative"
//         currentRow.lastElementChild.appendChild(smBtn)
//         smBtn.style.position = "absolute"
//         smBtn.style.transform = "translate(" + currentRow.lastElementChild.offsetWidth + "px, -" + currentRow.lastElementChild.offsetHeight / 2 + "px)";
//         smBtn.classList.remove("hidden")
//         // createRow(e.target.parentElement)
//         console.log(tableBody.children)
//     } else {
//     }
// })



// Add "create new row" function to its button
// addRow.addEventListener("click", (e) => {
//     e.preventDefault();
//     const parentRow = addRow.parentElement.parentElement.parentElement;
//     console.log(parentRow.rowIndex)
//     createRow(parentRow);
// })
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


// - Master functions


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
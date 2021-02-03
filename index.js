// Your code goes here
//setting up an event listener

document.addEventListener("DOMContentLoaded", function () {
    detectDOM();
});

function detectDOM() {
    document.getElementById("text")
    .innerHTML = "This is really cool!";
}
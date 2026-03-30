//Event Listener
document.getElementById("btn").addEventListener("click", function() {
    alert("Click");
});

//Mouse Event
document.getElementById("btn").addEventListener("mouseover", function() {
    alert("Mouse Over");
});

//Keyboard Event
document.getElementById("btn").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        alert("Enter Key Pressed");
    }
});

//Form Event
document.getElementById("submit").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    alert("Form Submitted");
});

//Validation Event
let input = document.getElementById("name").value;
if(input === "") {
    alert("Name is required");
};
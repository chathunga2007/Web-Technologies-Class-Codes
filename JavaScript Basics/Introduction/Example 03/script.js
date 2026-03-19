function changeName() {
    document.getElementById("studentName").innerHTML = "Chathunga Bimsara";
}

function changeStatus() {
    document.getElementById("studentStatus").innerHTML = "Status: Completed JavaScript Intro";
}

function showDate() {
    document.getElementById("todayDate").innerHTML = "Date: " + new Date().toDateString();
}

function changeTheme() {
    document.body.style.backgroundColor = "aqua";
}
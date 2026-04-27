console.log("Start");

setTimeout(() => {
    console.log("This message is displayed after 2 seconds.");
}, 2000);

console.log("End");

const id = setInterval(() => {
    console.log("Running every 3 seconds...");
}, 3000);

setTimeout(() => {
    clearInterval(id);
    console.log("Stopped the interval.");
}, 5000);
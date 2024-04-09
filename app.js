
// let count = 0;
// const counterElement = document.querySelector("#counter");

// const updateCounter = () => {
//     counterElement.textContent = count;
// };
// const decrease = () => {
//     count--;
//     updateCounter();
// };
// const reset = () => {
//     count = 0;
//     updateCounter();
// };
// const increase = () => {
//     count++;
//     updateCounter();
// };

let count = 0;
const counterElement = document.getElementById("counter");

const updateCounter = () => {
    counterElement.textContent = count;
};
const decrease = () => {
    count--;
    updateCounter();
};
const reset = () => {
    count = 0;
    updateCounter();
};
const increase = () => {
    count++;
    updateCounter();
};
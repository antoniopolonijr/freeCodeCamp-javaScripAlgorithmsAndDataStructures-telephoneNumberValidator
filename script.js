/// Telephone Number Validator

// variables assigned to access elements in HTML document
const convertBtn = document.getElementById("convert-btn"); // set the "Convert" buttom
const clearBtn = document.getElementById("clear-btn"); // set the "Convert" buttom
const numberInput = document.getElementById("number"); // set the "input"
const output = document.getElementById("output"); // set the "output"

// TODO
// function to check the User Input
const checkUserInput = () => {};

// TODO
// function to clear Output
const clearOutput = () => {};

// Event Listeners

// event listener to call the clearOutput function when users click the Clear button.
clearBtnBtn.addEventListener("click", clearOutput);

// event listener to call the checkUserInput function when users click the Check button.
convertBtn.addEventListener("click", checkUserInput);

// event listener to call the checkUserInput function when users press the Enter / Return key.
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // method to stop the browser from refreshing the page after submitting the form.
    checkUserInput();
  }
});

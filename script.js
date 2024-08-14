/// Telephone Number Validator

// variables assigned to access elements in HTML document
const checkBtn = document.getElementById("check-btn"); // set the "Check" buttom
const clearBtn = document.getElementById("clear-btn"); // set the "Clear" buttom
const userInput = document.getElementById("user-input"); // set the "input"
const resultsDiv = document.getElementById("results-div"); // set the "output"

/// Functions

// function to check if the user input is empty, or it's a Valid format for US phone number
const checkUserInput = (originalUserInput) => {
  if (originalUserInput === "") {
    // if the number input is empty
    window.alert("Please provide a phone number");
    return; // to break out of this function early. This will prevent future code in this function from running.
  }

  // TODO check if the input is valid
};

// Event Listeners

// event listener to clear input and output text when users click the Clear button.
clearBtn.addEventListener("click", () => {
  userInput.value = ""; // clear the input text in the html
  resultsDiv.textContent = ""; // clear the output text in the html
});

// event listener to call the checkUserInput function when users click the Check button.
checkBtn.addEventListener("click", () => {
  checkUserInput(userInput.value); // take the value of text input and execute the checkUserInput function
  userInput.value = ""; // clear the input text in the html
});

// event listener to call the checkUserInput function when users press the Enter / Return key.
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // method to stop the browser from refreshing the page after submitting the form.
    checkUserInput(userInput.value); // take the value of text input and execute the checkUserInput function
    userInput.value = ""; // clear the input text in the html
  }
});

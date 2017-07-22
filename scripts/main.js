//Advice: 
//Do use data attributes...
//Do break your code up into functions...
//Do try to move "hard-coded" values into variables/constants...
//(For example, if you keep typing the same selector string over and over,
//that's a good sign that you should create a global variable.)

//GLOBAL VARIABLES HERE:
COFFEE_SELECTOR = '[data-coffee-order="coffeeOrder"]'
EMAIL_SELECTOR = '[data-email-input="email"]'




//2. save data to local storage

function storeUserInput(key, value) {
    localStorage.setItem(key, value);
}


//1.a When the user submits in a Text Area, get data from form:

function getUserTextInput(textArea) {
    var $input = $(textArea); //defines variable for the form filed where user inputs their coffee order
    var $key = $input.attr('name'); //defines variable for the key names
    var $value = $input.val(); //defines variable for key values
    storeUserInput(key, value); //calls a a previously devined function that will wtore the user's input to local storage
}

//1b. When the user submits in a Dropdown Menu, get data from form:


//1c. When the user submits in a Radio Button, get data from form:


//3. When the user refreshes the browser, repopulate the form with the data

function populateInputOnRefresh() {
  
}






//4. Main function: all the things will be done/executed by main

function main() {
    form.on('submit', function(event) {
            getUserTextInput(COFFEE_SELECTOR);
            getUserTextInput(EMAIL_SELECTOR);

    });
}

main();
let words = [
    "Apple",
    "Pencil",
    "Pen",
    "Chair",
    "Helmet",
    "Grapes",
    "Tub",
    "Trophy",
    "Cookie",
    "Donut",
    "Shirt",
    "Bat",
    "Ash",
    "Bell",
    "Chat",
    "Ball",
    "Eye",
    "Fish",
    "Zip",
    "Game",
    "Juice",
    "Orange",
    "Fan",
    "Ice",
  ];
  words.sort();
  let input = document.getElementById("input");
  let suggestion = document.getElementById("suggestion");
  //Enter key code
  const enterKey = 13;
  
  window.onload = () => {
    input.value = "";
    clearSuggestion();
  };
  
  const clearSuggestion = () => {
    suggestion.innerHTML = "";
  };
  
  const caseCheck = (word) => {
    //Array of characters
    word = word.split("");
    let inp = input.value;
    //loop through every character in ino
    for (let i in inp) {
      //if input character matches with character in word no need to change
      if (inp[i] == word[i]) {
        continue;
      } else if (inp[i].toUpperCase() == word[i]) {
        //if inp[i] when converted to uppercase matches word[i] it means word[i] needs to be lowercase
        word.splice(i, 1, word[i].toLowerCase());
      } else {
        //word[i] needs to be uppercase
        word.splice(i, 1, word[i].toUpperCase());
      }
    }
    //array to string
    return word.join("");
  };
  
  //Execute function on input
  input.addEventListener("input", (e) => {
    clearSuggestion();
    //Convert input value to regex since string.startsWith() is case sensitive
    let regex = new RegExp("^" + input.value, "i");
    //loop through words array
    for (let i in words) {
      //check if input matches with any word in words array
      if (regex.test(words[i]) && input.value != "") {
        //Change case of word in words array according to user input
        words[i] = caseCheck(words[i]);
        //display suggestion
        suggestion.innerHTML = words[i];
        break;
      }
    }
  });
  
  //Complete predictive text on enter key
  input.addEventListener("keydown", (e) => {
    //When user presses enter and suggestion exists
    if (e.keyCode == enterKey && suggestion.innerText != "") {
      e.preventDefault();
      input.value = suggestion.innerText;
      //clear the suggestion
      clearSuggestion();
    }
  });
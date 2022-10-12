// Declaration

const serch = document.querySelector(".search-input"); //for div
const inputBox = document.querySelector("input"); //input tag
const suggBox = document.querySelector(".autocom-box"); //for suggestion div
const icon = document.querySelector(".icon"); //serch icon
let   linkTag = document.querySelector("a"); //anchor tag
let   webLink; //for google serch


// onkeyup Event and e.target value means text entered in the search input.

inputBox.onkeyup = (e)=>{
    let userData = e.target.value; 

    let serchArray = [];  //Empty Array

    if(userData){
        icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q= ${userData}`; //Google Serch link When you Click on Serch icon Serch from the serch bar 
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }


        // Use Array Method to filter data into upper case

        serchArray = suggestions.filter((data)=>{
            return data.toLocaleUpperCase().startsWith(userData.toLocaleUpperCase());   //String.prototype.toLocaleUpperCase() & toLocaleLowerCase().
        });

        // use of map method to calling a function for every array element.

        serchArray = serchArray.map((data)=>{
            return data = `<li>${data}</li>`;
        });

        serch.classList.add("active");   //Dom Properties classList and add
        showSuggestions(serchArray);
        let allList = suggBox.querySelectorAll("li");

        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        serch.classList.remove("active"); //Dom Properties classList and remove
    }
}



function select(element){
    let selectData = element.textContent; //Dom Properties property sets or returns the text content of the specified node
    inputBox.value = selectData;

    icon.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectData}`; //Google Serch link When you Click on Serch icon serch in google
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    serch.classList.remove("active");  //remove active means 1 li 
}


function showSuggestions(list){  //For Suggestion Script 
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');  //Array method Join 
    }
    suggBox.innerHTML = listData;
}

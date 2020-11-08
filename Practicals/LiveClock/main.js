// Selector

const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const date = document.getElementById("date");
//Shift+alt+downarroe

//Event Listener

name.addEventListener("keyPress",setName);
name.addEventListener("blur",setName);


//Functions

function showTime(){

    let today = new Date();
    let hour = today.getHours();      //8
    let min = today.getMinutes();       //32
    let sec = today.getSeconds();       //00
    let todayDate = today.toDateString();  //fri nov 06 2020

    //am pm format
    const amPm = hour>12 ?'PM' : 'AM';

    //12 hour format
    hour = hour%12 || 12;

    //output time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span>:</span>${amPm}`;
    //hh:mm:ss AM (Required Time FOrmat)

    setTimeout(showTime,1000);      //1000ms = 1 sec

}
//adding zero to less than 10
function addZero(n){
    return((parseInt(n,10)<10 ? '0' : '')+n);
}

function setGreeting(){

    let today = new Date();
    let hour = today.getHours();
    if(hour<12){
        document.body.style.backgroundImage = 'url("")';
        greeting.innerHTML = "Good Morning";
    }
    else if(hour<18){
        document.body.style.backgroundImage = 'url("")';
        greeting.innerHTML = "Good Afternoon";
    }
    else{
        document.body.style.backgroundImage = 'url("")';
        greeting.innerHTML = "Good Evening";
        document.body.style.color = "white";
    }
}
function getName(){
    if(localStorage.getItem('myName')===null){
        name.innerHTML = "[Enter Name]";
    }
    else{
        name.innerHTML = localStorage.getItem("myName");
    }
}

// create a function to store data in local storage

function setName(e){
    if(e.type==="keypress"){
        if(e.keyCode===13)
        localStorage.setItem('myName',e.target.innerHTML);
        name.blur();
    }
    else{
        localStorage.setItem('myName',e.target.innerHTML);
    }
}

//Function call

showTime();
setGreeting();
getName();
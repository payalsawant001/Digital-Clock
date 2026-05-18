let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let ampm = document.getElementById("ampm");

let greeting = document.getElementById("greeting");

let day = document.getElementById("day");
let date = document.getElementById("date");

function showTime(){

    const time = new Date();

    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    let currentDate = time.getDate();
    let currentYear = time.getFullYear();

    let currentDay = time.getDay();
    let currentMonth = time.getMonth();

    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


    // AM PM

    if(hr >= 12){
        ampm.innerText = "PM";
    }
    else{
        ampm.innerText = "AM";
    }


    // Greeting

    if(hr < 12){
        greeting.innerText = "Good Morning";
    }
    else if(hr < 18){
        greeting.innerText = "Good Afternoon";
    }
    else{
        greeting.innerText = "Good Evening";
    }


    // Convert 24hr to 12hr

    if(hr > 12){
        hr = hr - 12;
    }

    if(hr == 0){
        hr = 12;
    }


    // Add 0 before numbers

    if(hr < 10){
        hr = "0" + hr;
    }

    if(min < 10){
        min = "0" + min;
    }

    if(sec < 10){
        sec = "0" + sec;
    }


    // Show in HTML

    hour.innerText = hr;
    minute.innerText = min;
    second.innerText = sec;

    day.innerText = days[currentDay];

    date.innerText =
    `${currentDate} ${months[currentMonth]} ${currentYear}`;

}


showTime();

setInterval(showTime,1000);

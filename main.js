const calsuisField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#converter");
const tempType = document.querySelector("#temp-type");
const timeE1 = document.getElementById('time');

window.addEventListener("laod" , () =>{
    degree.value = "";
    calsuisField.innerHTML = "";
})

convertBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    convertToCelsius();


    convertBtn.innerHTML = "<span><i class='fa-solid fa-spinner'></i> Converting...</span>"

    setTimeout(() =>{
        convertBtn.innerHTML = "<span>Convert</span>"
    }, 1000)
})

function convertToCelsius (){
    let inputValue = degree.value;
   setTimeout(() =>{
    if(tempType.value === "fahrenheit"){
        const fahrenheitToCelsius = (inputValue - 32) * (5/9);
        calsuisField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg; c`;
    }
    else if(tempType.value === "kelvin"){
        const kelvinToCelsius = inputValue - 273.15;
        calsuisField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg; c`;
    }
   })
}
setInterval(() =>{
    const time = new Date();
    const hour = time.getHours();
    const hourIn12HrFormat = hour >= 13 ? hour%12: hour
    const mintues = time.getMinutes();
    const ampm = hour  >= 12 ? 'PM' : 'AM'

    timeE1.innerHTML = hourIn12HrFormat + ':' + mintues+ '' + `<span id="am-pm"> ${ampm} </span>`

}, 1000);



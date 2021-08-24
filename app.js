// all elements
let calToggleSwitch = document.querySelector('#cal-switch')

let curToggleSwitch = document.querySelector('#cur-switch')

let status = document.querySelector('#status')

let investmentText = document.querySelector('#investment-text')

let Investment = document.querySelector('#Investment')

let numberOfYears = document.querySelector("#numberOfYears")

let expectedRate = document.querySelector("#expected")

let Result = document.querySelector(".calculate")

let totalInvest = document.querySelector('#total')

let amountGained = document.querySelector('#Gained')

let Maturity = document.querySelector("#maturity")

// functions
function lumpsum(){
    Maturity.value = Math.round(Math.pow((1 + expectedRate.value / 100), numberOfYears.value) * Investment.value)
}

function sip(){
    Maturity.value = Math.round((Math.pow((1 + (Math.pow((1 + expectedRate.value / 100), (1 / 12)) - 1)), (numberOfYears.value * 12)) - 1) / (Math.pow((1 + expectedRate.value / 100), (1 / 12)) - 1) * Investment.value)
}

Result.setAttribute("onclick", "sip()")

// event listeners
calToggleSwitch.addEventListener("click", 
(event) => {
    if(event.target.checked){
        status.innerHTML = 'Lumpsum Calculator'
        investmentText.innerText = 'Total Investment'
        Result.setAttribute("onclick", "lumpsum()")
    }else{
        status.innerHTML = 'SIP Calculator'
        investmentText.innerText = 'Monthly Investment'
        Result.setAttribute("onclick", "sip()")
    }
})

curToggleSwitch.addEventListener("click", 
(event) => {
    if(event.target.checked){
        console.log("currency switch is active")
    }else{
        console.log("currency switch is not active")
    }
})
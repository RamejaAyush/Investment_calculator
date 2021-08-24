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
let clear = document.querySelector(".Clear")

// functions
function lumpsum(){
    totalInvest.value = Investment.value
    Maturity.value = Math.round(Math.pow((1 + expectedRate.value / 100), numberOfYears.value) * Investment.value)
    amountGained.value = Maturity.value - totalInvest.value
}

function sip(){
    totalInvest.value = (Investment.value * 12)* numberOfYears.value
    Maturity.value = Math.round((Math.pow((1 + (Math.pow((1 + expectedRate.value / 100), (1 / 12)) - 1)), (numberOfYears.value * 12)) - 1) / (Math.pow((1 + expectedRate.value / 100), (1 / 12)) - 1) * Investment.value)
    amountGained.value = Maturity.value - totalInvest.value
}

// adding a default value attribute
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
        Investment.value = Investment.value / 70
        numberOfYears.value = numberOfYears.value / 70
        expectedRate.value = expectedRate.value / 70
        totalInvest.value = totalInvest.value / 70
        amountGained.value = amountGained.value / 70
        Maturity.value = Maturity.value / 70

    }else{
        Investment.value = Investment.value*70
        numberOfYears.value = numberOfYears.value*70
        expectedRate.value = expectedRate.value*70
        totalInvest.value = totalInvest.value*70
        amountGained.value = amountGained.value*70
        Maturity.value = Maturity.value*70
    }
})

clear.addEventListener("click", () => {
    Investment.value = ''
    numberOfYears.value = ''
    expectedRate.value = ''
    totalInvest.value = ''
    amountGained.value = ''
    Maturity.value = ''
})
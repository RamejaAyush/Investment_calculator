// all elements
const calToggleSwitch = document.querySelector('#cal-switch')

const curToggleSwitch = document.querySelector('#cur-switch')

const status = document.querySelector('#status')

// event listeners
calToggleSwitch.addEventListener("click", 
(event) => {
    if(event.target.checked){
        status.innerHTML = 'Lumpsum Calculator'
    }else{
        status.innerHTML = 'SIP Calculator'
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
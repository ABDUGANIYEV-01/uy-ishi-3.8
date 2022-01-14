
var masofaElement = document.getElementById('masofa')
var manElement = document.getElementById('man')
var veloElement = document.getElementById('velo')
var carElement = document.getElementById('car')
var pilotElement = document.getElementById('pilot')


masofaElement.addEventListener("keyup" , event =>{
    event.preventDefault()

    manElement.textContent = getTime(masofaElement.value, 3.6)
    carElement.textContent = getTime(masofaElement.value, 70)
    veloElement.textContent = getTime(masofaElement.value, 20.1)
    pilotElement.textContent = getTime(masofaElement.value,  800)
    
})


function getTime(masofaElement , speed){
    if(isNaN(masofaElement)) return `qiymat noto'g'ri`
    let time = masofaElement / speed
    let hour = Math.floor(time)
    let minutes = Math.floor((time - hour) * 60)
    return `${hour} soat ${minutes} minut` 
}



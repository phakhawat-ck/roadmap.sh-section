
const message = document.getElementById('message')
const text = document.getElementById('limit')
const maxChars = 250;


const updateCount =() =>{
    const countChar = message.value.length
    // if countChar > maxChars  ?   T : maxChars  F : countChar
    const displayCount = countChar > maxChars ? maxChars : countChar

    text.innerText = `${displayCount} / ${maxChars}`
    message.value = message.value.slice(0, maxChars)

    message.style.borderColor = countChar > maxChars ? 'red' : 'black'
}

updateCount()

message.addEventListener('input', updateCount);





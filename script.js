const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const zero = document.querySelector('#zero')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const multiply = document.querySelector('#multiply')
const divide = document.querySelector('#divide')
const equals = document.querySelector('#equals')
const decimal = document.querySelector('#decimal')
const screen = document.querySelector('#screen')

workingNum = null
lastOperation = ''

one.addEventListener("click", function(){screen.innerText += '1'})
two.addEventListener("click", function(){screen.innerText += '2'})
three.addEventListener("click", function(){screen.innerText += '3'})
four.addEventListener("click", function(){screen.innerText += '4'})
five.addEventListener("click", function(){screen.innerText += '5'})
six.addEventListener("click", function(){screen.innerText += '6'})
seven.addEventListener("click", function(){screen.innerText += '7'})
eight.addEventListener("click", function(){screen.innerText += '8'})
nine.addEventListener("click", function(){screen.innerText += '9'})
plus.addEventListener("click", function(){
    if (workingNum == null){
        workingNum = Number(screen.innerText)
        screen.innerText = ''
    }
    else {
        workingNum += Number(screen.innerText)
        screen.innerText = ''
    }
    lastOperation = 'plus'
})
minus.addEventListener("click", function(){
    if (workingNum == null){
        workingNum = Number(screen.innerText)
        screen.innerText = ''
    }
    else {
        workingNum -= Number(screen.innerText)
        screen.innerText = ''
    }
    lastOperation = 'minus'
})
multiply.addEventListener("click", function(){
    if (workingNum == null){
        workingNum = Number(screen.innerText)
        screen.innerText = ''
    }
    else {
        workingNum *= Number(screen.innerText)
        screen.innerText = ''
    }
    lastOperation = 'multiply'
})
divide.addEventListener("click", function(){
    if (workingNum == null){
        workingNum = Number(screen.innerText)
        screen.innerText = ''
    }
    else {
        workingNum /= Number(screen.innerText)
        screen.innerText = ''
    }
    lastOperation = 'divide'
})
equals.addEventListener('click', function(){
    if (lastOperation == 'plus') {
        workingNum += Number(screen.innerText)
        screen.innerText = workingNum
    }
    if (lastOperation == 'minus'){
        workingNum -= Number(screen.innerText)
        screen.innerText = workingNum
    }
    if (lastOperation == 'multiply') {
        workingNum *= Number(screen.innerText)
        screen.innerText = workingNum
    }
    if (lastOperation == 'divide') {
        workingNum /= Number(screen.innerText)
        screen.innerText = workingNum
    }
})

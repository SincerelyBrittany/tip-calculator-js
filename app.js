// console.log("hello")

let form = document.querySelector('form')

form.addEventListener("click", function(e){
    console.log(e.currentTarget)
    let checkAmount = document.getElementById('check-amount')
    let tipAmount = document.getElementById('sel1')
    console.log(checkAmount.value)
    console.log(tipAmount.value)
});
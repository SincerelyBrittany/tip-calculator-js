// console.log("hello")

let form = document.querySelector('form')

form.addEventListener("click", function(e){
    console.log(e.currentTarget.value)
    let checkAmount = document.getElementById('check-amount')
    console.log(checkAmount.value)
});
// console.log("hello")
function calculate(total, tip){
    let calculation = ((total * tip)/100)
    console.log(calculation)
    
}

let form = document.querySelector('form')

form.addEventListener("click", function(e){
    console.log(e.currentTarget)
    let checkAmount = +document.getElementById('check-amount').value;
    let tipAmount = +document.getElementById('sel1').value;
    // console.log(tipAmount.options[e.selectedIndex])
    // console.log(checkAmount)
    // console.log(tipAmount)
    calculate(checkAmount, tipAmount);
});

// console.log("hello")
function calculate(total, tip){
    let calculation = (((total * tip)/100).toFixed(2))
    displayResults('$' + calculation)
}

function displayResults(totalAmount){
    // console.log(totalAmount)
    let span = document.getElementById('total')
    span.innerHTML = `${totalAmount}`
    // let container = document.querySelector('.container1')
    // let div = document.createElement('div')
    // div.innerHTML = `<h3>${totalAmount}</h3>`;
    // container.append(div)
}

let form = document.querySelector('form')

form.addEventListener("click", function(e){
    e.preventDefault()
    console.log(e.currentTarget)
    let checkAmount = +document.getElementById('check-amount').value;
    if (isNaN(checkAmount)){
        displayResults("Error, please enter a number");
        return;
    }
    let tipAmount = +document.getElementById('sel1').value;
    // console.log(tipAmount.options[e.selectedIndex])
    // console.log(checkAmount)
    // console.log(tipAmount)
    calculate(checkAmount, tipAmount);
});

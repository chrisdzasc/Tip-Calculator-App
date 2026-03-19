const bill = document.querySelector("#bill");
const people = document.querySelector("#people");
const tipPercentage = document.querySelectorAll('.grid__button');
const customTip = document.querySelector("#custom");
const totalTip = document.querySelector("#total-tip");
const totalBill = document.querySelector("#total-bill");


function calculator() {
    
}

bill.addEventListener('input', calculator);
people.addEventListener('input', calculator);
customTip.addEventListener('input', calculator);

tipPercentage.forEach(button => {
    button.addEventListener('change', calculator);
});
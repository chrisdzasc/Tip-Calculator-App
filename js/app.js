const bill = document.querySelector("#bill");
const billContainer = document.querySelector("#billContainer");
const billMessageError = document.querySelector("#billMessageError");
const people = document.querySelector("#people");
const peopleContainer = document.querySelector("#peopleContainer");
const messageError = document.querySelector("#messageError");
const tipPercentage = document.querySelectorAll('.grid__button');
const customTip = document.querySelector("#custom");
const totalTip = document.querySelector("#total-tip");
const totalBill = document.querySelector("#total-bill");
const resetButton = document.querySelector("#reset-button");


function calculator() {
    
    const billValue = parseFloat(bill.value);
    const peopleValue = parseFloat(people.value);
    const customValue = parseFloat(customTip.value);

    let percentageValue;
    let tip;
    let totalPerPerson;
    let tipPerPerson;
    
    tipPercentage.forEach(button => {
        if(button.checked) {
            percentageValue = parseFloat(button.value);
        };
    });

    if(billValue <= 0) {
        billContainer.classList.add("fieldset__input--error");
        billMessageError.style.display = "block";
    } else {
        billContainer.classList.remove("fieldset__input--error");
        billMessageError.style.display = "none";
    }

    if(peopleValue <= 0) {
        peopleContainer.classList.add("fieldset__input--error");
        messageError.style.display = "block"

    } else {
        peopleContainer.classList.remove("fieldset__input--error");
        messageError.style.display = "none"
    }

    if(isNaN(customValue)) {
        // El custom value está vacio
        tip = percentageValue / 100;
    } else {
        tip = customValue / 100;
    }

    if( !isNaN(billValue) && !isNaN(peopleValue) && !isNaN(tip) && peopleValue > 0 && billValue > 0 ) {

        tipPerPerson = parseFloat(((billValue * tip) / peopleValue).toFixed(2));
        totalPerPerson = ((billValue / peopleValue) + tipPerPerson).toFixed(2);
    
        totalTip.textContent = `$${tipPerPerson}`;
        totalBill.textContent = `$${totalPerPerson}`;   

    }

}

function resetForm() {
    totalTip.textContent = "$0.00";
    totalBill.textContent = "$0.00";
}

bill.addEventListener('input', calculator);
people.addEventListener('input', calculator);
customTip.addEventListener('input', calculator);

tipPercentage.forEach(button => {
    button.addEventListener('change', calculator);
});

resetButton.addEventListener("click", resetForm);
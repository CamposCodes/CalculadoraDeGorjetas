function calculateTip(event){
    event.preventDefault();
    let bill = document.querySelector("#bill").value;
    let serviceQual = document.querySelector("#serviceQual").value;
    let people = document.querySelector("#people").value;

    if(bill == '' || serviceQual === 0){
        alert("Por favor, preencha os valores.");
        return;
    }

    if(people == '' || people <=1){
        people = 1;
        each.style.display="none";
    }else{
        each.style.display="block";
    }

    let total = (bill * serviceQual) / people;
    total = total.toFixed(2);
    tip.innerHTML = total;
    result.style.display="block";
}

let result = document.querySelector("#totalTips");
let each = document.querySelector("#each");
let tip = document.querySelector("#tip")
result.style.display="none";

let form = document.querySelector("#tipsForm");
form.addEventListener("submit", calculateTip);
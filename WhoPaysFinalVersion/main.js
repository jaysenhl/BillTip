//Start: calculate tip
document.getElementById('totalFinalEl').innerText = "";
document.getElementById('totalTipEl').innerText = "";
let totalSinTipInp = document.getElementById('totalSinTipInp').value;
let totalTipInp = document.getElementById('totalTipInp').value;
let totalFinalEl = document.getElementById('totalFinalEl');
let totalTipEl = document.getElementById('totalTipEl');

let tip = (totalSinTipInp * totalTipInp).toFixed(2);
//totalTipEl.innerText += `Tip total: $${tip}`;

let totalFinal = Number(totalSinTipInp) + Number(tip);
//totalFinalEl.innerText += `Total final: $${totalFinal}`;  
//End calculate bill

function Calculate(){
    document.getElementById('totalFinalEl').innerText = "";
    document.getElementById('totalTipEl').innerText = "";
    totalSinTipInp = document.getElementById('totalSinTipInp').value;
    totalTipInp = document.getElementById('totalTipInp').value;
    totalFinalEl = document.getElementById('totalFinalEl');
    totalTipEl = document.getElementById('totalTipEl');

    tip = (totalSinTipInp * totalTipInp).toFixed(2);
    totalTipEl.innerText += `Tip total: $${tip}`;
   
    totalFinal = Number(totalSinTipInp) + Number(tip);
    totalFinalEl.innerText += `Total final: $${Math.round(totalFinal)}`;   
}

function Clear(){
    document.getElementById('totalSinTipInp').value = "";
    document.getElementById('totalTipInp').value = "";
    document.getElementById('totalFinalEl').innerText = "Total Final: $";
    document.getElementById('totalTipEl').innerText = "Tip total: $";

}

//DIVIDE BILL IN GROUP
function Divide(){
    let eachPays = document.getElementById('eachPaysEl');
    let howMany = document.getElementById('howManyEl').value;
    let hasToPay = totalFinal / Number(howMany);
    eachPays.innerText += `Each person in the group has to pay: $${hasToPay}`;
    //console.log(totalFinal);
}

function ClearGroup(){
    document.getElementById('eachPaysEl').innerText = "";
    document.getElementById('howManyEl').value = "";
}

//WHO WILL PAY
function Add(){
    let list = document.querySelector('ul');
    let list_item = document.createElement('li');
    let textEl = document.getElementById('textEl').value;
    list_item.append(textEl);
    list.append(list_item);
    document.getElementById('textEl').value = "";
}

function Remove(){
    let list_item = document.querySelector('li');
    list_item.remove();
    let personToPay = document.getElementById('personToPay');
    personToPay.value = "";
}

function Choose(){
    let items = document.querySelectorAll('li');
    let item_length = items.length;
    let randomNumber = Math.floor(Math.random() * item_length);
    let person = items[randomNumber];
    let perpay = document.getElementById('personToPay');
    perpay.appendChild(person);
    console.log(person);
}

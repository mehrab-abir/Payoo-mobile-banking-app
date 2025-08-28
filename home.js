//add money section
let addMoneyBtn = document.querySelector('#add-money-btn');

const savedAccountNumber = "1010999"
const savedPinNumber = "1234";

addMoneyBtn.addEventListener('click',function(event){
    event.preventDefault();

    let balanceContainer = document.getElementById('current-balance');
    let availableBalance = parseFloat(balanceContainer.innerText);
    let bankSelect = document.getElementById('select-bank');
    let selectedBank = bankSelect.value;

    let accountNumberToAddMoney = document.getElementById('account-number-to-add-money').value;
    let pinToAddMoney = document.getElementById('pin-to-add-money').value;

    if(selectedBank === "Select a Bank"){
        alert("Please Select a Bank");
        return;
    }

    if(accountNumberToAddMoney == savedAccountNumber && pinToAddMoney == savedPinNumber){
        let amountInput= document.getElementById('amount-to-add');
        let amountToAdd = parseFloat(amountInput.value);
        
        availableBalance = (availableBalance + amountToAdd).toFixed(2);
        balanceContainer.innerText = availableBalance;

        //reseting all input field
        amountInput.value = "";
        document.getElementById('pin-to-add-money').value = "";
        document.getElementById('account-number-to-add-money').value = "";

        bankSelect.selectedIndex = 0; //reseting select a bank field
    }
    else{
        alert(`Invalid Credentials. Use ${savedAccountNumber} as account number and ${savedPinNumber} as 4 digit PIN`);
    }
})

//Cash out section
let cashOutBtn = document.getElementById('cash-out-btn');

cashOutBtn.addEventListener('click',function(event){
    event.preventDefault();

    let balanceContainer = document.getElementById('current-balance');
    let availableBalance = parseFloat(balanceContainer.innerText);

    let pinInput = document.getElementById('pin-to-cash-out');
    let pinToCashOut = pinInput.value;

    let agentNumber = document.getElementById('agent-number');

    if(pinToCashOut == savedPinNumber){
        let amountInput= document.getElementById('amount-to-cash');
        let amountToCash = parseFloat(amountInput.value);
        
        availableBalance = (availableBalance - amountToCash).toFixed(2);
        balanceContainer.innerText = availableBalance;

        //reseting all input field
        amountInput.value = "";
        pinInput.value = "";
        agentNumber.value = "";
    }
    else{
        alert(`Invalid Credentials. Use ${savedPinNumber} as 4 digit PIN`);
    }
})
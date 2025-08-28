//logout
let logOutBtn = document.getElementById('logout-btn');
logOutBtn.addEventListener('click',function(){
    window.location.href = "index.html";
})

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

        if(amountToCash > availableBalance){
            alert("Enter a valid amount to cash out");
            amountInput.value = "";
            return;
        }
        
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

//Transfer money section
let transferMoneyBtn = document.getElementById('transfer-money-btn');

transferMoneyBtn.addEventListener('click',function(event){
    event.preventDefault();

    let balanceContainer = document.getElementById('current-balance');
    let availableBalance = parseFloat(balanceContainer.innerText);

    let accountNumberInput = document.getElementById('user-account-number');
    let userAccountNumber = accountNumberInput.value;

    let pinInput = document.getElementById('pin-to-transfer');
    let pinToTransfer = pinInput.value;

    if(pinToTransfer == savedPinNumber){
        let amountInput= document.getElementById('amount-to-transfer');
        let amountToTransfer = parseFloat(amountInput.value);

        if(amountToTransfer > availableBalance){
            alert("Enter a valid amount to transfer");
            amountInput.value = "";
            return;
        }
        
        availableBalance = (availableBalance - amountToTransfer).toFixed(2);
        balanceContainer.innerText = availableBalance;

        //reseting all input field
        amountInput.value = "";
        pinInput.value = "";
        accountNumberInput.value = "";
    }
    else{
        alert(`Invalid Credentials. Use ${savedPinNumber} as 4 digit PIN`);
    }
})

//Pay Bill section
let payBillBtn = document.getElementById('pay-bill-btn');

payBillBtn.addEventListener('click',function(event){
    event.preventDefault();

    let balanceContainer = document.getElementById('current-balance');
    let availableBalance = parseFloat(balanceContainer.innerText);
    let billSelect = document.getElementById('bill-select');
    let selectedBill = billSelect.value;

    let billerAccountNumber = document.getElementById('biller-account-number').value;
    let pinToPayBill = document.getElementById('pin-to-pay-bill').value;

    if(selectedBill === "Select..."){
        alert("Please Select Bill Type");
        return;
    }

    if(billerAccountNumber == savedAccountNumber && pinToPayBill == savedPinNumber){
        let amountInput= document.getElementById('amount-to-pay-bill');
        let amountToPayBill = parseFloat(amountInput.value);

        if(amountToPayBill > availableBalance){
            alert("Insufficient Balance in Account");
            amountInput.value = "";
            return;
        }
        
        availableBalance = (availableBalance - amountToPayBill).toFixed(2);
        balanceContainer.innerText = availableBalance;

        //reseting all input field
        amountInput.value = "";
        document.getElementById('pin-to-pay-bill').value = "";
        document.getElementById('biller-account-number').value = "";

        billSelect.selectedIndex = 0; //reseting select bill type field
    }
    else{
        alert(`Invalid Credentials. Use ${savedAccountNumber} as account number and ${savedPinNumber} as 4 digit PIN`);
    }

})
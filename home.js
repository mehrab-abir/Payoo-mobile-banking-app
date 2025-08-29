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

        //making an object using the transaction data
        const addMoney = {
            transactionName : 'Add Money',
            transactionAmount : amountToAdd,
            date : new Date().toLocaleDateString(),
            time : new Date().toLocaleTimeString()
        };
        transactions.push(addMoney);

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

        //making an object using the transaction data
        const cashOut = {
            transactionName : 'Cash Out',
            transactionAmount : amountToCash,
            date : new Date().toLocaleDateString(),
            time : new Date().toLocaleTimeString()
        };

        transactions.push(cashOut);

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

        //making an object using the transaction data
        const transferMoney = {
            transactionName : "Transfer Money",
            transactionAmount : amountToTransfer,
            date : new Date().toLocaleDateString(),
            time : new Date().toLocaleTimeString()
        };

        transactions.push(transferMoney);

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

        //making an object using the transaction data
        const billPayment = {
            transactionName : selectedBill + " Bill",
            transactionAmount : amountToPayBill,
            date : new Date().toLocaleDateString(),
            time : new Date().toLocaleTimeString()
        };

        transactions.push(billPayment);

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


//display the only form that is clicked
function displayForm(id){
    const forms = document.getElementsByClassName("form")

    for(const form of forms){
        form.style.display = "none";
    }

    document.getElementById(id).style.display = "block";
    document.getElementById("latest-transactions").style.display = "none";
}

document.getElementById("addMoney").addEventListener('click',function(){
    displayForm("add-money-form");
})
document.getElementById("cashOut").addEventListener('click',function(){
    displayForm("cash-out-form");
})
document.getElementById("transferMoney").addEventListener('click',function(){
    displayForm("transfer-money-form");
})
document.getElementById("getBonus").addEventListener('click',function(){
    displayForm("get-bonus-form");
})
document.getElementById("payBill").addEventListener('click',function(){
    displayForm("pay-bill-form");
})

//for transaction history
let transactions = [];

document.getElementById("transactions").addEventListener('click',function(){
    displayForm("transaction-history");

    let transactionsContainer = document.querySelector('.transactions-container');

    //removing all existing transaction card everytime the 'transactions' button is clicked, so we only get the latest data, not the old data repeatedly
    transactionsContainer.innerHTML = ""; 
    
    for(const transaction of transactions){
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="singleTransaction flex flex-row items-center justify-between bg-[white] p-3 mt-3">
                    <div class="flex flex-row items-center justify-between">
                        <img src="./assets/transaction1.png" alt="" class="mr-4 bg-[#f4f5f7] p-4 rounded-full">
                        <div>
                            <h1 class="text-lg font-bold">${transaction.transactionName}</h1>
                            <p>Amount: ${transaction.transactionAmount}</p>
                            <p>${transaction.date} - ${transaction.time}</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
        `

        transactionsContainer.appendChild(div);
    }
})


//active buttons functionality
let featureBtns = document.querySelectorAll('.singleBtn');

function activeButton(id){

    //removing blue border and bg from all buttons first
    for(const button of featureBtns){
        button.style.border = "1px solid #d1d5dc";
        button.classList.remove("bg-[#dfeeff]");
    }
    
    //now adding blue border and bg only for the clicked/active button
    document.getElementById(id).style.border = "1px solid #7676ff"; 
    document.getElementById(id).classList.add("bg-[#dfeeff]");
}

document.getElementById('addMoney').addEventListener('click',function(){
    activeButton("addMoney");
})
document.getElementById('cashOut').addEventListener('click',function(){
    activeButton("cashOut");
})
document.getElementById('transferMoney').addEventListener('click',function(){
    activeButton("transferMoney");
})
document.getElementById('getBonus').addEventListener('click',function(){
    activeButton("getBonus");
})
document.getElementById('payBill').addEventListener('click',function(){
    activeButton("payBill");
})
document.getElementById('transactions').addEventListener('click',function(){
    activeButton("transactions");
    // console.log(transactions);
})
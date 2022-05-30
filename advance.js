function getAmount(inputId) {
    const inputAmount = document.getElementById(inputId);
    const inputAmountValue = inputAmount.value;
    const inputAmountFloat = parseFloat(inputAmountValue);
    // console.log(typeof(inputAmountFloat));
    console.log(inputAmountFloat);
    inputAmount.value = '';
    return inputAmountFloat;
}

function getInnerTextValue(balanceId) {
    const getBalance = document.getElementById(balanceId);
    const getBalanceInText = getBalance.innerText;
    const balanceFloat = parseFloat(getBalanceInText);
    return balanceFloat;
}

function updateAmount(outputId, amount) {
    const totalAmount = document.getElementById(outputId);
    const amountInText = totalAmount.innerText;
    const amountInTextFloat = parseFloat(amountInText);
    const newAmount = amountInTextFloat + amount;
    totalAmount.innerText = newAmount;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalIntext = balanceTotal.innerText;
    const balanceTotalFloat = parseFloat(balanceTotalIntext);
    let newBalance;
    if (isAdd == true) {
        newBalance = balanceTotalFloat + amount;
    }
    else {
        newBalance = balanceTotalFloat - amount;
    }
    balanceTotal.innerText = newBalance;
}

// handle deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getAmount('deposit-amount');
    if (amount > 0) {
        updateAmount('deposit-total', amount);
        updateBalance(amount, true);
    }
})

// handle withdrow button
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getAmount('withdraw-amount');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && balance >= amount) {
        updateAmount('withdraw-total', amount);
        updateBalance(amount, false);
    }
})
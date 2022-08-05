
//Deposit Part

document.getElementById('deposit-btn').addEventListener('click', function () {

    //1.get depositInput
    const getDeposit = document.getElementById('deposit-input');
    const getInputDeposit = parseFloat(getDeposit.value);

    //2.get totalDeposit
    const MainDeposit = document.getElementById('depo-total');
    const MainDepositValue = parseFloat(MainDeposit.innerText);

    //3.Update Total deposit
    MainDeposit.innerText = getInputDeposit + MainDepositValue;

    //4.Overall balance Updated
    const totalBalance = document.getElementById('TotalAmount');
    const totalBalanceValue = parseFloat(totalBalance.innerText);
    totalBalance.innerText = totalBalanceValue + getInputDeposit;

    getDeposit.value = ' ';

})


//Withdraw Part

document.getElementById('withdraw-btn').addEventListener('click', function () {

    //1.get withdrawInput
    const getWithdraw = document.getElementById('withdraw-input');
    const getInputwithdraw = parseFloat(getWithdraw.value);

    //2.get totalWithdraw
    const MainWithdraw = document.getElementById('with-total');
    const MainWithdrawValue = parseFloat(MainWithdraw.innerText);

    //3.Update Total withdraw
    MainWithdraw.innerText = getInputwithdraw + MainWithdrawValue;

    //4.Overall balance Updated
    const totalBalanceW = document.getElementById('TotalAmount');
    const totalBalanceWValue = parseFloat(totalBalanceW.innerText);
    totalBalanceW.innerText = totalBalanceWValue - getInputwithdraw;

    getWithdraw.value = ' ';

})
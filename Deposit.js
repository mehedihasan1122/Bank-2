document.getElementById('deposit-button').addEventListener('click', function() {

    const newDeposit = getInput('input-deposit');

    const previousDepositValue = getTextValue('deposit-total');
    const totalDeposit = previousDepositValue + newDeposit;
    setTotalValue('deposit-total', totalDeposit);


    const previousBalance = getTextValue('currentBalance-total');
    const totalBalance = previousBalance + newDeposit;
    setTotalValue('currentBalance-total', totalBalance);



})
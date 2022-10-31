document.getElementById('withdraw-button').addEventListener('click', function() {


    const newWithdraw = getInput('withdraw-input');

    if (isNaN(newWithdraw)) {
        alert('please enter a number');
    }

    const previousWithdraw = getTextValue('withdraw-total');
    const previousBalance = getTextValue('currentBalance-total');

    if (newWithdraw > previousBalance) {
        alert('not enough money in your account');
        return;
    }

    const totalWithdraw = newWithdraw + previousWithdraw;
    setTotalValue('withdraw-total', totalWithdraw);
    const totalNewBalance = previousBalance - newWithdraw;
    setTotalValue('currentBalance-total', totalNewBalance);


})
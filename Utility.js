function getInput(inputFieldValue) {

    const depositInput = document.getElementById(inputFieldValue);
    const depositInputString = depositInput.value;
    const depositInputAmount = parseFloat(depositInputString);

    depositInput.value = '';
    return depositInputAmount;

}


function getTextValue(textValue) {

    const depositPrevious = document.getElementById(textValue);
    const depositPreviousString = depositPrevious.innerText;
    const depositPreviousAmount = parseFloat(depositPreviousString);
    return depositPreviousAmount;

}


function setTotalValue(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
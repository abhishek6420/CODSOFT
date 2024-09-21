function data_value(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = value;
    } else {
        if (value === '.' && display.innerText.includes('.')) return;
        display.innerText += value;
    }}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteEntry() {
    const display = document.getElementById('display');
    let currentText = display.innerText;
    
   
    let lastChar = currentText.slice(-1);

 
    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.innerText = currentText.slice(0, -1);
   
        while (['+', '-', '*', '/'].includes(display.innerText.slice(-1))) {
            display.innerText = display.innerText.slice(0, -1);
        }
     
        if (display.innerText === '' || ['+', '-', '*', '/'].includes(display.innerText.slice(-1))) {
            display.innerText = '0';
        }
    } else {
        
        display.innerText = currentText.slice(0, -1);
      
        if (display.innerText === '') {
            display.innerText = '0';
        }}}

function calculatePercentage() {
    const display = document.getElementById('display');
    try {
        const result = parseFloat(display.innerText) / 100;
        display.innerText = result.toString();
    } catch {
        display.innerText = 'Error';
    }}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.innerText);
        if (result === Infinity || isNaN(result)) {
            display.innerText = 'Error';
        } else {
            display.innerText = result.toString();
        }
    } catch {
        display.innerText = 'Error';
    }}
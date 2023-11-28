let actionNum = prompt('Which action would you choose?');


if (actionNum  === 'add' || actionNum  === 'sub' || actionNum  === 'mul' || actionNum  === 'div') {
    
    let firstNum;
    let check = false;
    do {
        firstNum = +prompt('Place the first number');
        if (typeof firstNum === 'number' && isNaN(firstNum) === false) {
            check = false;
        } else {
            alert('Place a number');
            check = true;
        }
    } while (check);
    
    
    let secondNum;
    do {
        secondNum = +prompt('Place the second number');
        if (typeof secondNum === 'number' && isNaN(secondNum) === false) {
            check = false;
        } else {
            alert('Place a number');
            check = true;
        }
    } while (check);
        
    let sign;
    
    switch (actionNum) {
        case 'add':
            sign = '+'
            result = firstNum + secondNum;
        break;
        case 'sub':
            sign = '-';
            result = firstNum - secondNum;
        break;
        case 'mult':
            sign = '*';
            result = firstNum * secondNum;
        break;
        case 'div':
            sign = '/';
            result = firstNum / secondNum;
        break;
    }
    
    alert(`${firstNum} ${sign} ${secondNum} = ${result}`);
        
    } else {
    alert('Undefined expression, try again');
}


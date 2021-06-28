const ecran = document.getElementById('screen1');
const ecran2 = document.getElementById('screen2');


clickOnbtn = (value) => {
    switch (value) {
        case '=':
            let result = eval(ecran.innerText.replaceAll(' ', ''));
            ecran.innerText = `${ecran.innerText} ${value} ${result}`;
            ecran2.innerText = '';
            ecran2.innerText = eval(result);
            break;
        case 'AC':
            ecran.innerText = '';
            ecran2.innerText = '';
            break;
        default:
            ecran.innerText = `${ecran.innerText} ${value}`;
            break;
    }
}

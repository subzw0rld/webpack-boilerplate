import '../css/main.css';
import { cube } from './math';

function component() {
    var element = document.createElement('div');
    element.className = 'experimental-div';
    element.innerHTML = [
        'Hi John',
        '5 cubed  = ' + cube(5)
    ].join('\n\n');

    return element;
}

function environmentInfo() {
    var element = document.createElement('div');
    element.className = 'experimental-div';
    element.innerHTML = 'Current Environment  = ' + process.env.NODE_ENV;
    return element;
}

document.body.appendChild(component());
document.body.appendChild(environmentInfo());
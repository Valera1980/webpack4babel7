import {add , addObj} from './summ';

import '../styles/one.scss';
import '../styles/main.scss';
// const res = summ(30,40);

// console.log('result ===> ' , res);

window.addEventListener('load', function () {

    var template = document.getElementById('handlebars-demo');

    var templateScript = Handlebars.compile(template);
    var context = { "name" : "Ritesh Kumar", "occupation" : "developer" };
    var html = templateScript(context);
    document.body.append(html);


    const button = document.getElementById('999');
    const ddd = "SSSSSSSSS";
    button.addEventListener('click', function () {
        // const result = add(66,88);
        const result = addObj();
        alert(result);
    })
}, false)


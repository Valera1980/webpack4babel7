import {add,addObj, asyncOne, promOne} from './summ';

import '../styles/one.scss';
import '../styles/main.scss';
// import 'babel-polyfill';
// const res = summ(30,40);

// console.log('result ===> ' , res);

window.addEventListener('load', function () {

    const button = document.getElementById('999');
    button.addEventListener('click', function () {

        asyncOne()
        .then(data => {
            alert(JSON.stringify(data));
        })
        .catch(e => alert('ERROR'));
        //const result = add(66,88);
        //const result = addObj();
        //alert(result);
    })
}, false)


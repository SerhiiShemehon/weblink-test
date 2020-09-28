import { app } from './app/app';


window.addEventListener("load", function(event) {
    console.log(data);

    const fillBtn = document.getElementById('btnFill');
    const listener = () => {
        fillBtn.removeEventListener('click', listener, true);
        app();
    }
    fillBtn.addEventListener('click', listener, true);
});

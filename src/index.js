import './style.css';
import loadPage from './loadPage';
import loadHome from './home';
import loadMenu from './menu';

loadHome();
loadPage();

const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const contactBtn = document.querySelector('#contact-btn');

homeBtn.addEventListener('click', () => {
    clearContentBox();
    loadHome();
})

menuBtn.addEventListener('click', () => {
    clearContentBox();
    loadMenu();
})

function clearContentBox() {
    const contentBox = document.querySelector("#content");
    contentBox.replaceChildren();
}

export default clearContentBox;



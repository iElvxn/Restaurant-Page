function loadPage() {
    const HTMLbody = document.querySelector("body");

    const header = document.createElement('div');
    header.classList.add('header');

    const logo = document.createElement('div')
    logo.innerHTML = 'Hokkaido';
    logo.classList.add('logo');
    header.appendChild(logo);

    const headerBtns = document.createElement('div');
    headerBtns.classList.add('header-btns')

    const homeBtn = document.createElement('button')
    homeBtn.id = 'home-btn';
    homeBtn.innerHTML = 'Home';
    headerBtns.appendChild(homeBtn);

    const menuBtn = document.createElement('button')
    menuBtn.id = 'menu-btn';
    menuBtn.innerHTML = 'Menu';
    headerBtns.appendChild(menuBtn);

    const contactBtn = document.createElement('button')
    contactBtn.id = 'contact-btn';
    contactBtn.innerHTML = 'Contact';
    headerBtns.appendChild(contactBtn);

    header.appendChild(headerBtns);
    HTMLbody.insertAdjacentElement("afterbegin", header);
}

export default loadPage;
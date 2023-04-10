function loadMenu() {
    const content = document.querySelector("#content");

    const image = document.createElement('div');
    image.classList.add('menu-image');
    content.appendChild(image);
    const menu = document.createElement('div');
    menu.classList.add('menu');
    
    const menuHeader = document.createElement('div');
    menuHeader.innerHTML = 'Discover Our Menu'
    menuHeader.classList.add('menu-header');

    const menubody = document.createElement('div');
    menubody.classList.add('menu-body');

    menu.append(menuHeader, menubody);

    const sushiContainer = document.createElement('div');
    sushiContainer.id = 'sushi-container'
    sushiContainer.classList.add('menu-types');
    menubody.appendChild(sushiContainer);
    
    const chutoro = document.createElement('div');
    const chutoroHeader = document.createElement('div');
    chutoroHeader.classList.add('item-header');
    chutoroHeader.innerHTML = 'Chutaro';
    chutoro.classList.add('menu-item');
    const chutoroInfo = document.createElement('div');
    chutoroInfo.classList.add('menu-item-info');
    chutoroInfo.innerHTML = 'Medium fatty tuna on top of nigiri.'
    const chutoroImg = document.createElement('div');
    chutoroImg.classList.add('item-img');
    chutoroImg.id = 'chutoro-img';
    chutoro.append(chutoroImg, chutoroHeader, chutoroInfo);

    const salmon  = document.createElement('div');
    const salmonHeader = document.createElement('div');
    salmonHeader.classList.add('item-header');
    salmonHeader.innerHTML = 'Salmon';
    salmon.classList.add('menu-item');
    const salmonInfo = document.createElement('div');
    salmonInfo.classList.add('menu-item-info');
    salmonInfo.innerHTML = 'Medium fatty salmon on top of nigiri.'
    const salmonImg = document.createElement('div');
    salmonImg.classList.add('item-img');
    salmonImg.id = 'salmon-img';
    salmon.append(salmonImg, salmonHeader, salmonInfo);

    const uni  = document.createElement('div');
    const uniHeader = document.createElement('div');
    uniHeader.classList.add('item-header');
    uniHeader.innerHTML = 'Uni';
    uni.classList.add('menu-item');
    const uniInfo = document.createElement('div');
    uniInfo.classList.add('menu-item-info');
    uniInfo.innerHTML = 'Sea urchin on top of nigiri.'
    const uniImg = document.createElement('div');
    uniImg.id = 'uni-img';
    uniImg.classList.add('item-img');
    uni.append(uniImg,uniHeader, uniInfo);

    const unagi  = document.createElement('div');
    const unagiHeader = document.createElement('div');
    unagiHeader.classList.add('item-header');
    unagiHeader.innerHTML = 'Unagi';
    unagi.classList.add('menu-item');
    const unagiInfo = document.createElement('div');
    unagiInfo.classList.add('menu-item-info');
    unagiInfo.innerHTML = 'Eel on top of nigiri.'
    const unagiImg = document.createElement('div');
    unagiImg.id = 'unagi-img';
    unagiImg.classList.add('item-img');
    unagi.append(unagiImg, unagiHeader, unagiInfo);

    sushiContainer.append(chutoro, salmon, uni, unagi);

    content.appendChild(menu);
}

export default loadMenu;

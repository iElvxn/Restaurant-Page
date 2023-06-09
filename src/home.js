import loadMenu from "./menu";
import clearContentBox from ".";

function loadHome() {
    const content = document.querySelector("#content");
    
    const bodyImage = document.createElement('div');
    bodyImage.classList.add('homeBodyImage');
    content.appendChild(bodyImage);

    const container1 = document.createElement('div');
    const container2 = document.createElement('div');
    container1.classList.add('imageContainers');
    container2.classList.add('imageContainers');
    bodyImage.append(container1, container2);


    const infoBox = document.createElement('div');
    infoBox.classList.add("info-box");
    const infoHeader = document.createElement('div');
    infoHeader.classList.add('infoHeader');
    infoHeader.innerHTML = 'Welcome to Hokkaido!';
    const infoBtn = document.createElement('button');
    infoBtn.classList.add('infoBtn');
    infoBtn.innerHTML = 'SEE MENU';
    infoBox.appendChild(infoHeader);
    infoBox.appendChild(infoBtn);
    container2.appendChild(infoBox);

    const body2 = document.createElement('div');
    body2.id = 'home-body2';
    content.appendChild(body2); 

    const body2Header = document.createElement('div');
    body2Header.innerHTML = 'About Us:'
    body2Header.id = 'home-body2-header';

    const body2Body = document.createElement('div');
    body2Body.innerHTML = "Hokkaido Japanese Restaurant features the finest Japanese dishes, both traditional and contemporary, including a wonderful selection of appetizers, sushi, teriyaki and more. We go beyond boasting delicious, authentic Japanese cuisine by providing a feast for all your senses. Our traditional Japanese rooms bring Japan to life by epitomizing its elegance and aura. Whatever your desire may be, we welcome your visit and hope to thrill you..."
    body2Body.id = 'home-body2-body';

    body2.append(body2Header, body2Body);

    infoBtn.addEventListener('click', () => {
        clearContentBox();
        loadMenu();
    })
}

export default loadHome;

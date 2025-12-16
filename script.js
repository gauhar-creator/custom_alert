const { createElement } = require("react");

const button = document.getElementById('button');


const customAlert = (message) => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.append(overlay);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'content';
    overlay.append(contentDiv);

    const messageH1 = document.createElement('h1');
    messageH1.textContent = message;
    contentDiv.append(messageH1);

    const closeButton = document.createElement('button');
    closeButton.className = ' closeBtn';
    closeButton.textContent ='Ok';
    contentDiv.append(closeButton);

    closeButton.addEventListener('click', () => {
        overlay.remove();
    })

    overlay.addEventListener('click', (event) => {
        if(event.target.className === 'overlay') {
            overlay.remove();
        }
    })
    




}
button.addEventListener('click', () => {
    customAlert('Learn frontend')
})
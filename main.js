const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /^[a-z0-9._%+-]+@gmail\.com$/i;

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = "OK";
        gmailResult.style.color = "green";
    } else {
        gmailResult.innerHTML = "NOT OK";
        gmailResult.style.color = "red";
    }
};

const childBlock = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');

let positionX = 0;

function moveBlock() {
    const offsetWidth = parentBlock.clientWidth - childBlock.clientWidth;

    if (positionX < offsetWidth) {
        positionX++;
        childBlock.style.left = `${positionX}px`;
        setTimeout(moveBlock, 10);
    }
}

moveBlock();
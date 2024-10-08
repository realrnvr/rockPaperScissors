// images with animation
const compImg = document.querySelector('.comp-response img');
const userImg = document.querySelector('.human-response img');

// winner msg 
const winMsg = document.querySelector('.response-text');

// game options -> rock paper scissors
const gameOptions = document.querySelectorAll('.option img');

// response recorder
let compResponse = null;
let userResponse = null;
let optionSet = null;

// function for computer response
const compResponseArray = ['rock', 'paper', 'scissors'];
const compResponseGenerator = () => {
    const compResponseNum = Math.floor(Math.random() * 3);
    compResponse = compResponseArray[compResponseNum];
}

// function for the logic 
const rockPaperScissors = () => {
    if (userResponse === compResponse) {
        winMsg.textContent = 'draw :|';
    } else if (userResponse === 'rock') {
        if (compResponse === 'paper') {
            winMsg.textContent = 'Computer wins :(';
        }
        else {
            winMsg.textContent = 'You won :)';
        }
    } else if (userResponse === 'paper') {
        if (compResponse === 'scissors') {
            winMsg.textContent = 'Computer wins :(';
        }
        else {
            winMsg.textContent = 'You won :)';
        }
    } else {
        if (compResponse === 'rock') {
            winMsg.textContent = 'Computer wins :(';
        }
        else {
            winMsg.textContent = 'You won :)';
        }
    }
}

// response delay function
const responseDelay = () => {
    setTimeout(() => {
        rockPaperScissors();
        compImg.classList.remove('comp');
        userImg.classList.remove('user');
    }, 3000);
    winMsg.textContent = 'Please wait...';
}

// event listener on option > img
gameOptions.forEach((option1, index1) => {
    option1.addEventListener('click', () => {
        userResponse = option1.alt;
        compResponseGenerator();
        responseDelay();
        compImg.classList.toggle('comp', true);
        userImg.classList.toggle('user', true);

        // Disable pointer events on all options except the selected one
        gameOptions.forEach((option2, index2) => {
            if (index2 !== index1) {
                option2.style.pointerEvents = 'none';
                option1.style.transform = 'scale(1.1)';
                option1.style.opacity = '1';
                setTimeout(() => {
                    option2.style.pointerEvents = '';
                    option1.style.transform = '';
                    option1.style.opacity = '';
                    compImg.setAttribute('src', `${compResponse}.png`);
                    userImg.setAttribute('src', `${userResponse}.png`);
                }, 3000);
            }
        });
        compImg.setAttribute('src', `rock.png`);
        userImg.setAttribute('src', `rock.png`);
    });
});
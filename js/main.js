// declare the virable that we need to use in this game
let player = 1;
let counter = 0;
let sampleOfWinning = [];
let xScore = 0;
let oScore = 0;
//declaration to use the class or id in functions
const cells = document.querySelectorAll('.cell');
const playAgainT = document.querySelector('#playAgain');
const restartGame = document.querySelector('#restartGame');
const win = document.querySelector('.winner');
const whosPlay = document.querySelector('.turn');
const xText = document.querySelector('#xText');
const oText = document.querySelector('#oText');
// check the programe is work !!!!!
console.log("I'm workig");
//whan the user click on the button
const playAgainButton = function() {
    removeBoard();
}

// remove the board and reset the counters
const restartGameButton = function() {
        xScore = 0;
        xText.innerText = "";
        oScore = 0;
        oText.innerText = "";

        removeBoard();

    }
    //add event listener when you click to play again
playAgainT.addEventListener('click', playAgainButton);
restartGame.addEventListener('click', restartGameButton);

//when the player won this function will stop the rest of the listener.
const stopPlaying = function() {
        whosPlay.innerText = "";
        for (let i = 0; i < cells.length; i++) {
            cells[i].removeEventListener('click', clicCell);
        }
    }
    //when the user want to play again, click on thw bottun to play again
    //to remove all text from the board
const removeBoard = function() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].className = 'cell';
        cells[i].innerText = '';
    }
    win.innerText = "";
    ticTocToe();

}

// to check who is the winner & print if there anybody has win.
const checkWinner = function() {
    for (let i = 0; i < sampleOfWinning.length; i++) {
        for (let j = 0; j < sampleOfWinning[i].length; j++) {
            // compare if any nested array in sampleOfWinning array all elements the same letter 'X' let it the winner
            if (
                (sampleOfWinning[0][0] == "X" && sampleOfWinning[0][1] == "X" && sampleOfWinning[0][2] == "X") ||
                (sampleOfWinning[1][0] == "X" && sampleOfWinning[1][1] == "X" && sampleOfWinning[1][2] == "X") ||
                (sampleOfWinning[2][0] == "X" && sampleOfWinning[2][1] == "X" && sampleOfWinning[2][2] == "X") ||
                (sampleOfWinning[3][0] == "X" && sampleOfWinning[3][1] == "X" && sampleOfWinning[3][2] == "X") ||
                (sampleOfWinning[4][0] == "X" && sampleOfWinning[4][1] == "X" && sampleOfWinning[4][2] == "X") ||
                (sampleOfWinning[5][0] == "X" && sampleOfWinning[5][1] == "X" && sampleOfWinning[5][2] == "X") ||
                (sampleOfWinning[6][0] == "X" && sampleOfWinning[6][1] == "X" && sampleOfWinning[6][2] == "X") ||
                (sampleOfWinning[7][0] == "X" && sampleOfWinning[7][1] == "X" && sampleOfWinning[7][2] == "X")
            ) {

                win.innerText = 'Player of X won !!!';
                xScore++;
                xText.innerText = xScore;
                stopPlaying();
                return;

            } else if (
                // compare if any nested array in sampleOfWinning array all elements the same letter 'O' let it the winner
                (sampleOfWinning[0][0] == "O" && sampleOfWinning[0][1] == "O" && sampleOfWinning[0][2] == "O") ||
                (sampleOfWinning[1][0] == "O" && sampleOfWinning[1][1] == "O" && sampleOfWinning[1][2] == "O") ||
                (sampleOfWinning[3][0] == "O" && sampleOfWinning[3][1] == "O" && sampleOfWinning[3][2] == "O") ||
                (sampleOfWinning[2][0] == "O" && sampleOfWinning[2][1] == "O" && sampleOfWinning[2][2] == "O") ||
                (sampleOfWinning[5][0] == "O" && sampleOfWinning[5][1] == "O" && sampleOfWinning[5][2] == "O") ||
                (sampleOfWinning[4][0] == "O" && sampleOfWinning[4][1] == "O" && sampleOfWinning[4][2] == "O") ||
                (sampleOfWinning[6][0] == "O" && sampleOfWinning[6][1] == "O" && sampleOfWinning[6][2] == "O") ||
                (sampleOfWinning[7][0] == "O" && sampleOfWinning[7][1] == "O" && sampleOfWinning[7][2] == "O")
            ) {

                win.innerText = 'player of O won !!!';
                oScore++;
                oText.innerText = oScore;
                stopPlaying();
                return;
            }

        }

    }
    //conduction for the Tie situation
    if (counter == 9) {
        win.innerText = 'Tie !!!!!!!!!!';
    }
}


// remove the event listener and check who's turn add replase the nubmer in the array down to the text of user in if condution.
const clicCell = function() {
    //remove the abilty of click on the cell when the cell clicked 
    this.removeEventListener('click', clicCell);
    // add one to the counter of Tie situation
    counter++;
    if (player == 1) {
        this.style.fontSize = '60px';
        this.innerText = "X";
        whosPlay.innerText = 'it\'s O player turn';
        // go to the nested arrays on sampleOfWinning and replase the all number id that the user choosen to X 
        for (let i = 0; i < sampleOfWinning.length; i++) {
            for (let j = 0; j < sampleOfWinning[i].length; j++) {
                if (sampleOfWinning[i][j] == (this.id)) {
                    sampleOfWinning[i][j] = "X";
                }
            }

        }
        //check in the console it's work ot not
        console.log(sampleOfWinning);
        //to switch between the users O
        player = 0;
    } else {

        this.style.fontSize = '60px';
        this.innerText = "O";
        whosPlay.innerText = 'it\'s X player turn';
        console.log('the turn to player two');
        // go to the nested arrays on sampleOfWinning and replase the all number id that the user choosen to X 
        for (let i = 0; i < sampleOfWinning.length; i++) {
            for (let j = 0; j < sampleOfWinning[i].length; j++) {
                if (sampleOfWinning[i][j] == this.id) {
                    sampleOfWinning[i][j] = "O";
                }

            }
            //to switch the user to X
            player = 1;

        }
        console.log(sampleOfWinning);
    }
    //check
    setTimeout(checkWinner, 100)
}

// to start the game and to play again...
const ticTocToe = function() {
        sampleOfWinning = [
            ['0', '1', '2'],
            ['3', '4', '5'],
            ['6', '7', '8'],
            ['0', '3', '6'],
            ['1', '4', '7'],
            ['2', '5', '8'],
            ['0', '4', '8'],
            ['2', '4', '6']
        ];
        counter = 0;
        player = 1;
        whosPlay.innerText = 'it\'s X player turn';

        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', clicCell);

        }
    }
    //start the game
ticTocToe();
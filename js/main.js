let player = 1;
let counter = 0;
let sampleOfWinning = [];
//declaration to use the class or id
const cells = document.querySelectorAll('.cell');
const playAgainT = document.querySelector('#playAgain');
const win = document.querySelector('.winner');
console.log("I'm workig");
//to remove all text from the board
const playAgainButton = function() {
        removeBoard();
    }
    //add event listener when you click to play again
playAgainT.addEventListener('click', playAgainButton);
//when the player won this function will stop the rest of the listener.
const stopPlaying = function() {
        for (let i = 0; i < cells.length; i++) {
            cells[i].removeEventListener('click', clicCell);
        }
    }
    //when the user want to play again, click on thw bottun to play again
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
                stopPlaying()
                return;

            } else if (
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
                stopPlaying()
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
    this.removeEventListener('click', clicCell);
    counter++;
    if (player == 1) {
        this.style.fontSize = '60px';
        this.innerText = "X";
        for (let i = 0; i < sampleOfWinning.length; i++) {
            for (let j = 0; j < sampleOfWinning[i].length; j++) {
                if (sampleOfWinning[i][j] == (this.id)) {
                    sampleOfWinning[i][j] = "X";
                }
            }

        }
        console.log(sampleOfWinning);
        player = 0;
    } else {

        this.style.fontSize = '60px';
        this.innerText = "O";
        console.log('the turn to player two');
        for (let i = 0; i < sampleOfWinning.length; i++) {
            for (let j = 0; j < sampleOfWinning[i].length; j++) {
                if (sampleOfWinning[i][j] == this.id) {
                    sampleOfWinning[i][j] = "O";
                }

            }
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
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', clicCell);

        }
    }
    //start the game
ticTocToe();
* List technologies used
the technologies that I used are:
1) Texteditor: VS code
2) HTML, CSS and Vanilla JavaScript.


* Link to wireframes and user stories.
I drow it on paper.

* My planning 
//1. Create html file with table 3*3; and button to reset.
// 2. give each cell a same class and uniqe id; each cell give it a index;
// 3. by using js do the requirment below:
//      a. declare a player, counter and sampleOfWinning array.
//      b. start with a function inclode the defolt setting to help me in reset the game
//      c. let the player choose the index by clicking on the cell and replase the index nuber with the label of the user in arry.
//      d. make a tern switch between two player depend on the value of the player value number if 1 play X and change it to 0 , else play O and change it to 0.
//      e. and then check after the play if the array of the sampleOfWinning match any nested array of the "chance of winning in arrays" make it the winner;
//      f. and go to the function to remove all the listener on the cells.

* List unsolved problems which would be fixed in future iterations.
I solve it but with lobg way my plan for fututre is to solve this with less then if statment.

* Describe how you solved for the winner

    When the user click on the area of the cell I have in my system 8 situation of winning depend on the id of the cell, if the user have winning situation the system check as awlys the 8 situation of winning is the user match print the you the winner if nothing check the counter if it's = the number of cell "9" print Tie.

* Describe how some of your favorite functions work
    The "TicTacToe" function is reset the hole chanse of winning
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
    and reset the value of the counter to 0
    and turn on the event of the listener of all cells.
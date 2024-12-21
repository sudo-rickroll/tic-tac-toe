const Gameboard = function(dimension){
    let board = [];
    return{
        get dimension(){
            return dimension;
        },
        get board(){
            return board;
        },
        set board(args){
            board[args[0]][args[1]] = args[2];
        },
        initialize(){
            let row = dimension, column = dimension;
            for(let i = 0 ; i < row; i++){
                board[i] = [];
                for(let j = 0; j < column; j++){
                    board[i][j] = 0; 
                }
            }
        },
        displayOutput(){
            let displayOutput = "";
            for(let tokens of board){
                displayOutput += tokens + "\n";
            }
            return displayOutput;
        }
    } 
}


const Player = function(gameboard, playerCount){
    let tokens = function(){
        let arr = [];
        for(let i = 1 ; i <= playerCount ; i++){
            arr.push(i);
        }
        return arr;
    }();

    let players =  tokens.map(token => "Player " + token);

    let count = 0;

    let tokenMap = function(){
        let obj = {};
        for(let i = 0 ; i < players.length ; i++){
            obj[players[i]] = tokens[i];
        }
        return obj
    }();

    let setTurn = function(){
        return tokens[count - 1];
    }

    let {displayOutput} = gameboard;
    
    return{
        userInput(){
            return Number(alert("Enter the cell number where you want to place your entry"));
        },
        enterToken(cell){            
            if(cell){
                count === players.length ? count = 1 : count++;
                let token = setTurn();
                let row = Math.floor((cell- 1) / gameboard.dimension);
                let column = (cell- 1) % gameboard.dimension;
                gameboard.board = [row, column, token];
            }
        },
        displayOutput
    }
}

const gameFlow = function(boardDimension, noOfPlayers){
    if(noOfPlayers > boardDimension){
        console.log("Number of players cannot be greater than board dimension");
        return;
    }
    gameboard = Gameboard(boardDimension);
    gameboard.initialize();
    console.log(gameboard.displayOutput());
    const players = Player(gameboard, noOfPlayers);
    players.enterToken(9);
    players.enterToken(3);
    console.log(players.displayOutput());
}

function main(){
    gameFlow(3, 2);
}

main();
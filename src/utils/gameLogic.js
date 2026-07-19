export function createBoard(level){
    let board = [];
    let rows = 0;
    let cols = 0;

    if(level === "easy"){
        rows = 10;
        cols = 10;
    }else if(level === "medium"){
        rows = 16;
        cols = 16;
    }else if(level === "hard"){
        rows = 16;
        cols = 30;
    };

    for(let i = 0; i < rows; i++){
        let row = [];
        for(let j = 0; j < cols; j++){
            let cell = {
                x: j,
                y: i,
                isMine: false,
                isRevealed: false,
                isFlagged: false,
                neighborMines: 0
            };
            row.push(cell);
        }
        board.push(row);
    }

    board = placeMines(board, Math.floor(rows * cols * 0.2));
    return board;
}

function placeMines(board, numMines){
    let rows = board.length;
    let cols = board[0].length;
    let minesPlaced = 0;

    while(minesPlaced < numMines){
        let randomRow = Math.floor(Math.random() * rows);
        let randomCol = Math.floor(Math.random() * cols);
        if(!board[randomRow][randomCol].isMine){
            board[randomRow][randomCol].isMine = true;
            minesPlaced++;
        }
    }
    return board;
}

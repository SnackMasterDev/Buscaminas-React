function createBoard(level){
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
    return board;
}
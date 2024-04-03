var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // Define directions: down, up, right, left
    
    const backtrack = (i, j, k) => {
        if (k === word.length) {
            return true; // If all characters in the word are matched, return true
        }
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k]) {
            return false; // If out of bounds or character doesn't match, return false
        }
        
        const temp = board[i][j];
        board[i][j] = '\0'; // Mark visited cell
        
        for (const [di, dj] of directions) {
            if (backtrack(i + di, j + dj, k + 1)) {
                board[i][j] = temp; // Restore the original value
                return true;
            }
        }
        
        board[i][j] = temp; // Restore the original value
        return false;
    };
    
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (backtrack(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};
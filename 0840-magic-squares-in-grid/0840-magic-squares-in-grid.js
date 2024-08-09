/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    let count = 0;
    for(let i = 2; i < grid.length; i++) {
        for(let j = 2; j < grid[i].length; j++) {
            if (checkMagic([
                [grid[i-2][j-2], grid[i-2][j-1], grid[i-2][j]],
                [grid[i-1][j-2], grid[i-1][j-1], grid[i-1][j]],
                [grid[i][j-2], grid[i][j-1], grid[i][j]],
            ])) {
                count++;
            }
        }
    }
    return count;
};

const checkMagic = (grid) => {
    // Flatten the grid to check if it contains exactly numbers 1 to 9
    const flattenGrid = grid.flat();
    const magicSum = 15;

    // Check that all numbers are unique and within the range 1-9
    const uniqueNumbers = new Set(flattenGrid);
    if (uniqueNumbers.size !== 9 || Math.min(...flattenGrid) !== 1 || Math.max(...flattenGrid) !== 9) {
        return false;
    }

    // Check rows
    for (let i = 0; i < 3; i++) {
        if (grid[i][0] + grid[i][1] + grid[i][2] !== magicSum) return false;
    }

    // Check columns
    for (let j = 0; j < 3; j++) {
        if (grid[0][j] + grid[1][j] + grid[2][j] !== magicSum) return false;
    }

    // Check diagonals
    if (grid[0][0] + grid[1][1] + grid[2][2] !== magicSum) return false;
    if (grid[0][2] + grid[1][1] + grid[2][0] !== magicSum) return false;

    return true;
};
/**
 * @param {number[][]} grid
 * @return {number}
 */
// my ans
var findMaxFish = function (grid) {
    let max = 0
    //get max coords ng mga max
    for (i = 0; i < grid.length; i++) {
        for (j = 0; j < grid[i].length; j++) {
            max = grid[i][j] >= max ? grid[i][j] : max
        }
    }
    let maxMap = []
    for (i = 0; i < grid.length; i++) {
        for (j = 0; j < grid[i].length; j++) {
            if (grid[i][j] >= max) {
                maxMap.push({
                    "i": i,
                    "j": j,
                    "max": grid[i][j],
                    "maxAdj": Math.max(...[
                        i + 1 < grid.length ? grid[i + 1][j] : 0,
                        i - 1 >= 0 ? grid[i - 1][j] : 0,
                        j + 1 < grid[i].length ? grid[i][j + 1] : 0,
                        j - 1 >= 0 ? grid[i][j - 1] : 0
                    ])
                })
            }
        }
    }
    let ans = 0
    for (i = 0; i < maxMap.length; i++) {
        tmp = maxMap[i]['max'] + maxMap[i]['maxAdj']
        ans = tmp > ans ? tmp : ans;
    }
    return ans;
};

console.log(findMaxFish([[0, 2, 1, 0], [4, 0, 0, 3], [1, 0, 0, 4], [0, 3, 2, 0]]));
console.log(findMaxFish([[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1]]));


// AI ans
function findMaxFish(input) {
    if (Array.isArray(input[0])) {
        // Handle 2D grid
        const rows = input.length;
        const cols = input[0].length;
        let maxFish = 0;

        // Helper function for DFS in 2D grid
        function dfs2D(r, c) {
            if (r < 0 || c < 0 || r >= rows || c >= cols || input[r][c] === 0) {
                return 0;
            }

            const fish = input[r][c];
            input[r][c] = 0; // Mark as visited

            return (
                fish +
                dfs2D(r + 1, c) + // Down
                dfs2D(r - 1, c) + // Up
                dfs2D(r, c + 1) + // Right
                dfs2D(r, c - 1)   // Left
            );
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (input[i][j] > 0) {
                    maxFish = Math.max(maxFish, dfs2D(i, j));
                }
            }
        }

        return maxFish;
    } else {
        // Handle 1D array
        const n = input.length;
        let maxFish = 0;

        // Helper function for DFS in 1D array
        function dfs1D(index) {
            if (index < 0 || index >= n || input[index] === 0) {
                return 0;
            }

            const fish = input[index];
            input[index] = 0; // Mark as visited

            return fish + dfs1D(index - 1) + dfs1D(index + 1);
        }

        for (let i = 0; i < n; i++) {
            if (input[i] > 0) {
                maxFish = Math.max(maxFish, dfs1D(i));
            }
        }

        return maxFish;
    }
}

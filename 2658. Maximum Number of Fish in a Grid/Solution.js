/**
 * @param {number[][]} grid
 * @return {number}
 */
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

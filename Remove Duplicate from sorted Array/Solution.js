/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let k = 0;
    nums.map((num, index) => {
        if (index === 0 || nums[index] !== nums[index - 1]) {
            nums[k] = num;
            k++;
        }
    });
    return k;
};
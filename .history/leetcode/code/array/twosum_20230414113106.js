/**
 * leetcode——两数之和 II - 输入有序数组
 * https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/
 */

/
export const twosum1 = (numbers, target) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target && i != j) {
                return [i + 1, j + 1];
            }
        }
    }
};

/**
 * leetcode——两数之和 II - 输入有序数组
 * https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/
 */

/**
 * 方法1：暴力双循环
 * @param {*} numbers
 * @param {*} target
 * @returns
 */
export const twosum1 = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target && i != j) {
        return [i + 1, j + 1];
      }
    }
  }
};
/**
 * 方法2：map
 * 方法2：map
使⽤⼀个map对象来储存遍历过的数字以及对应的索引值。我在这⾥使⽤减法进⾏计算
1. 计算target和第⼀个数字的差，并记录进map对象中，其中两数差值作为key，其索引值作为
value。
2.再计算第⼆个数字与target的差，并与map对象中的数值进⾏对⽐，若相同，直接返回，如果
没有相同值，就将这个差值也存⼊map对象中。
● 重复第⼆步，直到找到⽬标值
 * @param {*} numbers 
 * @param {*} target 
 */
export const twoSum2 = (numbers, target) => {

};

// leetcode-557 反转字符串中的单词
// https://leetcode.cn/problems/reverse-words-in-a-string-iii/submissions/
// 知识点：Array和String API的基本应用
/**
 思路：
 1. 字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
 2. 对数组进行遍历，然后每个元素进行反转
 */

// 方法1
// export default (str) => {
//   return str.split(' ').map(item => item.split('').reverse().join('')).join(' ')
// }

// 方法2 正则匹配
// export default (str) => {
//   return str.split(/\s/g).map(item =>
//     item.split('').reverse().join('')
//   ).join(' ')
// }

// 方法3 match匹配
export default (str) => {
  // 对输入进行了限制（空）单词用空格隔开（没见过单词中有<等特殊字符之前考虑的是空格，单引号）(LeetCode测试用例)
  return str.length ? str.match(/[\S]+/g).map(item =>
    item.split('').reverse().join('')
  ).join(' ') : ''
}

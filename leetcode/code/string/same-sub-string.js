// leetcode-696 反转字符串中的单词
// https://leetcode.cn/problems/count-binary-substrings/

// 知识点：Math.min的基本应用
/**
 思路：
 1. 建立数据结构， 堆栈， 保存数据
 2. 给定任意子输入都返回第一个符合条件的子串
 3. 通过for循环找出所有子串
 */
// export default (str) => {
//   let r = []
//   let match = (str) => {
//     let j = str.match(/^(0+|1+)/)[0]
//     let o = (j[0] ^ 1).toString().repeat(j.length)
//     let reg = new RegExp(`^(${j}${o})`)
//     if (reg.test(str)) {
//       return RegExp.$1
//     } else {
//       return ''
//     }
//   }

//   for (let i = 0, len = str.length - 1; i < len; i++) {
//     let sub = match(str.slice(i))
//     if (sub) {
//       r.push(sub)
//     }
//   }
//   return r
// }

// 方法2
export default (s) => {
  let all = 0
  // 1. 匹配字符串，拿出连续0和1字段，返回数组
  let m = s.match(/([1]+)|([0]+)/g)
  // 2. 排除杂项
  if (m.length > 1) {
    // 3. 循环比较相加减
    for (let i = 0; i < m.length - 1; i++) {
      all += Math.min(m[i].length, m[i + 1].length)
    }
  }
  return all
}

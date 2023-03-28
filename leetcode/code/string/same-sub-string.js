// leetcode-696 反转字符串中的单词
// https://leetcode.cn/problems/count-binary-substrings/
// 知识点：Array和String API的基本应用
/**
 思路：
 1. 建立数据结构， 堆栈， 保存数据
 2. 给定任意子输入都返回第一个符合条件的子串
 3. 通过for循环找出所有子串
 */
export default (str) => {
  let r = []
  let match = (str) => {
    let j = str.match(/^(0+|1+)/)[0]
    let o = (j[0] ^ 1).toString().repeat(j.length)
    let reg = new RegExp(`^(${j}${o})`)
    if (reg.test(str)) {
      return RegExp.$1
    } else {
      return ''
    }
  }

  for (let i = 0, len = str.length - 1; i < len; i++) {
    let sub = match(str.slice(i))
    if (sub) {
      r.push(sub)
    }
  }
  return r
}

/**
 * leetcode——2409. 统计共同度过的日子数
 * https://leetcode.cn/problems/count-days-spent-together/
 */
/**
 * 方法1：转换成数学算数题: 最早离开日期减去最晚到达日期，结果即是两者交集
 * @param {*} arriveAlice 
 * @param {*} leaveAlice 
 * @param {*} arriveBob 
 * @param {*} leaveBob 
 * @returns 
 */

export const countDaysTogether = (arriveAlice, leaveAlice, arriveBob, leaveBob) =>{
    let a = (Math.min(Date.parse(leaveAlice), Date.parse(leaveBob)) - Math.max(Date.parse(arriveAlice), Date.parse(arriveBob))) / 86400000 + 1
    return a > 0 ? a : 0

}
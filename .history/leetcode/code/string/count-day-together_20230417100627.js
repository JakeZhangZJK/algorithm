export const countDaysTogether = () =>{
    let a = (Math.min(Date.parse(leaveAlice), Date.parse(leaveBob)) - Math.max(Date.parse(arriveAlice), Date.parse(arriveBob))) / 86400000 + 1
    return a > 0 ? a : 0

作者：okisama
链接：https://leetcode.cn/problems/count-days-spent-together/solution/by-okisama-hf1h/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
}
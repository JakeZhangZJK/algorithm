/** */

export const countDaysTogether = (arriveAlice, arriveBob, , leaveBob) =>{
    let a = (Math.min(Date.parse(leaveAlice), Date.parse(leaveBob)) - Math.max(Date.parse(arriveAlice), Date.parse(arriveBob))) / 86400000 + 1
    return a > 0 ? a : 0

}
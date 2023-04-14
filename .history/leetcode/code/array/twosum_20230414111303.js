/**
 * leetcode——两数之和 II - 输入有序数组
 * https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/
 */

export const Fun = {
    //方法1：暴力双重循环
    twosum1: (numbers,target) =>{
        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] === target && i != j) {
                    return [i + 1, j + 1]
                }
            }
        }
    
    作者：jakezhang-code
    链接：https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/solution/167-liang-shu-zhi-he-ii-shu-ru-you-xu-sh-k2z5/
    来源：力扣（LeetCode）
    著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
    },
    twosum2: () =>{},
    twosum3: () =>{},
    

}
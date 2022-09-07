/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let number=new Set()
    let ans=[]
    let len=nums.length
    nums.sort(function(a, b){return a-b})
    console.log(nums)
    for(let i=0; i<len; i++) {
        let start=i+1
        let end=len-1
        while(start!=end && start<len) {
            sum=nums[i]+nums[start]+nums[end] 
            if(sum==0) {
                let str=`${nums[i]},${nums[start]},${nums[end]}`
                if(!number.has(str)) {
                    number.add(str)
                    ans.push([nums[i], nums[start], nums[end]])
                }
            }
            if( sum <= 0  ) start+=1
            else end-=1
        }
    }
    return ans
};
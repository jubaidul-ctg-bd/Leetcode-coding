/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let number=new Set()
    let ans=[]
    let len=nums.length
    nums.sort(function(a, b){return a-b})
    console.log(nums)
    for(let i=0; i<len; i++) {
        for(let j=i+1; j<len; j++) {
            let start=j+1
            let end=len-1
            while(start!=end && start<len) {
                sum=nums[i]+nums[j]+nums[start]+nums[end] 
                if(sum==target) {
                    let str=`${nums[i]},${nums[j]},${nums[start]},${nums[end]}`
                    if(!number.has(str)) {
                        number.add(str)
                        ans.push([nums[i], nums[j],nums[start], nums[end]])
                    }
                }
                if( sum <= target  ) start+=1
                else end-=1
            }
        }
    }
    return ans
};
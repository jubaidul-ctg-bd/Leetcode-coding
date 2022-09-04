/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let cnt=0;
  let point=-1
  let ans=true
  for(let i = nums.length-2; i>=0; i--)  {
      if(nums[i]==0 && point<0) {
          point=i
          ans=false
          cnt=0
      }
      else if(point>=0) {
          cnt++
          console.log(cnt, nums[i])
          if(cnt<nums[i]) {
              ans=true
              point=-1
          }
          
      }
  }
  return ans
};
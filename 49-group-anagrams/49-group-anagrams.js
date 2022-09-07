/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj={}
    for(let i=0; i<strs.length; i++) {
         let str = strs[i]
         str = str.split('').sort((a, b) => a.localeCompare(b)).join('');
         if(!obj[str]) {
             obj[str] = [strs[i]]
         } else {
             obj[str].push(strs[i])
         }
    }
    let output = Object.entries(obj).map(([key, value]) => (value));
    return output
};
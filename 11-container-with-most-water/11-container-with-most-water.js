/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let containerSize = height.length 
    let pointer = 1 
    let maxx = 0
    let LP = 0
    let RP = containerSize-1
    for(let i=1; i<=10000; i++) {
        if(LP==RP) break;
        while(LP<containerSize && height[LP]<i) {
            LP++;
            if(LP==RP) break;
        }
        while(RP>0 && height[RP]<i) {
            RP--;
            if(LP==RP) break;
        }
        if(height[LP]>=i && height[RP]>=i && LP!=RP) {
             maxx = Math.max(maxx, (i*(RP-LP)))
        }
    }
    return maxx;
};
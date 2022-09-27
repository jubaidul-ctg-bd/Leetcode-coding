/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    let n = dominoes.length
    let rv = []
    let lv = []
    let rc = n+1
    let lc = n+1
    for(let i=0; i<n; i++) {
        if(dominoes[i]=='R') rc = 1
        else if(rc<n && dominoes[i]=='.') ++rc
        else rc = n+1
        rv[i] = rc
        if(dominoes[n-i-1]=='L') lc = 1
        else if(lc<n && dominoes[n-i-1]=='.') ++lc
        else lc = n+1
        lv[n-i-1] = lc
    } 
    console.log(rv, lv)
    let ans = ''
    for(let i=0; i<n; i++) {
        if(rv[i]==lv[i]) ans += '.'
        else if(rv[i]<lv[i]) ans += 'R'
        else ans += 'L'
    }
    return ans
};
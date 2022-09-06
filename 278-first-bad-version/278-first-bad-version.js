/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        left = 1
        right = n
        while(left<right) {
            tmp = parseInt((left+right)/2)
            if(isBadVersion(tmp)) right = tmp 
            else left = tmp+1
        }
        return right
    };
};

        
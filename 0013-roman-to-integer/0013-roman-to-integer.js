/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    for (let i = 0; i < s.length; i++) {
        let curr = romanMap[s[i]];
        let next = romanMap[s[i + 1]];
        if (next && curr < next) {
            sum -= curr;
        } else {
            sum += curr;
        }
    }
    return sum;
};
// @lc code=end


/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    const n = arr.length;
    const f = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; ++i) {
        let mx = 0;
        for (let j = i; j > Math.max(0, i - k); --j) {
            mx = Math.max(mx, arr[j - 1]);
            f[i] = Math.max(f[i], f[j - 1] + mx * (i - j + 1));
        }
    }
    return f[n];
};
// 1 4 1 5 20
// 7 3 6 1 28
// 9 9 3.  27

// 1 4 1     12
// 5 7 3 6   28
// 1 9 9 3   36

// 1 4 1 12
// 5 7 3 21
// 6 1 9 27
// 9 3.  18

// 1 4 1.   12
// 5 7 3 6. 28
// 1 9 9 3. 36

// 9 3
// 9 1 6 3
// 7 5 1 4
// 1
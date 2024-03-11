/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    order = order.split('');
    return s.split('').sort((a,b)=>order.findIndex(e=>e===a)-order.findIndex(e=>e===b)).join('');
};
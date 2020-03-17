module.exports = function reverse(n) {
    let arr = Math.abs(n).toString().split('');
    let str = arr.reverse().join('');
    return str;
}
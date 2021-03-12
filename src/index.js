// exports.min = function min(array) {
//     if (!array) return 0
//     return array.reduce((acc, el) => {
//         if (acc > el) acc = el
//         return acc
//     }, 0)
// }

exports.min = function min(array) {
    return (!array || !array.length) ? 0 : Math.min(...array)
}

// exports.max = function max(array) {
//     if (!array) return 0
//     return array.reduce((acc, el) => {
//         if (acc < el) acc = el
//         return acc
//     }, 0)
// }

exports.max = function max(array) {
    return (!array || !array.length) ? 0 : Math.max(...array)
};

exports.avg = function avg(array) {
    if (!array) return 0
    return array.reduce((acc, el) => {
        acc += el / array.length
        return Number(acc.toFixed(2))
    }, 0)
}
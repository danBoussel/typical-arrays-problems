exports.min = function min(array) {
    if (!array) return 0
    return array.reduce((acc, el) => {
        if (acc > el) acc = el
        return acc
    }, 0)
}


exports.max = function max(array) {
    if (!array) return 0
    return array.reduce((acc, el) => {
        if (acc < el) acc = el
        return acc
    }, 0)
}

exports.avg = function avg(array) {
    if (!array) return 0
    return array.reduce((acc, el) => {
        acc += el / array.length
        return Number(acc.toFixed(2))
    }, 0)
}
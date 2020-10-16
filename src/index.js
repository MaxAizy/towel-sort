
// You should implement your task here.

module.exports = function towelSort(matrix) {
    return matrix
        ? matrix
            .map((arr, index) => index % 2 ? arr.reverse() : arr)
            .flat()
        : [];
}

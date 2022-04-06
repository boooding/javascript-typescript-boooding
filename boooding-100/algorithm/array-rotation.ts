const data1 = [1,2,3,4,5,6]
const data2 = [1,2,3,4,5,6]

/**
 * use pop and unshift
 * @param arr
 * @param k
 */
function rotation1(arr: number[], k: number): number[] {
    const length = arr.length;
    if (!k || arr.length <= 1) {
        return arr
    }
    const step = Math.abs(k % length)
    for (let i = 0; i < step; i++) {
        const n = arr.pop();
        if (n) {
            arr.unshift(n)
        }
    }
    return arr;
}

/**
 * use concat
 * @param arr
 * @param k
 */
function rotation2(arr: number[], k: number): number[] {
    const length = arr.length;
    if (!k || arr.length <= 1) {
        return arr
    }
    const step = Math.abs(k % length)
    const part1 = arr.slice(-step);
    const part2 = arr.slice(0, length - step)
    return part1.concat(part2);
}

export = {
    rotation1,
    rotation2
}
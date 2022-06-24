const { fib } = require('./util')

function memoize(fn) {
    const cache = {}
    return (...args) => {
        if (cache[args.toString()]) {
            console.log(cache);
            return cache[args.toString()]
        }
        const result = fn(...args)
        cache[args.toString()] = result
        return result
    }
}

const memoizedFib = memoize(fib)

console.time()
console.log(memoizedFib(43))
console.timeEnd()

console.time()
console.log(memoizedFib(43))
console.timeEnd()

console.time()
console.log(memoizedFib(20))
console.timeEnd()

console.time()
console.log(memoizedFib(6))
console.timeEnd()
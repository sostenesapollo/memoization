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

console.log(memoizedFib(41))
console.log(memoizedFib(41))
console.log(memoizedFib(40))
console.log(memoizedFib(6))
function fatorial(n) {
    if (n == 1 || n == 0) {
        return 1
    }
    return n * fatorial(n - 1)
}
console.log(fatorial(0))
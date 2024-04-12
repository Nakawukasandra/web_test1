function fibonacci (limit) {
    let fibseries = [1,1];
    let i = 2;
while (fibseries[i - 1] + fibseries[i - 2] <= limit) {
    fibseries[i] = fibseries[i - 1] + fibseries[i - 2];
    i++;
}
return fibseries;
}
function printFibonacciseries(series){
    console.log("Fibonacci numbers up to 100:");
    series.forEach((number) => console.log(number));
}

let fibseriesUpTo100 = fibonacci(100);
printFibonacciseries(fibseriesUpTo100)
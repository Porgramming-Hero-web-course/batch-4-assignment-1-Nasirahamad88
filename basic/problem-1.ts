//Problem 1

function sumArray(numbers : number[] ):number{
    return numbers.reduce((plus, current) => plus + current, 0);
}

const result = sumArray([1,2,3,4,5]);
console.log(result);
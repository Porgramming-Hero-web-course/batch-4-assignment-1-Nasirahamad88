//Problem 2

function removeDuplicates(array:number [] ): number[] {

    const unique:number[] = [];
    const seen:Set<number> = new Set();


    for (const num of array){
        if (!seen.has(num)){
            unique.push(num);
            seen.add(num);
        }
    }

    return unique;

}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))

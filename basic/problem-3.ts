//Problem 3

function countWordOccurrences(sentence: string,word:string):number {
    const lowerCase = sentence.toLowerCase();
    const lowerCaseWords = word.toLowerCase();

    const words = lowerCase.split(" ")

    let count = 0
    for (const word of words){
        if (word === lowerCaseWords){
            count++
        }
    }
 return count;


}

console.log(countWordOccurrences("I love typscript", "typscript"))

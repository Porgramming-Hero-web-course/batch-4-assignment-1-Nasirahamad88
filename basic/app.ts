//Problem 1

function sumArray(numbers : number[] ):number{
    return numbers.reduce((plus, current) => plus + current, 0);
}

const result = sumArray([1,2,3,4,5]);
console.log(result);


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


//Problem 4

type Circle ={
    shape:"circle",
    radius:number;
}
type Rectangle = {
    shape:"rectangle",
    width:number;
    height:number;

}

type Shape = Circle | Rectangle;

function calculateShapeArea(shape:Shape): number {
    if (shape.shape=== "rectangle"){
        return shape.width * shape.height;

    }else(shape.shape==="circle") {
        return parseFloat((Math.PI * shape.radius ** 2).toFixed());

    }
    return 0;
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea)
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(rectangleArea)



  //Problem 5 

  function getProperty<T,K extends keyof T>(object:T, key:K): T[K]{
    return object[key]
  }

  const person = {name:"Alice", age: 30};
  console.log(getProperty(person,"name"))

  //Problem 6
  
  interface Profile{
    name:string,
    age:number,
    email:string
  }

  function updateProfile(profile:Profile,updates:Partial<Profile>): Profile{
    return {...profile,...updates};

  }

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

console.log(updateProfile(myProfile, { age: 26 }));


//Problem 7 

  class Car {
    make :string;
    model:string;
    year:number;


    constructor(make:string,model:string, year:number){
        this.make= make;
        this.model = model;
        this.year = year;

    }


    getCarAge():number{
        const currentYear =  new Date().getFullYear();
        return currentYear - this.year;

    }



  }

const car = new Car("Honda", "Civic", 2018);


console.log(car.getCarAge())




//Problem 8 




function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every((key) => key in obj);
}

const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));       // Output: true
console.log(validateKeys(person, ["name", "address"]));   // Output: false







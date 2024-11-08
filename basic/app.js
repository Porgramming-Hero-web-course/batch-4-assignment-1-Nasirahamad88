//Problem 1
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function sumArray(numbers) {
    return numbers.reduce(function (plus, current) { return plus + current; }, 0);
}
var result = sumArray([1, 2, 3, 4, 5]);
console.log(result);
//Problem 2
function removeDuplicates(array) {
    var unique = [];
    var seen = new Set();
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var num = array_1[_i];
        if (!seen.has(num)) {
            unique.push(num);
            seen.add(num);
        }
    }
    return unique;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
//Problem 3
function countWordOccurrences(sentence, word) {
    var lowerCase = sentence.toLowerCase();
    var lowerCaseWords = word.toLowerCase();
    var words = lowerCase.split(" ");
    var count = 0;
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word_1 = words_1[_i];
        if (word_1 === lowerCaseWords) {
            count++;
        }
    }
    return count;
}
console.log(countWordOccurrences("I love typscript", "typscript"));
function calculateShapeArea(shape) {
    if (shape.shape === "rectangle") {
        return shape.width * shape.height;
    }
    else
        (shape.shape === "circle");
    {
        return parseFloat((Math.PI * Math.pow(shape.radius, 2)).toFixed());
    }
    return 0;
}
var circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);
var rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(rectangleArea);
//Problem 5 
function getProperty(object, key) {
    return object[key];
}
var person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
function updateProfile(profile, updates) {
    return __assign(__assign({}, profile), updates);
}
var myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
//Problem 7 
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getCarAge = function () {
        var currentYear = new Date().getFullYear();
        return currentYear - this.year;
    };
    return Car;
}());
var car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());
//Problem 8 
function validateKeys(obj, keys) {
    return keys.every(function (key) { return key in obj; });
}
var person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"])); // Output: true
console.log(validateKeys(person, ["name", "address"])); // Output: false

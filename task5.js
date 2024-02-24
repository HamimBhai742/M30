// const numbers = [4, 5, 6, 7, 8, 9, 1, 2, 3]
// let sum = 0;
// const numLength = numbers.length
// for (const number of numbers) {
//     // console.log(squreArray);
//     const squre = number * number
//     sum = sum + squre
//     // console.log(numLength);

//     // console.log(sum);
//     // return sum
// }
// const avarageSumOfSqure = sum / numLength
// console.log(`Total Sum Of Squre: ${sum}`);
// console.log(`Total Item : ${numLength}`);
// console.log(`Avarage Value : ${avarageSumOfSqure.toFixed(2)}`);

const array = (inputArray) => {
    // console.log(inputArray);
    let sum = 0;
    for (const number of inputArray) {
        sum = sum + number
    }
    const inputArrayLength = inputArray.length
    const result = sum / inputArrayLength
    return result
}
console.log(array([43, 5, 67, 8, 5, 34, 31, 34]));
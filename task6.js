// const num1=[32,45,78,98,65,21,34,67,89,43,26]
// const num2=[34,56,88,65,22,23,75,32,12,45]
// const numbers=num1.concat(num2)
// console.log(Math.max(...numbers));

const numbers = (num1, num2) => {
    // console.log(num1,num2);
    const number=num1.concat(num2)
    const maxNumber=Math.max(...number)
    return maxNumber
}
console.log(numbers([32, 45, 78, 98, 65, 21, 34, 67, 89, 43, 26], [34, 56, 88, 65, 22, 23, 75, 32, 12, 45]));
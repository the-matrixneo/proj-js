//Immediately invoked function expression
// to avoid pollution from global scope , immediate invoking
//using arrow function => two iife then ; must be used
((num1) => {
  console.log(`db connnected  ${num1}`);
})(4);
(function typo(num2) {
  console.log(`Db connected ${num2}`);
})(7);

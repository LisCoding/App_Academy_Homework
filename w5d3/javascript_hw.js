// Write a function that takes three strings - a verb, an adjective, and a noun -
// uppercases and interpolates them into the sentence "We shall VERB the ADJECTIVE NOUN".
// Use ES6 template literals.
function madLib(verb, adjective, noun) {
  return `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`;
}
madLib("dance", "fast", "party");

// isSubstring?
// Input
// A String, called searchString.
// A String, called subString.
// Output: A Boolean. true if the subString is a part of the searchString.

function isSubstring(searchString, subString) {
  //return searchString.includes(subString)
  if (searchString.includes(subString)){
    return true;
  }
  else {
    return false;
  }
}

isSubstring("hello there", "hello");

// 3 and 5 are magic numbers.
// Define a function fizzBuzz(array) that takes an array and returns a new array of every
// number in the array that is divisible by either 3 or 5, but not both.

function fizzBuzz(array) {
  let arraynew = [];
  for(var i = 0; i < array.length; i++){
    if(array[i] % 3 === 0 && array[i] % 5 === 0){
    }
    else if(array[i] % 3 === 0) {
      arraynew.push(array[i]);
    }
    else if(array[i] % 5 === 0) {
      arraynew.push(array[i]);
    }
  }
  console.log(arraynew);

}

fizzBuzz([1,2,3,5,6,15]);

// isPrime
// Define a function isPrime(number) that returns true if number is prime. Otherwise, false.
// Assume number is a positive integer.

function isPrime(number) {
  var i = 2;
  while(i < number) {
    if(number % i === 0){
      return false
    }
    i++;
  }
  return true;

}
isPrime(2);

// Using firstNPrimes, write a function sumOfNPrimes(n) that returns the sum of the
// first n prime numbers.  Hint: use isPrime as a helper method.
function sumOfNPrimes(n) { // 2 -> 2, 3 ->5
  let sum = 0;
  let primes = [];
  var i = 2;
  while(primes.length !== n){
    if(isPrime(i)){
      sum += i;
      primes.push(i);
    }
    i++;
  }
  return sum;
}
sumOfNPrimes(3);

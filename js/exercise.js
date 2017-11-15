// Log every number from 0 to 100, including 0 and 100, but if the number is evenly divisible by 3 log 'fizz' instead, if the number is evenly divisible by 3 and 5 log 'fizzbuzz' if is not evenly divisible by either 3 or 5 log the number




 // if (var x = 100, x / 3) {
  //  console.log(fizz);

 // }


 for (var = 0; <= 100; x++) { //
   if (x % 3 === 0) {
     console.log('fizz');
   } else if (x % 5 === 0) {
     console.log('buzz');
   }else if (x % 3 === 0 && x % 5 === 0) {
     console.log('fizzbuzz');
   }else {
     console.log(x);
   }
   y++;
 }


 for (var = 0; <= 100; x++) {
   if (x === 0) {
     console.log(x);
   } else if (x % 3 === 0 && x % 5 === 0) {
     console.log("fizzbuzz")
   } else if (x % 5 === 0) {
     console.log('buzz');
   }else if (x % 3 === 0) {
     console.log('fizz');
   }else {
     console.log(x);
   }
 }

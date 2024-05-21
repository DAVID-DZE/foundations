function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      // Step 1: If the element is an even number
      if (array[i] % 2 === 0) {
        // Step 2: Multiply this number by three
        const tripleEvenNumber = array[i] * 3;
  
        // Step 3: Add the new number to the total
        sum += tripleEvenNumber;
      }
    }
    return sum;
}

function sumOfTripledEvens2(array) {

    return array
        .filter((num) => (num % 2 === 0))
        .map((num) => (num * 3))
        .reduce((total, current) => (total + current));
        
}

const x = [2, 4, 3];

console.log(sumOfTripledEvens(x));

const map = x.map(() => {});

console.log(sumOfTripledEvens2(x));
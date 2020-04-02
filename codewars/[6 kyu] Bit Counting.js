/* Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case */

var countBits = function(n) {

    let degree = 0;
    let result = 1;
    let base = 2;

    while (result <= n){
        result = Math.pow(base,degree);
        degree++;
    }
    
    result = Math.pow(base,degree-2);

    let count = 0;
    while (result != 0){
        if (n - result >= 0){
            n -=result;
            count++;
        }
        result /= 2;
        
    }

    return count;
    console.log(count);

};

countBits(4);
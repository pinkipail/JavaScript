/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.*/
function solution(number){
    let sum = 0;
    for (let i = 1; i < n; i++){
        if (!(i % 3) && !(i %5)){
            sum +=i;
            continue;
        }
           
        if (!(i % 3)) 
            sum +=i;
    
        if  (!(i %5))
            sum +=i;
    }
    console.log(sum);
    return n;
}

let n = 10;
solution(n);
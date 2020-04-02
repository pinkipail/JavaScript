/* Given a triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
find the triangle's row knowing its index (the rows are 1-indexed), e.g.:

odd_row(1)  ==  [1]
odd_row(2)  ==  [3, 5]
odd_row(3)  ==  [7, 9, 11]
Note: your code should be optimized to handle big inputs. */
function oddRow(n){

    function num(n){
        sum = 0;
        for (i = 0; i < n; i ++)
            sum +=i
        return sum
    }

    simpleNum = [];
    count = 0;
    l = num(n)*2+1;
    for (i = 0; i < n; i ++ ){
        simpleNum.push(l + i*2);
    }
  
    return simpleNum;

}

n = 5;
console.log(oddRow(n));

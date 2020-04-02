/* Story
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

Kata Task
How many deaf rats are there?

Legend
P = The Pied Piper
O~ = Rat going left
~O = Rat going right
Example
ex1 ~O~O~O~O P has 0 deaf rats
ex2 P O~ O~ ~O O~ has 1 deaf rat
ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats */

function countDeafRats (town) {
    movingLeft = "O~";
    movingRight = "~O";
    count = 0;
    numberP = 0;
    for (i in town)
        if (town[i] == "P")
            numberP =  i;
    console.log(numberP);
    for(i = 0; i < town.length; i++){
        if((town[i] + town[i+1]) == movingLeft){
            if (numberP > i){
                count++;
                console.log(town[i] + town[i+1]," ", i);
            }
            i++
            continue;
        }
        if((town[i] + town[i+1]) == movingRight){
            if (numberP < i){
                count++;
                console.log(town[i] + town[i+1]," ", i);
            }
                
            i++
            continue;
        }
    }

    return count;


}



  str="~O  O~~O  ~O~O~O~OO~~O~O~O~OO~~OO~~OO~O~~O  ~O~OP~OO~O~  O~O~O~O~O~O~O~";
  console.log(countDeafRats(str));

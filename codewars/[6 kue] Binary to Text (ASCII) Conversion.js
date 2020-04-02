/* Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).

Each 8 bits on the binary string represent 1 character on the ASCII table.

The input string will always be a valid binary string.

Characters can be in the range from "00000000" to "11111111" (inclusive)

Note: In the case of an empty binary string your function should return an empty string. */

function binaryToString(binary) {

    if (binary){

        divBin = binary.match(/.{1,8}/g);
        let str = '';
    
        for (num of divBin){
            str += String.fromCharCode((parseInt(num,2)));
        }
    
        return str;
    }
    else 
        return binary

}

console.log(binaryToString('01001011010101000100100001011000010000100101100101000101'))

/* second way */
binaryToString = (b) => (b)? b.match(/.{1,8}/g).reduce((s,n)=> s + String.fromCharCode((parseInt(n,2))),'') : b 




/* Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number. */
const divCon=x=>x.reduce((a,b)=>a+(0+b==b?b:-+b),0)

a = [9, 3, '7', '3'];
console.log(divCon(a));
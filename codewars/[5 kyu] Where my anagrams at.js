/* What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => [] */
function anagrams(word, words) {
    
    let arrWord = [];
    for (let wordForCompare of words){
        let copyWord = wordForCompare;

        for (char of word){
            copyWord = copyWord.replace(char, '');
        }
        if (!copyWord){
            arrWord.push(wordForCompare);
        }
    }

    return arrWord;

}

/* second way */
anagramsTwo = (word, words) =>  words.filter((wordForCompare)=>!(word.split('').reduce((copyWord,char)=>copyWord.replace(char, ''),wordForCompare)));

console.log(anagramsTwo('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));

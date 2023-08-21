function isPalindrome(word) {
  // Write your algorithm here
  let splitTheWord = word.split('');
  // console.log(splitTheWord);
  let reverseTheSplit = splitTheWord.reverse();
  // console.log(reverseTheSplit);
  let joinIt = splitTheWord.join('');
  // console.log(joinIt);
  if(word === joinIt){
    // console.log(word);
    // console.log(joinIt);
    return true 
  } else {
    // console.log(word);
    // console.log(joinIt);
    return false
  }
  
}

/* 
  Add your pseudocode here
  - determine if the word is spelled the same
  forwards and backwards - true or false
  - write code that returns the reverse of the string,
  store that in a variable (b)
  - using if else, if a(forward)===b(backward) = true
*/

/*
  Add written explanation of your solution here
  - used built in array methods to reverse the string
split(), reverse(), join()
  - from there I could use an if/else statement to compare 
  the passed in word to the reversed word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('expecting false')
  console.log('=>', isPalindrome('brother'))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("expecting true");
  console.log('=>', isPalindrome('madam'));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

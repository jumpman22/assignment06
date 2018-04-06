/*eslint-env browser*/
//Solve the following string/math/number/function/array-related problems. Each solution should be written within its own function and the output should be //displayed within a console window. The display should be the return value of the function call.

//STEP 1 Write a JavaScript function that returns a passed string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.
//Sample Data and Output
//Example string: 'webmaster' 
//Expected Output: 'abeemrstw'

//function alphabetize(str) {
//    "use strict";
//    var x = str.split("").sort().join("");
//		window.console.log(x);
//}
//alphabetize("webmaster");

//STEP 2 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string to upper case.
//
//Sample Data and Output
//Example string: 'the quick brown fox' 
//Expected Output: 'The Quick Brown Fox'
//function upCase(str) {
//	var upper = String(str);
//  var newStr = upper.replace(/(^| )(\w)/g, function(first) {
//    return first.toUpperCase();
//  });
//	window.console.log(newStr);
//}
//upCase("the quick brown fox");


//STEP 3 Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
//
//Sample Data and Output
//Example string: 'The quick brown fox' 
//Expected Output: 5
//function vowels(str) {
//	var count = str.match(/[aeiou]/gi);
//	window.console.log("There are " + count.length + " vowels in the string:\n" + str);
//}
//vowels("The quick brown fox");

//STEP 4 Write a JavaScript function that generates a string id (specified length) of random characters.
//
//Sample Data and Output
//Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA
//function random() {
//	var x = Math.random().toString(36).substr(2, 8);
//	window.console.log(x);
//}
//random();


//STEP 5  Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
//
//Sample Data and Output
//Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
//Expected output: "United States of America"
//function longest(arr) {
//	var x = arr.sort(function (a, b) { return b.length - a.length; })[0];	
//	window.console.log(x);
//}
//longest(["Australia", "Germany", "United States of America"]);


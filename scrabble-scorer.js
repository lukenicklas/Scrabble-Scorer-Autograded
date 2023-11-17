// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some Scrabble!\n"); 
   let scoredWord = input.question("Enter word to score: ");
   //console.log(oldScrabbleScorer(scoredWord));
   return scoredWord
};

//let simpleScorer;
function simpleScorer(word) {
   word=word.toUpperCase();
   let letterPoints= 0

   for (let i = 0; i < word.length; i++) {
      letterPoints++
      
}
return letterPoints
}

////////////////////////////////////////////

//let vowelBonusScorer;

function vowelBonusScorer(word) {
   word=word.toUpperCase();
   let letterPoints = 0
   let vowels = ["A", "E", "I", "O", "U"]

   for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
         letterPoints += 3;
      }
         else {
            letterPoints++
         }
      }
      return letterPoints
}


//let scrabbleScorer = oldScrabbleScorer
function scrabbleScorer(word) {
   let letterPoints = 0

   for (let i = 0; i<word.length; i++) {
      letterPoints += (newPointStructure[word[i]]);
   }
   return letterPoints
}

const scoringAlgorithms = [
   {
      name: "Simple Score",
      description: "Each letter is worth 1 point",
      scorerFunction: simpleScorer
   },
   {
      name:"Bonus Vowels",                                               
      description: "Vowels are 3 pts, consonants are 1 pt.",
      scorerFunction: vowelBonusScorer
   },
   {
      name: "Scrabble",
      description: "The traditional scoring algorithm.",
      scorerFunction: scrabbleScorer
   }
]   

function scorerPrompt() {
   let scoringChoice = input.question("Enter 0, 1, or 2: ")
   let numberScoringChoice = Number(scoringChoice)
   return scoringAlgorithms[numberScoringChoice]
   }

   
  // console.log("Which scoring algorithm would you like to use?\n")
   //for (let i=0; i < scoringAlgorithms.length; i++) {

   //}
   //console.log("\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses Scrabble point system")
  // console.log(`Enter 0, 1, or 2: ${scoringChoice}\nScore for '${scoredWord}': ${scoringAlgorithms[i].scoreFunction.letterPoints}`)
      // Simple scoring
     // console.log("algorithm name: ", scoringAlgorithms[i].name);
      //console.log("scoringFunction result: ", scoringAlgorithms[i].scoreFunction("JavaScript"));


function transform(oldPointStructure) {
   let newPointObject = {}; //new list for transformed info
   for (let key in oldPointStructure) { //going through each letter in the list and looking at its points
      for (let i=0; i<oldPointStructure[key].length; i++) { //going through each letter in the word
         newPointObject[oldPointStructure[key][i].toLowerCase()] = Number(key);//changing each letter to lowercase and assigning points from old list to the letter in new list
      }
      
   }
   return newPointObject;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   //initialPrompt();
   let scoredWord = initialPrompt()
   //console.log(initialPrompt())
   console.log("Which scoring algorithm would you like to use?\n")
   console.log("\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses Scrabble point system")
   console.log(`Score for '${scoredWord}': ${scorerPrompt().scorerFunction(scoredWord)}`)
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

function searchLines(words, concordance, data) {
    //create empty set
    const linesContainingWords = new Set();
    //loop through each word
    for (let currentNode = words.head; currentNode; currentNode = currentNode.next) {
      //get current word, lowercase
      const word = currentNode.value.toLowerCase();
      //check if in concordance
      if (concordance[word]) {
      //if yes, loop through each line
        concordance[word].forEach(lineNum => {
           //add line from data
          linesContainingWords.add(data[lineNum]);
        });
      }
    }
    
      //convert line into array
    return [...linesContainingWords];
    
  }
  
  module.exports = searchLines;
function concordance(data) {
    //Initialize an empty map to store concordance
    const concord = new Map();
    //loop through the lines
    data.forEach((line, lineNum) => {
        //split lines into words and filter
      const words = line.split(/[\s.,';]/)
          .filter(word => word !== '');
     //loop through words 
      words.forEach(word => {
        //lowercase
      const formatWord = word.toLowerCase();
        //check if word isn't in map
      if(!concord.has(formatWord)) {
          //if not, add word and line number
        concord.set(formatWord, [lineNum]);
      } else if (!concord.get(formatWord)
                 .includes(lineNum)) {
        //if present, add line number
      concord.get(formatWord).push(lineNum);
      }
      });
    });
  
    //covert map to object
    return Object.fromEntries(concord);
  }
  
  module.exports = concordance;

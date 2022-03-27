const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const result = tutorials.map(sentence =>{
    const words = sentence.split(" ");
    const mWords = words.map(word => {
      const letter = word.split("");
      letter[0] = letter[0].toUpperCase();
      return letter.join('');
    })
    return mWords.join(' ');
  })
  return result;
}

console.log(titleCased(tutorials));

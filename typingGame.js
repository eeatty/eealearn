const quotes = [
    'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
    'I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.',
    'It isn’t what we say or think that defines us, but what we do.',
    'Indulge your imagination in every possible flight.',
    'Selfishness must always be forgiven you know, because there is no hope of a cure.',
    'Vanity working on a weak head, produces every sort of mischief.',
    'Nobody minds having what is too good for them.',
    'We have all a better guide in ourselves, if we would attend to it, than any other person can be.',
    'Happiness in marriage is entirely a matter of chance.',
    'The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.',
    'One half of the world cannot understand the pleasures of the other.',
    'Let me know when you begin the new tea, and the new white wine. My present elegances have not yet made me indifferent to such matters. I am still a cat if I see a mouse.',
    'We are to have a tiny party here tonight. I hate tiny parties, they force one into constant exertion.',
    'There is safety in reserve, but no attraction. One cannot love a reserved person.',
    'Nothing ever fatigues me but doing what I do not like.',
    'Laugh as much as you choose, but you will not laugh me out of my opinion.',
    'For what do we live, but to make sport for our neighbors, and laugh at them in our turn?',
    'Without music, life would be a blank to me.',
    'To be fond of dancing was a certain step towards falling in love.',
    'There are people, who the more you do for them, the less they will do for themselves.',
    'One man’s style must not be the rule of another’s.',
    'It is not time or opportunity that is to determine intimacy; it is disposition alone. Seven years would be insufficient to make some people acquainted with each other, and seven days are more than enough for others.',
    'It is very difficult for the prosperous to be humble.',
    'I do not want people to be very agreeable, as it saves me the trouble of liking them a great deal.',
    'There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves; it is not my nature.',
    'If I loved you less, I might be able to talk about it more.',
    'There are as many forms of love as there are moments in time.',
    'Give him a book, and he will read all day long.',
    'Angry people are not always wise.',
    'But people themselves alter so much, that there is something new to be observed in them forever.',
    'The distance is nothing when one has motive.',
    'Do anything rather than marry without affection.',
    'What are young men to rocks and mountains?',
    'Their eyes instantly met, and the cheeks of both were overspread with the deepest blush.',
    'She was convinced that she could have been happy with him, when it was no longer likely they should meet.',
    'Till this moment I never knew myself.',
    'My good opinion once lost, is lost forever.',
];

let words = [];
let wordIndex = 0;

let startTime = Date.now();

const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

document.getElementById('start').addEventListener('click', () => {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    words = quote.split(' ');
    wordIndex = 0;

    const spanWords = words.map(function(word) { return `<span>${word} </span>`});
    quoteElement.innerHTML = spanWords.join('');
    quoteElement.childNodes[0].className = 'highlight';
    messageElement.innerText = '';
    
    typedValueElement.value = '';
    typedValueElement.focus();
    
    startTime = new Date().getTime();
});
    
typedValueElement.addEventListener('input', () => {
    const currentWord = words[wordIndex];
    const typedValue = typedValueElement.value;
    
     if (typedValue === currentWord && wordIndex === words.length - 1) {
         const elapsedTime = new Date().getTime() - startTime;
         const message = `Nice typing! You finished in ${elapsedTime / 1000} seconds.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
      typedValueElement.value = '';   
      wordIndex++;
      for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
      quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    typedValueElement.className = '';
  } else {
      typedValueElement.className = 'error';
  }
});
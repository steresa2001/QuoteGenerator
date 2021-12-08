/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Quotes array containing objects
const quotes = [
  {
    quote: "Hasta la vista, baby.",
    source: "Arnold Schwarzenegger",
    citation: "The Terminator",
    year: 1984,
    tags: "Humor",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    source: "Aristotle",
  },
  { quote: "Get busy living or get busy dying.", source: "Stephen King" },
  {
    quote: "Toto, I've a feeling we're not in Kansas anymore.",
    source: "Judy Garland",
    citation: "The Wizard of Oz",
    year: 1939,
  },
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    source: "John F. Kennedy",
  },
  {
    quote: "That’s one small step for a man, one giant leap for mankind.",
    source: "Neil Armstrong",
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    source: "Tony Robbins",
  },
];

/* getRandomQuote function creates a random number between 0 and length of quotes array 
and returns that object from quotes array */
let prevRandomNumber = 0;
const getRandomQuote = () => {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  if (prevRandomNumber === randomNumber) {
    return getRandomQuote();
  }
  prevRandomNumber = randomNumber;
  return quotes[randomNumber];
};

// generateRGBNumber function generates a random RGB value from 0 to 255;
const generateRGBNumber = () => {
  const number = Math.floor(Math.random() * 255);
  return number;
};

// setBackgroundColor function sets background color of body
const setBackgroundColor = () => {
  const backgroundColor = `background-color:rgb(${generateRGBNumber()}, ${generateRGBNumber()}, ${generateRGBNumber()});`;
  document.querySelector("body").setAttribute("style", backgroundColor);
};

/*
 printQuote function creates: an HTML string from the quotes array object
 and returns the HTML string
 */
const printQuote = () => {
  const randomQuote = getRandomQuote();
  let htmlString = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}
  `;
  if (randomQuote.citation) {
    htmlString += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    htmlString += `<span class="year">${randomQuote.year}</span>`;
  }
  if (randomQuote.tags) {
    htmlString += `<span class="tags">${randomQuote.tags}</span>`;
  }
  htmlString += `</p>`;

  setBackgroundColor();
  return (document.getElementById("quote-box").innerHTML = htmlString);
};

/* autoChangeQuotes function calls the printQuote function 
every 10 seconds which forces the quotes to auto change */
const autoChangeQuotes = () => {
  setInterval(printQuote, 10000);
};

// Call autoChangeQuotes function
autoChangeQuotes();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);

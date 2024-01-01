const quoteContainer = document.getElementById('qcontainer');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('newquote');
// const loader = document.getElementById('loader');

let apiQuotes = [];

// // Show loading
// function loading() {
//     loader.hidden = false;
//     quoteContainer.hidden = true;
// }

//Hide loading
// function complete() {
//     quoteContainer.hidden = false;
//     loader.hidden = true;
// }

// Show new Quote
function newQuote() {
    // loading();
    // Pick a random quote from apiQuotes[] 5rf y7using Math.random()
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    
    // Check if Author field is blank and replace it with 'unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }

    // Check Quote length to determine styling
    if (quote.text.length > 100) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set quote, Hide loader
    quoteText.textContent = quote.text;
    // complete();
    
    quoteText.textContent = quote.text;
}

// Get Quotes from API
async function getQuotes() {
    // loading();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        //Catch Error here
        console.log(error);
    }
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listener
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//On load
// complete();

getQuotes();
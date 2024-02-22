const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

let apiQuotes = [];

//Show new quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    !authorText ? authorText.textContent = 'Unknown' : authorText.textContent = quote.author;

    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    }

    quoteText.textContent = quote.text;
}


// Get Quotes from API
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        alert(error);
    }
}

//Tweet Quote
function tweetQuote() {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${author.textContent}`;
    window.open(tweetUrl, '_blank');
}

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
// getQuotes();

loading();
import React, { useState } from "react";
import "./App.css";
import data from "./api/quotes.json";
import QuoteBox from "./components/QuoteBox";
import { getRandomColor, getRandomNumber } from "./helpers";

function App() {
  const quotes = data.quotes;
  const cantQuotes = quotes.length;
  const randomQuotes = getRandomNumber(cantQuotes);

  const [newQuote, setNewQuote] = useState(quotes[randomQuotes]);
  const [color, setColor] = useState(getRandomColor());

  const handleNewQuote = () => {
    const quoteRandom = quotes[getRandomNumber(cantQuotes)];
    setNewQuote(quoteRandom);
    setColor(getRandomColor());
  };

  return (
    <div className="App" style={{ "--current-color": `${color}` }}>
      <main className="principal">
        <QuoteBox
          quote={newQuote.quote}
          author={newQuote.author}
          changeQuote={handleNewQuote}
        />
      </main>
    </div>
  );
}

export default App;

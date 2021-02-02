import React from "react";
import { IconQuote, IconTwitter } from "./Icons";
import { IconButton, TextButton } from "./Button";

function QuoteBox({ quote, author, changeQuote }) {
  const link = `https://twitter.com/intent/tweet?text=${quote}-${author}`;
  return (
    <section className="card-box">
      <IconQuote />
      <h3 className="text-title">{quote}</h3>
      <h2 className="text-author">{author}</h2>
      <div className="card-buttons">
        <IconButton link={link}>
          <IconTwitter />
        </IconButton>
        <TextButton name="new Quote" changeQuote={changeQuote} />
      </div>
    </section>
  );
}

export default QuoteBox;

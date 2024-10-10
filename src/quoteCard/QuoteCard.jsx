import React from "react";
import "./QuoteCard.css";

const QuoteCard = ({ quote }) => {
  return (
    <div className="quote-card">
      <p className="quote">{quote.quote}</p>
      <p className="author">- {quote.author}</p>
      <p className="genre">Genre: {quote.genre}</p>
      <p className="year">Year: {quote.year}</p>
    </div>
  );
};

export default QuoteCard;

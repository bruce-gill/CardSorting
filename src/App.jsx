import { useState } from "react";
import "./App.css";
import QuoteCard from "./quoteCard/QuoteCard";


  
  

const App = () => {
  const initialQuotes = [
      {
        "quote": "The only thing we have to fear is fear itself.",
        "author": "Franklin D. Roosevelt",
        "genre": "Political",
        "year": 1933
      },
      {
        "quote": "To be, or not to be, that is the question.",
        "author": "William Shakespeare",
        "genre": "Drama",
        "year": 1603
      },
      {
        "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "author": "Martin Luther King Jr.",
        "genre": "Social Justice",
        "year": 1965
      },
      {
        "quote": "That which does not kill us makes us stronger.",
        "author": "Friedrich Nietzsche",
        "genre": "Philosophy",
        "year": 1888
      },
      {
        "quote": "I think, therefore I am.",
        "author": "René Descartes",
        "genre": "Philosophy",
        "year": 1637
      },
      {
        "quote": "Imagination is more important than knowledge.",
        "author": "Albert Einstein",
        "genre": "Science",
        "year": 1929
      },
      {
        "quote": "All men are created equal.",
        "author": "Thomas Jefferson",
        "genre": "Political",
        "year": 1776
      },
      {
        "quote": "The unexamined life is not worth living.",
        "author": "Socrates",
        "genre": "Philosophy",
        "year": -399
      },
      {
        "quote": "It does not do to dwell on dreams and forget to live.",
        "author": "J.K. Rowling",
        "genre": "Fantasy",
        "year": 1997
      },
      {
        "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "author": "Nelson Mandela",
        "genre": "Inspiration",
        "year": 1994
      }
    ]

  const [quotes, setQuotes] = useState(initialQuotes);


  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedQuotes = [...quotes].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    setQuotes(sortedQuotes);
  };

  return (
    <>
      <div>
        <button onClick={() => handleSort('author')}>
          Sort by Author
        </button>
        <button onClick={() => handleSort('year')}>
          Sort by Date
        </button>
        <button onClick={() => handleSort('genre')}>
          Sort by Genre
        </button>
      </div>
      <div className="quote-holder">
        {quotes.map((quote, index) => (
          <QuoteCard key={index} quote={quote} />
        ))}
      </div>
    </>
  );
}

export default App;

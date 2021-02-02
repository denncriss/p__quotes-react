import React from "react";

export function IconButton({ link, children }) {
  return (
    <a
      className="btn-icon"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
export function TextButton({ name, changeQuote }) {
  return (
    <button onClick={changeQuote} className="btn btn-quote">
      {name}
    </button>
  );
}

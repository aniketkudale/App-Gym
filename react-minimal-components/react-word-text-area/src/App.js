import React, { useState } from "react";
import "./styles.css";

function LimitedWord({limit, value}) {

  const [content, setContent] = useState(value);
  const [wordCount, setWordCount] = useState(0);

  const handleChange = text => {
    let words = text.split(' ')

    if(words.filter(Boolean).length > limit) {
      setContent(text.split(' ').slice(0, limit).join(' '));
      setWordCount(limit);
    } else {
      setContent(text);
      setWordCount(words.filter(Boolean).length);
    }   
  }

  return (
    <div>
      <textarea
      value={content}
      onChange = {event => handleChange(event.target.value)}
      />
      <p>
        {wordCount} / {limit}
      </p>
    </div>
  )
}
export default function App() {
  return (
    <div>
      <LimitedWord limit={5} value='Hello' />
    </div>
  );
}

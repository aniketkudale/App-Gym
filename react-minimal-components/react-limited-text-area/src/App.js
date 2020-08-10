import React, { useState, useEffect } from "react";
import "./styles.css";

function LimitedTextArea({rows, cols, value, limit}) {
  const [content, setContent] = useState(value);

  const setFormattedContent = text => {
    text.length > limit ? setContent(text.slice(0, limit)) : setContent(text)
  }

  useEffect(() => {
    setFormattedContent(content);
  }, []);

  return (
    <div>
      <textarea 
      row={rows}
      cols={cols}
      onChange={event => setFormattedContent(event.target.value)}
      value={content}
      />
      <p>
        {content.length} / {limit}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <LimitedTextArea limit={32} value="HEllo" />
  );
}

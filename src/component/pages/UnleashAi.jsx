import React from "react";
import { useState } from "react";
import axios from "axios";

function UnleashAi() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const response = await axios.post(
      "/api/get-answers",
      { prompt },
      { headers: { "Content-Type": "application/json" } }
    );
    setAnswer(response.data.text);
    setIsLoading(false);
  }

  function handleChange(e) {
    setPrompt(e.target.value);
  }



  return (
    <div className="container">
      <h1>Give me The Outline of your Trip</h1>
      <form className="our-form" onSubmit={handleSubmit}>
        <input
          className="prompt-field"
          value={prompt}
          type="text"
          onChange={handleChange}
        />
        <button className="prompt-button">Go!</button>
      </form>


      
      

      {isLoading && <div className="loading-spinner"></div>}

      <div className="answer-area">{answer}</div>
    </div>
  );
}

export default UnleashAi;

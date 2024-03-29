import { useState } from "react";

export default function Authenticate({ authKey }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick(event) {
    event.preventDefault();
    try {
      const clickResponse = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authKey}`,
          },
        }
      );
      const result = await clickResponse.json();
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <h2>Authenticate Your Login</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button className="smash" onClick={handleClick}>
        SMASH THAT BUTTON!
      </button>
    </div>
  );
}

import { useState } from "react";

function SignUpForm({ setAuthKey }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      };
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        requestOptions
      );
      const keyResponse = await response.json();
      setAuthKey(keyResponse.token);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Sign Up Today!</h2>
      {error && <p>{error}</p>}

      <form className="mainForm" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            placeholder={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="pass">Enter password: </label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <label className="check">Show Password</label>
        <input
          type="checkbox"
          value={showPassword}
          onChange={() => setShowPassword((prev) => !prev)}
        />

        <button>Submit</button>
      </form>
    </>
  );
}

export default SignUpForm;

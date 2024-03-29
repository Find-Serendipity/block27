import { useState } from "react";

function SignUpForm({ setAuthKey }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const loginPackage = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      };

      const apiKeyResponse = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        loginPackage
      );

      const unpackedKey = await apiKeyResponse.json();

      setAuthKey(unpackedKey.token);
      setUsername("");
      setPassword("");
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
            placeholder="Enter your login!"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Enter password:
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password!"
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
        </label>

        <label>
          Show Password
          <input
            type="checkbox"
            value={showPassword}
            onChange={() => setShowPassword((prev) => !prev)}
          />
        </label>

        <button className="submit">Submit</button>
      </form>
    </>
  );
}

export default SignUpForm;

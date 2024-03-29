import "./App.css";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import { useState } from "react";

function App() {
  const [authKey, setAuthKey] = useState("");

  return (
    <>
      <SignUpForm setAuthKey={setAuthKey} />

      <Authenticate authKey={authKey} />
    </>
  );
}

export default App;

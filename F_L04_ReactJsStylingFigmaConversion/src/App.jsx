import { useState } from "react";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

function App() {
  const [currentScreen, setCurrentScreen] = useState("login"); // Starts with login

  return (
    <>
      {currentScreen === "login" ? (
        <Login onSwitchToSignup={() => setCurrentScreen("signup")} />
      ) : (
        <Signup onSwitchToLogin={() => setCurrentScreen("login")} />
      )}
    </>
  );
}

export default App;
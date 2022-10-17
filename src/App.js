import { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        disabled={disabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        id="disable-button-checkbox"
        type="checkbox"
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
    //#region npx create-react-app generated Code
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    //#endregion
  );
}

export default App;

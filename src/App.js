import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { LC, NC, SC, UC } from "./data/PassChar";

function App() {
  let [uppercase, setUpperCase] = useState(false);
  let [lowercase, setLowerCase] = useState(false);
  let [numbers, setNumbers] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passwordlength, setpasswordlength] = useState(10);
  let [fpass, setPass] = useState("")

  let createPassword = () => {
    let charSet = "";
    let finalPass = "";
    if (uppercase || lowercase || numbers || symbols) {
      if (uppercase) charSet = UC;
      if (lowercase) charSet += LC;
      if (numbers) charSet += NC;
      if (symbols) charSet += SC;
      if(passwordlength <= 16 && passwordlength >= 8){
      for(let i=0; i<=passwordlength; i++){
         finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setPass(finalPass);
    }
    else{
        alert("Password length should be less than or equal to 16")
    }
    } else {
      alert("Please select a box");
    }
  };

  let copyPass=()=>{
    navigator.clipboard.writeText(fpass);
    alert("Password copied to clipboard")
  }
  return (
    <div class="container">
      <h2>Password Generator</h2>
      <div class="password-display">
        <input type="text" value={fpass} id="password" readonly/>
        <button className="copy" onClick={copyPass}>
          <i class="fa-solid fa-copy"></i>
        </button>
      </div>
      <div class="controls">
        <label for="length">Password length</label>
        <input
          type="number"
          id="length"
          value={passwordlength}
          min="8"
          max="16"
          onChange={(event) => setpasswordlength(event.target.value)}
        />
      </div>
      <div class="checkbox-group">
        <div>
          <input
            type="checkbox"
            id="uppercase"
            checked={uppercase}
            onChange={() => setUpperCase(!uppercase)}
          />
          <label for="uppercase">Include uppercase letters</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="lowercase"
            checked={lowercase}
            onChange={() => setLowerCase(!lowercase)}
          />
          <label for="lowercase">Include lowercase letters</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="numbers"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
          <label for="numbers">Include numbers</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="symbols"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
          <label for="symbols">Include symbols</label>
        </div>
      </div>
      <button class="generate-btn" onClick={createPassword}>
        Generate password
      </button>
    </div>
  );
}

export default App;

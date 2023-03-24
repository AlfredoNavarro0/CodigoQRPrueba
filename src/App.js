import logo from './logo.svg';
import './App.css';
import QRCode from 'react-qr-code';
import { useState } from "react";


function App() {
  const [text, setText] = useState("");
  function generateQR(e){
    setText()
  }
  function handleChange(e){
    setText(e.target.value)
  }
  return (
    <div className="App">
      <h1>QR Code Generatorr</h1>
      <QRCode value={text}/>

      <div className="input-here">
        <p>Introduzca algo: </p>
        <input type="text" value={text} onChange={(e)=>
        {handleChange(e)}}/>
        <button>Generate</button>
      </div>
    </div>
  );
}

export default App;

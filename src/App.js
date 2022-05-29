import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [cell1, setCell1] = useState(null);
  const [cell2, setCell2] = useState(null);
  const [cell3, setCell3] = useState(null);
  const [cell4, setCell4] = useState(null);
  const [cell5, setCell5] = useState(null);
  const [cell6, setCell6] = useState(null);
  const [cell7, setCell7] = useState(null);
  const [cell8, setCell8] = useState(null);
  const [cell9, setCell9] = useState(null);

  const [bias, setBias] = useState("no side!");

  const [X_Moves, setX_Moves] = useState([]);
  const [O_Moves, setO_Moves] = useState([]);

  const [programID, setProgramID] = useState(null);
  const [solAmount, setSolAmount] = useState(null);
  const [winner, setWinner] = useState(null);
  const [remainingTime, setRemainingTime] = useState(null);
  const [publicKey, yourPublicKey] = useState(null)




  const handleCell = (cell, setCell, index) => {
    if (bias == "X") {
      if (cell == null) {
        setCell("X");
        setX_Moves(list => [...list, index])
        console.log(`Cell ${index} is now occupied by player X`);
      } else {
        alert("This cell has already been occupied!");
      }
    } else if (bias == "O") {
      if (cell == null) {
        setCell("O");
        setO_Moves(list => [...list, index]);
        console.log(`Cell ${index} is now occupied by player O`);
      } else {
        alert("This cell has already been occupied!");
      }
    } else {
      alert("Please pick up a side first!");
    }
  }

  const handleClaim = () => {
    console.log("Your gains will be send to you!")
  }

  const handleWallet = () => {
    // window.solana.connect();
    window.solana.request({method:"connect"});
    console.log("The wallet is connected!");
  }


  return (
    <div className='App'>

      <header className="App-header">
        <h1>Tic-Tac-Toe Game</h1>
        <button className='connectwalletbutton' onClick={handleWallet}>Connect Wallet</button>
      </header>

      <div className='row'>
        <div className='column'>
          <div className='div0'>Program ID: {programID}</div>
          <div className='div0'>Your engaged Solana amount: {solAmount}</div>
          <div className='div0'>The winner: {winner}</div>
        </div>
        <div className='column'>
          <div className='div0'>Your public key: {publicKey}</div>
          <div className='div0'>Next move should be executed by {bias}</div>
          <div className='div0'>Time remaining for the next move: {remainingTime}</div>
        </div>
      </div>
      
      <hr></hr>
      <br></br>
      <div>
        <button className="button2" onClick={() => setBias("X")}>Pick X</button>
        <button className="button2" onClick={() => setBias("O")}>Pick O</button>
      </div>

      <br></br>
      <div>You have picked {bias}</div>
      <br></br>

      <table>
        <tbody>
          <tr>
            <td><button className="button" onClick={() => handleCell(cell1, setCell1, 1)}>{cell1}</button></td>
            <td><button className="button" onClick={() => handleCell(cell2, setCell2, 2)}>{cell2}</button></td>
            <td><button className="button" onClick={() => handleCell(cell3, setCell3, 3)}>{cell3}</button></td>
          </tr>
          
          <tr>
            <td><button className="button" onClick={() => handleCell(cell4, setCell4, 4)}>{cell4}</button></td>
            <td><button className="button" onClick={() => handleCell(cell5, setCell5, 5)}>{cell5}</button></td>
            <td><button className="button" onClick={() => handleCell(cell6, setCell6, 6)}>{cell6}</button></td>
          </tr>

          <tr>
            <td><button className="button" onClick={() => handleCell(cell7, setCell7, 7)}>{cell7}</button></td>
            <td><button className="button" onClick={() => handleCell(cell8, setCell8, 8)}>{cell8}</button></td>
            <td><button className="button" onClick={() => handleCell(cell9, setCell9, 9)}>{cell9}</button></td>
          </tr>
        </tbody>
      </table>

      <br></br>
      

      <div>
        <h1> X Moves = {X_Moves}</h1>
        <h1> O Moves = {O_Moves}</h1>
      </div>

      <hr></hr>
      <br></br>
      <button className='claimbutton' onClick={handleClaim}>Click here to recieve your win! Cheers ;)</button>
      <br></br>
      <br></br>

    </div>
  );
}

export default App;

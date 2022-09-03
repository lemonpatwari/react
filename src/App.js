import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Another from "./Another";
function App() {
    const [count,setCount] = useState(0);
    function decrement(){
        setCount(count=>count-1)
    }
    function increment(){
        setCount(count=>count+1)
    }
    return (
        <div className="App">
            <header className="App-header">

                <Another name='react'/>
                <p>{count}</p>

                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>


                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;

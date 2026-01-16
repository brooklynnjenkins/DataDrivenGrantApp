import logo from './logo.svg';
import './App.css';
import Table from "./Table.js"
import { useEffect, useState } from "react";

function App() {
  const [grants, setgrant] = useState([{title: "", institution: ""}]);
  useEffect(() => {
    async function fetchGrant() 
    {
      const url = "/NEH2020sGrant_Short.json";
      const response = await fetch(url);
      if (response.ok)
        {
          const result = await response.json();
          console.log(result.Grants.Grant)
          setgrant(result.Grants.Grant)
        }
      }
    fetchGrant()
    }, [])

  return ( <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <Table grants={grants}/>
      </header>
    </div>
    </>
  );
}

export default App;

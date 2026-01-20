import logo from './logo.svg';
import './App.css';
import Table from "./Table.js"
import { useEffect, useState } from "react";

function App() {
  const [grants, setGrants] = useState([{}]);
  const [grantsCopy, setGrantsCopy] = useState(grants);

  useEffect(() => {
    async function fetchGrant() 
    {
      const url = "/NEH2020sGrant_Short.json";
      const response = await fetch(url);
      if (response.ok)
        {
          const result = await response.json();
          console.log(result.Grants.Grant)
          setGrants(result.Grants.Grant)
          setGrantsCopy(result.Grants.Grant)
        }
      }
    fetchGrant()
    }, [])

  return ( <>
    <div className="App">
        <div>
            <h1>List of Grants</h1>
            <p>
             
            </p>
        </div>
        <Table grants={grants} setGrantsCopy={setGrantsCopy} grantsCopy={grantsCopy} />
    </div>
    </>
  );
}

export default App;

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
  
  function pressReset(){
    setGrantsCopy(grants);
  }
function KY(){
    let justKY = grants.filter(grant => grant.InstState.includes("KY"))
    setGrantsCopy(justKY)
}
function regions(){
    let regionFilt = grants.filter(grant => grant.InstState.includes("KY") || grant.InstState.includes("IN") || grant.InstState.includes("TN") || grant.InstState.includes("OH") || grant.InstState.includes("MO") || grant.InstState.includes("VA") || grant.InstState.includes("WV"))
    setGrantsCopy(regionFilt)
}
function desYears(){
    let copy = [...grants];
    copy.sort((a,b) => b.YearAwarded - a.YearAwarded)
    setGrantsCopy(copy)
}
function ascYears(){
    let copy = [...grants];
    copy.sort((a,b) => a.YearAwarded - b.YearAwarded)
    setGrantsCopy(copy)
}
function ascOrd(){
  let copy =[...grants];
  copy.sort((a,b) => a.ProjectTitle.localeCompare(b.ProjectTitle));
  setGrantsCopy(copy)
}
function desOrd(){
  let copy =[...grants];
  copy.sort((a,b) => b.ProjectTitle.localeCompare(a.ProjectTitle));
  setGrantsCopy(copy)
}
  return ( <>
    <div className="App">
        <div>
            <h1>List of Grants</h1>
            <p>
             <button onClick = {ascOrd}>Ascending Order</button>
             <button onClick = {desOrd}>Descending Order</button>
             <button onClick = {KY}>KY</button>
             <button onClick = {regions}>Regional</button>
             <button onClick = {ascYears}>Ascending Years</button>
             <button onClick = {desYears}>Descending Years</button>
            </p>
            <p>
              <button onClick = {pressReset}>Reset</button> 
            </p>
        </div>
        <Table grants={grants} setGrantsCopy={setGrantsCopy} grantsCopy={grantsCopy} />
    </div>
    </>
  );
}


export default App;

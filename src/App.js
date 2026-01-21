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
function programChange(event){
  const value = event.target.value;
    if(value == "faculty"){
      let fac = grants.filter(grant => grant.Program.includes("Faculty"));
      setGrantsCopy(fac)
    }
    else if(value == "fellowship"){
      let fel = grants.filter(grant => grant.Program.includes("Fellowships"));
      setGrantsCopy(fel)
    }
    else if(value == "infras"){
      let infr = grants.filter(grant => grant.Program.includes("Infrastructure"));
      setGrantsCopy(infr)
    }
    else if(value == "stateHum"){
      let state = grants.filter(grant => grant.Program.includes("State Humanities"));
      setGrantsCopy(state)
    }
}
function displayVal(){
  const searchInput = document.getElementById('disciplineSearch');
  const value = searchInput.value.toLowerCase();
  let copy = [...grants];
  copy = copy.filter(grant => grant.PrimaryDiscipline.toLowerCase().includes(value));
  setGrantsCopy(copy);
}
  return ( <>
    <div className="App">
        <div>
            <h1>List of Grants</h1>
            <p>
             <button onClick = {KY}>KY</button>
             <button onClick = {regions}>Regional</button>
            </p>
            <p>
              <label htmlFor="program">
                Select Program
              </label>
              <select id="program" name="program"
                 onChange={programChange}>
                  <option value="faculty">Awards for Faculty</option>
                  <option value="fellowship">Fellowships</option>
                  <option value="infras">Infrastructure and Capacity Building Challenge Grants</option>
                  <option value="stateHum">State Humanities Councils General Operating Support Grants</option>
              </select>
            </p>
            <p>
              <input type="text" id="disciplineSearch" placeholder="Enter Discipline..."/>
              <button onClick = {displayVal}>Enter</button>
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

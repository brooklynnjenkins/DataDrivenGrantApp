import TableRow from './TableRow.js'
import "./Table.css";
import { useEffect, useState } from "react";

function Table(props)
{
    const [grants, setGrants] = useState([{}]);
    const [grantsCopy, setGrantsCopy] = useState(grants);
    const [index, setIndex] = useState(0);
    function discOrd(){
        if(index%2==0){
            props.setGrantsCopy(props.grantsCopy.sort((a,b) => a.PrimaryDiscipline.localeCompare(b.PrimaryDiscipline)));
            setIndex(index + 1);
        }
        else{
            props.setGrantsCopy(props.grantsCopy.sort((a,b) => b.PrimaryDiscipline.localeCompare(a.PrimaryDiscipline)));
            setIndex(index + 1);
            }   
}
    return(
        <table>
            <thead>
                <tr>
                    <th>
                        Project Title 
                    </th>
                    <th>
                        Program
                    </th>
                    <th onClick = {discOrd}>
                        Primary Discipline ▲▼
                    </th>
                    <th>
                        Participant(s)
                    </th>
                    <th>
                        Organization Type 
                    </th>
                    <th>
                        Institution
                    </th>
                    <th>
                        State
                    </th>
                    <th>
                        Year Awarded
                    </th>
                </tr>
            </thead>
            <tbody id="allInfo">
               {props.grantsCopy.map(grant => <TableRow key={grant["@AppNumber"]} grant={grant}/>)}
            </tbody>
        </table>
    );
}

export default Table
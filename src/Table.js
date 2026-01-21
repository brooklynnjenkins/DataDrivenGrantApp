import TableRow from './TableRow.js'
import "./Table.css";
import { useEffect, useState } from "react";
//props=setGrantsCopy, grants, setGrants, grantsCopy
function Table(props)
{
    const [index, setIndex] = useState(0);
    function discOrd(){
        if(index%2==0){
            let copy = [...props.grants];
            copy.sort((a,b) => a.PrimaryDiscipline.localeCompare(b.PrimaryDiscipline));
            setIndex(index + 1);
            props.setGrantsCopy(copy)
        }
        else{
            let copy = [...props.grants];
            copy.sort((a,b) => b.PrimaryDiscipline.localeCompare(a.PrimaryDiscipline));
            setIndex(index + 1);
            props.setGrantsCopy(copy)
            }   
}
function projOrd(){
        if(index%2==0){
            let copy = [...props.grants];
            copy.sort((a,b) => a.ProjectTitle.localeCompare(b.ProjectTitle));
            setIndex(index+1);
            props.setGrantsCopy(copy)
        }
        else{
            let copy = [...props.grants];
            copy.sort((a,b) => b.ProjectTitle.localeCompare(a.ProjectTitle));
            setIndex(index+1);
            props.setGrantsCopy(copy)
        }
}
function yearOrd(){
        if(index%2==0){
            let copy = [...props.grants];
            copy.sort((a,b) => a.YearAwarded - b.YearAwarded)
            setIndex(index+1);
            props.setGrantsCopy(copy)
        }
        else{
            let copy = [...props.grants];
            copy.sort((a,b) => b.YearAwarded - a.YearAwarded)
            setIndex(index+1);
            props.setGrantsCopy(copy)
        }
}
function amtOrd(){
        if(index%2==0){
            let copy = [...props.grants];
            copy.sort((a,b) => a.OriginalAmount - b.OriginalAmount)
            setIndex(index+1);
            props.setGrantsCopy(copy)
        }
        else{
            let copy = [...props.grants];
            copy.sort((a,b) => b.OriginalAmount - a.OriginalAmount)
            setIndex(index+1);
            props.setGrantsCopy(copy)
        }
}
function instOrd(){
        if(index%2==0){
            let copy = [...props.grants];
            copy.sort((a,b) => a.Institution.localeCompare(b.Institution));
            setIndex(index+1);
            props.setGrantsCopy(copy)
        }
        else{
            let copy = [...props.grants];
            copy.sort((a,b) => b.Institution.localeCompare(a.Institution));
            setIndex(index+1);
            props.setGrantsCopy(copy)
        }
}
function stateOrd(){
        if(index%2==0){
            let copy = [...props.grants];
            copy.sort((a,b) => a.InstState.localeCompare(b.InstState));
            setIndex(index+1);
            props.setGrantsCopy(copy)
        }
        else{
            let copy = [...props.grants];
            copy.sort((a,b) => b.InstState.localeCompare(a.InstState));
            setIndex(index+1);
            props.setGrantsCopy(copy)
        }
}
function progOrd(){
        if(index%2==0){
            let copy = [...props.grants];
            copy.sort((a,b) => a.Program.localeCompare(b.Program));
            setIndex(index+1);
            props.setGrantsCopy(copy)
        }
        else{
            let copy = [...props.grants];
            copy.sort((a,b) => b.Program.localeCompare(a.Program));
            setIndex(index+1);
            props.setGrantsCopy(copy)
        }
}
    return(
        <table>
            <thead>
                <tr>
                    <th onClick = {projOrd} >
                        Project Title ▲▼
                    </th>
                    <th onClick = {progOrd}>
                        Program ▲▼
                    </th>
                    <th onClick = {discOrd}>
                        Primary Discipline ▲▼
                    </th>
                    <th>
                        Participant(s)
                    </th>
                    <th onClick = {instOrd}>
                        Institution ▲▼
                    </th>
                    <th onClick = {stateOrd}>
                        State ▲▼
                    </th>
                    <th onClick = {yearOrd}>
                        Year Awarded ▲▼
                    </th>
                    <th onClick = {amtOrd}>
                        Original Amount ▲▼
                    </th>
                    <th>
                        Begin Grant Date
                    </th>
                    <th>
                        End Grant Date
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
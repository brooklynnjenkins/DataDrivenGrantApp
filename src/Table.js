import TableRow from './TableRow.js'
import "./Table.css";
import { useEffect, useState } from "react";

function Table(props)
{
    const [grantsCopy, setgrantsCopy] = useState(props.grants);
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
                    <th>
                        Primary Discipline
                    </th>
                    <th>
                        Participant(s)
                    </th>
                    <th>
                        Amount of Participant(s)
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
            <tbody>
               {props.grantsCopy.map(grant => <TableRow key={grant["@AppNumber"]} grant={grant}/>)}
            </tbody>
        </table>
    );
}

export default Table
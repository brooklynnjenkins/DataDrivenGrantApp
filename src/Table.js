import TableRow from './TableRow.js'
import "./Table.css";
function Table(props)
{
    return(
        <table>
            <thead>
                <tr>

                </tr>
            </thead>
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
               {props.grants.map(grant => <TableRow key={grant["@AppNumber"]} grant={grant}/>)}
            </tbody>
        </table>
    );
}

export default Table
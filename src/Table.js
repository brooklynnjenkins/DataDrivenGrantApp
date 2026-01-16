import TableRow from './TableRow.js'
function Table(props)
{
    return(
        <table>
            <tbody>
               <TableRow grant={props.grants[0]}/>
            </tbody>
        </table>
    );
}

export default Table
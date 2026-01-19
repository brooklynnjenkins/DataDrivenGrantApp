import ParticipantList from './ParticipantList'

function TableRow(props)
{
    return( <>

        <tr>
            <td>{props.grant.ProjectTitle}</td>
            <td>{props.grant.Program}</td>
            <td>{props.grant.PrimaryDiscipline}</td>
            <td>
                <ParticipantList Participants={props.grant.Participant}/>
            </td>
            <td>{props.grant.OrganizationType}</td>
            <td>{props.grant.Institution}</td>
            <td>{props.grant.InstState}</td>
            <td>{props.grant.YearAwarded}</td>
        </tr>
    </>
    )
}

export default TableRow

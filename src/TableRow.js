import ParticipantList from './ParticipantList'

function TableRow(props)
{
    function Participant(grant){
        if(!(grant.Participant)){
            return "N/A";
        }
        else if(grant.Participant instanceof Array){
            return<ul>{props.grant.Participant.map(participant => <ParticipantList participant={participant}/>)}</ul>
        }
        else{
            return<p>{grant.Participant.Firstname} {grant.Participant.Lastname}</p>
        }
    }
    return( <>
        <tr>
            <td>{props.grant.ProjectTitle}</td>
            <td>{props.grant.Program}</td>
            <td>{props.grant.PrimaryDiscipline}</td>
            <td>
                {Participant(props.grant)}
            </td>
            <td>{props.grant.Institution}</td>
            <td>{props.grant.InstState}</td>
            <td>{props.grant.YearAwarded}</td>
            <td>{props.grant.OriginalAmount}</td>
            <td>{props.grant.BeginGrant}</td>
            <td>{props.grant.EndGrant}</td>
        </tr>
    </>
    )
}

export default TableRow


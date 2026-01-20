import React from 'react';

function ParticipantList(props){
    return(
        <li>{props.participant.Firstname} {props.participant.Lastname}</li>
    );

}

export default ParticipantList
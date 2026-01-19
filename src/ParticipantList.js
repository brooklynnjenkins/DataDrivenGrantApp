import React from 'react';

function ParticipantList({ Participants }) {
    return(
        <ul>
            {Participants && Participants.length > 0 ? (
                        Participants.map((Participant,index) => (
                            <li key ={index}>
                                {Participant.Firstname} {Participant.Lastname} </li>
                        ))
                ) : (
                    <span>N/A</span>

                )}
        </ul>
    )
}

export default ParticipantList
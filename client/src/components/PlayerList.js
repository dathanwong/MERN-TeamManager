import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import DeleteConfirmation from './DeleteConfirmation';

const PlayerList = (props) => {

    const [players, setPlayers] = useState(null);
    useEffect(() => {
        Axios.get('http://localhost:8000/api/players')
            .then(players => setPlayers(players.data))
            .catch(err => console.log(err));
    }, [])

    if(players === null) return(<div>Loading...</div>);


    return (
        <div className="container">
            <div className="row my-3">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Preferred Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            players.map(player => 
                                <tr key={player._id}>
                                    <td>{player.name}</td>
                                    <td>{player.position}</td>
                                    <td>
                                        <DeleteConfirmation players={players} setPlayers={setPlayers} id={player._id}/>
                                    </td>
                                </tr>
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default PlayerList;
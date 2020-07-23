import React, { useState } from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';

const AddPlayer = (props) => {

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [errors, setErrors] = useState([]);

    function addPlayer(e){
        e.preventDefault();
        Axios.post('http://localhost:8000/api/players', {name, position})
            .then(res => {
                console.log(res.data);
                navigate('/players/list');
            })
            .catch(err =>{
                setErrors(err.response.data.errors);
            })
    }

    return ( 
        <div className="container border border-dark">
            <form onSubmit={addPlayer}>
                <div className="row my-2">
                    <h3>Add Player</h3>
                </div>
                <div className="row my-2">
                    <label>Player Name:</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                    {errors && (
                                <span className="text-danger">
                                {errors?.name?.properties?.message}
                                </span>
                            )}
                </div>
                <div className="row my-1">
                    <label>Preferred Position:</label>
                    <input type="text" value={position} onChange={e=> setPosition(e.target.value)}/>
                </div>
                <div className="row my-2 text-right">
                    {
                         (name.length >= 2) ?
                        <button type="submit" className="btn btn-success">Add</button>
                         :
                         <button type="submit" className="btn btn-success" disabled>Add</button>
                    }
                    
                </div>
            </form>
        </div>
     );
}
 
export default AddPlayer;
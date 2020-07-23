import React from 'react';
import Header from '../components/Header';
import PlayerList from '../components/PlayerList';
import {Link} from '@reach/router';
import AddPlayer from '../components/AddPlayer';

const ManagePlayers = (props) => {
    
    const {subview} = props;

    return ( 
        <>
            <Header/>
            <div className="container border border-dark">
                <div className="row my-3">
                    <span>
                        <h3>
                            <Link to="/players/list">List</Link>
                            |
                            <Link to="/players/addplayer">Add Player</Link>
                        </h3>
                    </span>
                </div>
                <div className="row my-3">
                    {
                        (subview.startsWith("List")) ? 
                        <PlayerList/>
                        :
                        <AddPlayer/>
                    }
                </div>
            </div>
        </>
     );
}
 
export default ManagePlayers;
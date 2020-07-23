import React from 'react';
import {Link} from '@reach/router';

const Header = (props) => {
    return ( 
        <div className="container">
            <div className="row text-left">
                <h3>
                    <Link to="">Manage Players</Link> | <Link to="">Manage Player Status</Link>
                </h3>
                
            </div>
        </div>
     );
}
 
export default Header;
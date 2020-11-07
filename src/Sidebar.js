import React from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return <div className='sidebar'>
        <h2>Sidebar area </h2>

        <div class="sidebar__top">
            <h3>Test Room</h3>
            <ExpandMoreIcon />
        </div>

    </div>
}

export default Sidebar

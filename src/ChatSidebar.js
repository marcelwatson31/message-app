import React from "react";
import "./ChatSidebar.css";

import {Avatar} from '@material-ui/core';


function chatSidebar() {
    return (
        <div className="chatSidebar">
            <Avatar />
            <div className="sidebarChatInfo">
                <h3>Channel Name</h3>
                <p>Message of person</p>
                <small className="timestamp">timestamp</small>
            </div>
        </div>
    );
}

export default chatSidebar;

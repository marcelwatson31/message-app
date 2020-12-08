import {Avatar, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewIcon from '@material-ui/icons/RateReview';
import React from "react";
import "./sidebar.css";

function sidebar() {
    return (
        <div className="sidebar">
           
            
            <div className="sidebarHeader">
            <Avatar className="sidebarAvatar"/>
            <div className="sidebarChats"></div>
            chat
            <div className="sidebarInput">
            <SearchIcon/>
                    <input placeholder="Search"></input>
                <div>
                    <IconButton variant="outlined" className='sibarInputButton'>
                    <RateReviewIcon/>
                    </IconButton>
                </div>

            </div>
            </div>
        </div>
    )
}

export default sidebar;
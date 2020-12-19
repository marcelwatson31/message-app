import {Avatar, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewIcon from '@material-ui/icons/RateReview';
import React from "react";
import "./sidebar.css";
import ChatSidebar from "./ChatSidebar.js";

function sidebar() {
    return (
        <div className="sidebar">
           
      
            <div className="sidebarHeader">
                <Avatar className="sidebarAvatar"/>
                <div className="sidebarChats"></div>
                
                <div className="sidebarInput">
                    <SearchIcon/>
                    <input placeholder="Search"/>
                    
                    </div>    
                    <div>
                        <IconButton variant="outlined" className='sidebarInputButton'>
                        <RateReviewIcon/>
                        </IconButton>
                    </div>
                </div>
                
            
            <div className="sidebar_chat">
            <ChatSidebar />
                <ChatSidebar />
                <ChatSidebar />
                <ChatSidebar /> 
                <ChatSidebar />
                <ChatSidebar />
               
            </div>
            
            
        </div>
        
    )
}

export default sidebar;
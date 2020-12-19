
import React, {useState} from 'react';
import "./Chat.css";
import {IconButton} from '@material-ui/core';
import  MicNoneIcon from "@material-ui/icons/MicNone";



function Chat() {
    const [input, setInput] = useState("");
    const sendMessage = (e) => {
        e.preventDefault();
    
        // firebase sgtuuf
        setInput("");
    };

    return (
        <div className="chat">
            <div className="chatHeader">
                <h4 className="To:">To: <span className="chat_name">Channel Name</span> </h4>
                <strong>Details</strong>
            </div>

            <div className="chatMessages">
                <h2>Message for you</h2>
            </div>


            <div className="chatInput">
                <form>
                    <input value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Message"
                    type="text"
                    />

                    <button onClick={sendMessage}>Send Message</button>
                </form>
                <IconButton> <MicNoneIcon className="chatMic" />
                </IconButton>
                
            </div>

            
        </div>
    )
}

export default Chat

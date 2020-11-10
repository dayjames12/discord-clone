import React from 'react'
import "./Chat.css"
import ChatHeader from "./ChatHeader.js"
import AddCircleIcon from "@material-ui/icons/AddCircle"
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard"
import GifIcon from "@material-ui/icons/Gif"
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions"

function Chat() {
    return ( 
        <div className="chat">
            <ChatHeader />
        
        <div className="chat__messages">

        </div>

        <div className="chat__input">
            <AddCircleIcon fontsize="large" />
            <form>
                <input placeholder={"Message #TESTCHANNEL"}/>
                <button className="chat__inputButton" type="submit">
                    Send Message
                </button>
            </form>

            <div className="chat__inputIcons">
                <CardGiftcardIcon fontsize="large" />
                <GifIcon fontsize="large" />
                <EmojiEmotionsIcon fontsize="large" />
            </div>
        </div>
        
        </div>
    )
}

export default Chat

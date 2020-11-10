import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Message.css"

function Message() {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>dayjames
                    <span className="message__timestamp">timestamp example</span>
                </h4>

                <p>Here is an example message</p>
            </div>
        </div>
    )
}

export default Message

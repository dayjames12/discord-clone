import React from "react"
import "./Sidebar.css"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"
import SidebarChannel from "./SidebarChannel"
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import CallIcon from "@material-ui/icons/Call"
import { Avatar } from "@material-ui/core"
import MicIcon from "@material-ui/icons/Mic"
import HeadsetIcon from "@material-ui/icons/Headset"
import SettingsIcon from "@material-ui/icons/Settings"

function Sidebar() {
    return <div className="sidebar">

        <div class="sidebar__top">
            <h3>Test Room</h3>
            <ExpandMoreIcon />
        </div>

        <div className="sidebar__channels">
            <div className="sidebar__channelsHeader">
                <div className="sidebar__header">
                    <ExpandMoreIcon />
                    <h4>Text Channels</h4>
                </div>

                <AddIcon className="sidebar__addChannel" />
            </div>

            <div className="sidebar__channelsList">
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />
            </div>
        </div>

        <div className="sidebar__voice">
            <SignalCellularAltIcon
                className="sidebar__voiceIcon"
                fontsize="large"
            />
            <div className="sidebar__voiceInfo">
                <h3>Voice Connected</h3>
                <p>Stream</p>
            </div>

            <div className="sidebar__voiceIcons">
                <InfoOutlinedIcon />
                <CallIcon />
            </div>
        </div>

        <div className="sidebar__profile">
            <Avatar src="https://i.pinimg.com/564x/7f/03/ed/7f03ede8a2b6341ccc42f205c36479b7.jpg"/>
            <div className="sidebar__profileInfo">
                <h3>dayjames</h3>
                <p>#thisIsMyId</p>
            </div>

            <div className="sidebar__profileIcons">
                <MicIcon />
                <HeadsetIcon />
                <SettingsIcon />
            </div>
            
        </div>
    </div>
}

export default Sidebar

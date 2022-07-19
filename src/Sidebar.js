import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
            <Avatar/>
            <div className='sidebar__headerRight'>
                <IconButton>
                    <DonutLargeIcon fontSize='small'/>
                </IconButton>
                <IconButton>
                    <ChatIcon fontSize='small'/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon fontSize='small'/>
                </IconButton>
            </div>
        </div>

        <div className='sidebar__search'>
            <div className='sidebar__searchContainer'>
                <SearchIcon fontSize='small'/>
                <input placeholder='Search or start a new chat' type='text'/>
            </div>
            
        </div>
        <div className='sidebar__chats'>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
        </div>

    </div>
  )
}

export default Sidebar
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Norurun from "../assets/img/norurun.png";
import Nottechan from "../assets/img/nottechan.png";

const Chat = (props) => {
  const isQuestion = (props.type === 'question')
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse'

  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        <Avatar alt="icon" src={isQuestion? Norurun: Nottechan} />
      </ListItemAvatar>
      <div className="p-chat__bubble">
        {props.text}
      </div>
    </ListItem>
  )
}

export default Chat
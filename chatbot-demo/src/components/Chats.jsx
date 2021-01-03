import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import { Chat } from './index'
import { border } from '@material-ui/system';

const useStyles = makeStyles(() =>
    createStyles({
        "chats": {
            height: "400px",
            padding: "0",
            overflow: "auto",
        }
    }),
);

const Chats = (props) => {
  const classes = useStyles()
  return (
    <List className={classes.chats} id={"scroll-area"}>
      {
        props.chats.map((chat, index) =>{
          return <Chat text={chat.text} type={chat.type} key={index.toString()} />
        })
      }
      {props.loader && <div className="loader">Loading...</div>}
    </List>
  )
}

export default Chats
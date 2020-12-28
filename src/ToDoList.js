import React from "react";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";

function ToDoList(props) {
  return (
    <div>
      <List>
        <ListItem>
            <ListItemAvatar>
                <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.text} secondary='dummy deadline'/>
        </ListItem>
      </List>
    </div>
  );
}

export default ToDoList;

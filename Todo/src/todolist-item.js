import React from 'react';
import {ListItem, IconButton, ListItemSecondaryAction, ListItemText} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';

export const TodoListItem = ({label, favorite, done, onPrimaryItem, onItemDone, onDeleted}) => {   

    return <div>
        <ListItem dense button
        style = {{color: favorite ? 'red' : 'green',
        width: '100%',
        maxWidth: 560,}}
        onClick = {onItemDone}
        ><ListItemText primary = {!done ? label : <strike style={{color: 'black'}}>{label}</strike>}/>
        <ListItemSecondaryAction>
        <IconButton edge='end'>
            <DeleteIcon
            onClick = {onDeleted} />
        </IconButton>
        <IconButton edge='end'>
            <FavoriteIcon
            style = {{color: favorite ? '#FF0000' : '#696969'}}
            onClick = {onPrimaryItem} />
        </IconButton>
        </ListItemSecondaryAction>
        </ListItem>
    </div> 

};
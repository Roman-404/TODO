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
        <IconButton edge='end'
                    onClick = {onDeleted}>
            <DeleteIcon/>
        </IconButton>
        <IconButton edge='end'
                    onClick = {onPrimaryItem}>
            <FavoriteIcon
            style = {done ? {color: '#696969'} : {color: favorite ? '#FF0000' : '#696969'}}/>
        </IconButton>
        </ListItemSecondaryAction>
        </ListItem>
    </div> 

};
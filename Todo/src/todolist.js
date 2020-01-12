import React from 'react';
import {List} from '@material-ui/core';
import {TodoListItem} from './todolist-item'

export default class TodoList extends React.Component {
   
    state = {
        todoList: this.props.todoList,
    }

componentWillReceiveProps(nextProps){
    this.setState({
        todoList: nextProps.todoList
    })
}

render(){
    return <List className='todo-list'>
        {this.state.todoList.map(item => <TodoListItem
        key={item.id}
        label={item.label}
        favorite={item.favorite}
        done={item.done}
        onDeleted={() => this.props.onDeleted(item.id)}
        onPrimaryItem={() => this.props.onPrimaryItem(item.id)}
        onItemDone={() => this.props.onItemDone(item.id)}
         />)}      
        </List>
        };
};
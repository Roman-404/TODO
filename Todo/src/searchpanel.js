import React, { Component } from 'react';
import {Input} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';


export default class SearchPanel extends Component {
   
    state = {
        label: ''
    }

onLabelSet = e => {
    this.setState({
        label: e.target.value,
    });    
};

onSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.label)    
    this.setState({
        label: ''
    });
};

onSearch = (e) => {
    const label = e.target.value
    this.setState({label})
    this.props.onSearch(label)
}


render(){
    return (
        <form onSubmit={this.onSubmit}>
        <Input
        style={{width: '70%'}}
        placeholder='search or add new item task'
        onChange={this.onLabelSet, this.onSearch}
        value={this.state.label}
        />
        <button className='add btn btn btn-secondary'>add</button>       
        </form>
       )
    };
};

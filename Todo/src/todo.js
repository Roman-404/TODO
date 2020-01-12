import React from 'react';
import {Header} from './header';
import SearchPanel from './searchpanel';
import TodoList from './todolist';


export default class TODO extends React.Component{
       
    state = {
        initData: [
            {label: 'Buy milk', favorite: false, id: 1},
            {label: 'Wake up', favorite: true, id: 2},
            {label: 'Take a walk', favorite: false, id: 3}
        ],
        searchItem: ''
    }

    maxId = Math.max(...this.state.initData.map(item => item.id))

    deleteItem = id => {
       this.setState(({initData}) => {
           const idx = initData.findIndex((item) => item.id === id);
           const newDataList = [...initData.slice(0, idx), ...initData.slice(idx + 1)];
           return {
               initData: newDataList
           }
       });
    };

    addItem = text => {
        const createNewItem = {
           label: text,
           favorite: false,
           id: ++this.maxId
        };
        this.setState(({initData}) => {
           const newDataItems = [
               ...initData,
               createNewItem
           ];
           return {
               initData: newDataItems,
               searchItem: ''
           }
        });
    };

    search(items, searchItem) {
        if (searchItem.lenght === 0){
            return items;
        }
        return items.filter((item) => {
           return item.label.toLowerCase().indexOf(searchItem.toLowerCase()) > -1
        });
    };

    onSearch = searchItem => {
        this.setState({searchItem});
    };

    onPrimaryItem = (id) => {
        this.setState(({initData}) => {
            const idx = initData.findIndex((el) => el.id === id)
            const selected = initData[idx]
            const itemFavorite = {...selected, favorite: !selected.favorite}
            const newTodoData = [
                ...initData.slice(0, idx),
                itemFavorite,
                ...initData.slice(idx + 1)
            ];
            return {
                initData: newTodoData
            }
        });
    };
    
    onItemDone = (id) => {
        this.setState(({initData}) => {
            const idx = initData.findIndex((el) => el.id === id)
            const selected = initData[idx]
            const itemDone = {...selected, done: true}
            const newTodoData = [
               ...initData.slice(0, idx),
               itemDone,
               ...initData.slice(idx + 1)
            ];
        return {
            initData: newTodoData
            }
        });
    };

    render(){
        const {initData, searchItem} = this.state
        const findItems = this.search(initData, searchItem)
        return <div>
            <Header/>
            <SearchPanel addItem = {this.addItem}
                         onSearch = {this.onSearch}/>             
            <TodoList todoList = {findItems}
                      onDeleted = {this.deleteItem}
                      onPrimaryItem = {this.onPrimaryItem}
                      onItemDone = {this.onItemDone}/>
            </div>
    }
};

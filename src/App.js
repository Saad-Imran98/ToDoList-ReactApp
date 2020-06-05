import React, {Component} from "react";
import Navbar from "./Navbar";
import toDos from "./toDos";
import Footer from "./Footer"
import ToDoItem from "./ToDoItem";
import Header from "./Header";

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            todos:toDos
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id){
        this.setState(prevState=> {
            const updatedToDos = prevState.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedToDos
            }
        })
    }

    render() {
        const todoArray = this.state.todos.map(item => <ToDoItem key = {item.id} item={item} handleChange={this.handleChange}/>)
        return(
            <div>
                <Header />
                <Navbar />
                {todoArray}
                <Footer />
            </div>
        )
    }
}

export default App;

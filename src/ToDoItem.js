import React from "react";


class ToDoItem extends React.Component{
    //class methods
    //add methods here
    //this.method

    render() {
        return (
            <div className = "ToDoItem">
                <div>
                    <input
                        type="checkbox"
                        checked={this.props.item.completed}
                        onChange={()=> this.props.handleChange(this.props.item.id)}
                    />
                </div>
                <div>
                    <p>{this.props.item.id + ". " + this.props.item.todo}</p>
                </div>
            </div>
        )
    }
}

export default ToDoItem;
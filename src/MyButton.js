import React from "react";

class MyButton extends React.Component{

    render() {
        return (
            <div>
                <button className="addButton" onClick={()=> console.log("Button pressed")}>Add To-Do Item</button>
            </div>
        )
    }
}
export default MyButton;
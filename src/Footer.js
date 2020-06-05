import React from "react"

function Footer(){
    const date = new Date();
    const minutes = date.getMinutes()<10 ? "0" +date.getMinutes() : date.getMinutes();
    const hour = date.getHours();

    return(
        <footer className="footer">
            <h3>{date.getHours() + ":" + minutes}</h3>
        </footer>
    )
}

export default Footer;
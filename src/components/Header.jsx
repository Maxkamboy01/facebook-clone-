import React from "react"
import headerimg from "../assets/header.jpg"

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header">
                <img src={headerimg} alt="header image" />
            </div>
         );
    }
}
 
export default Header;
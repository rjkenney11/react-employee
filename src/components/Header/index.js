import React from "react";
import './style.css';

function Header(props) {
    console.log(props);

    return(
        <div className="head">
            <img src="https://user-images.githubusercontent.com/74163812/115642981-ecde3f80-a2e9-11eb-9069-1736e54d2b73.png"
                className="quest-img-top" alt="Rachel-Banner" />
        </div>  
    )
}

export default Header;
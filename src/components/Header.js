import React from "react";

function Header({ onDarkModeClick, darkModeState }) {
    return (
        <div>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
            {darkModeState ? "Dark" : "Light"} Mode
            </button>
        </div>
    )
};

export default Header;
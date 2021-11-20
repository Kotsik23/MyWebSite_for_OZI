import React from "react";

const Header = () => {
    return(
        <header>
            <div className="header">
                <div className="header__section">
                    <div className="header__item headerlogo">
                        MWS
                    </div>
                    <div className="header_item">
                        <a href="/">Home</a>
                    </div>
                    <div className="header_item">
                        <a href="/about">About</a>
                    </div>
                </div>
                <div className="header__section">
                    <div className="header_item">
                        <a href="/auth">Log In</a>
                    </div>
                    <div className="header_item">
                        <a href="/quit">Log out</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
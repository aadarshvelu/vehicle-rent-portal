import React from 'react';

import "../assests/layout.css";

const Layout = (props) => {
    return (
        <div className="wrapper">
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}

export default Layout;
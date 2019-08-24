import React from 'react';
import Header from './Header';

const MainLayout = (props) => {
    console.log("MainLayour", props);
    return (<div>
        <Header path={props}></Header>
        {props.children}
    </div>);
}

export default MainLayout;
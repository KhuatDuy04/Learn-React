// class component
// function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    //JSX
    render(){
        const address = ['hn', 'hcm'];
        return (
            <div>
                <UserInfor/>
                <br/> <br/>
                <DisplayInfor name="hoi dan it" age={26} address={address}/>
            </div>
        );
    }
}

export default MyComponent;
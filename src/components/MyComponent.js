// class component
// function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            {id: 1, name: 'hoiit', age: 22},
            {id: 2, name: 'phandanh', age: 33},
            {id: 3, name: 'kien', age: 35},
        ]
    }

    //JSX
    render(){
        return (
            <div>
                <UserInfor/>
                <br/> <br/>
                <DisplayInfor listUsers={this.state.listUsers} users={this.state.listUsers}/>
            </div>
        );
    }
}

export default MyComponent;
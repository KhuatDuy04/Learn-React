// class component
// function component

import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            {id: 1, name: 'hoiit', age: 22},
            {id: 2, name: 'phandanh', age: 33},
            {id: 3, name: 'kien', age: 35},
        ]
    }

    handleAddNewUser = (userObj) => {
        console.log('>>>check data', userObj);
        this.setState({
            listUsers: [userObj,...this.state.listUsers]
        })
    }

    //JSX
    render(){
        return (
            <>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
                <br/> <br/>
                <DisplayInfor listUsers={this.state.listUsers}/>
            </>
        );
    }
}

export default MyComponent;
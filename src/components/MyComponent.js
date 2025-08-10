// class component
// function component

import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {

//     state = {
//         listUsers: [
//             {id: 1, name: 'hoiit', age: 22},
//             {id: 2, name: 'phandanh', age: 33},
//             {id: 3, name: 'kien', age: 35},
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         console.log('>>>check data', userObj);
//         this.setState({
//             listUsers: [userObj,...this.state.listUsers]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         let listUsersClone = this.state.listUsers
//         listUsersClone = listUsersClone.filter(item => item.id !== userId)
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }

//     //JSX
//     render(){
//         return (
//             <>
//                 <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//                 <br/> <br/>
//                 <DisplayInfor listUsers={this.state.listUsers} handleDeleteUser={this.handleDeleteUser}/>
//             </>
//         );
//     }
// }

const MyComponent = () => {
    const [listUsers, setListUsers] = useState([
        {id: 1, name: 'hoiit', age: 22},
        {id: 2, name: 'phandanh', age: 33},
        {id: 3, name: 'kien', age: 35},
    ])

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj,...listUsers])
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        setListUsers(listUsersClone)
    }

    //JSX
    return (
        <>
            <AddUserInfor handleAddNewUser={handleAddNewUser} />
            <br/> <br/>
            <DisplayInfor listUsers={listUsers} handleDeleteUser={handleDeleteUser}/>
        </>
    );
}

export default MyComponent;
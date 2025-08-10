import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     state = {
//         name: '',
//         address: 'HN',
//         age: ''
//     }

//     handleClick = (event) => {
//         console.log(this.state.name);

//         // Hàm setState dùng để cập nhật lại giá trị
//         this.setState({
//             name: 'Thanh',
//             age: Math.random()
//         })
//     }

//     handOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         console.log(this.state)
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random()*100) + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         })
//     }

//     render(){
//         return (
//             <>
//                 my name is {this.state.name} and I'm from {this.state.address}
//                 <button onClick={(event) => {this.handleClick(event)}}>click me</button>
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your name:</label>
//                     <input 
//                     value={this.state.name}
//                     type="text"
//                     onChange={(event) => this.handOnChangeInput(event)}
//                     />
//                     <label>Your age:</label>
//                     <input 
//                     value={this.state.age}
//                     type="text"
//                     onChange={(event) => this.handOnChangeAge(event)}
//                     />
//                     <button>submit</button>
//                 </form>
//             </>
//         )
//     }
// }

const AddUserInfor = (props) => {
    const [user, setUser] = useState(
        {
            name: '',
            age: ''
        }
    )

    const handleClick = (event) => {
        setUser({
            name: 'Thanh',
            age: Math.random()
        })
    }

    const handOnChangeInput = (event) => {
        setUser(prev => ({
            ...prev,
            name: event.target.value
        }));
    };

    const handOnChangeAge = (event) => {
        setUser(prev => ({
            ...prev,
            age: event.target.value
        }));
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random()*100) + 1) + '-random',
            name: user.name,
            age: user.age
        })
    }

    return (
        <>
            my name is {user.name} and I'm from {user.address}
            <button onClick={(event) => {handleClick(event)}}>click me</button>
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name:</label>
                <input 
                value={user.name}
                type="text"
                onChange={(event) => handOnChangeInput(event)}
                />
                <label>Your age:</label>
                <input 
                value={user.age}
                type="text"
                onChange={(event) => handOnChangeAge(event)}
                />
                <button>submit</button>
            </form>
        </>
    )
}

export default AddUserInfor
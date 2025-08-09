import React from "react";

class AddUserInfor extends React.Component {
    state = {
        name: 'Duy',
        address: 'HN',
        age: 21
    }

    handleClick = (event) => {
        console.log(this.state.name);

        // Hàm setState dùng để cập nhật lại giá trị
        this.setState({
            name: 'Thanh',
            age: Math.random()
        })
    }

    handOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render(){
        return (
            <div>
                my name is {this.state.name} and I'm from {this.state.address}
                <button onClick={(event) => {this.handleClick(event)}}>click me</button>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name:</label>
                    <input 
                    value={this.state.name}
                    type="text"
                    onChange={(event) => this.handOnChangeInput(event)}
                    />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfor
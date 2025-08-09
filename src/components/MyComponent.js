// class component
// function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Duy',
        address: 'HN',
        age: 21
    }

    //JSX
    render(){
        return (
            <div>
                my name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }
}

export default MyComponent;
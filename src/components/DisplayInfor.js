import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const {listUsers} = this.props;
        
        // DRY don't repeat yourself
        //props => viết tắt properties
        return (
            <div>
                { listUsers.map((user, index) => {
                    return (
                        <div key={user.id}>
                            <div>My name {user.name}</div>
                            <div>My age {user.age}</div>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DisplayInfor
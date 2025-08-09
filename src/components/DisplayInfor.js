import React from "react";

class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    }

    handleShowHide = () =>{
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        const {listUsers} = this.props;
        
        // DRY don't repeat yourself
        //props => viết tắt properties
        return (
            <div>
                <div>
                    <span onClick={(event) => {this.handleShowHide()}}>
                        {this.state.isShowListUser === true ? 'hide list user' : 'show list user'}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        { listUsers.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 22 ? 'green' : 'red'}>
                                    <div>My name {user.name}</div>
                                    <div>My age {user.age}</div>
                                    <hr/>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfor
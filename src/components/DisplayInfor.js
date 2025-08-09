import React from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg';

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
            <div className="display-infor-container">
                <img src={logo}/>
                <div>
                    <span onClick={(event) => {this.handleShowHide()}}>
                        {this.state.isShowListUser === true ? 'hide list user' : 'show list user'}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        { listUsers.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 22 ? 'green' : 'red'}>
                                    <div>My name {user.name}</div>
                                    <div>My age {user.age}</div>
                                    <hr/>
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        )
    }
}

export default DisplayInfor
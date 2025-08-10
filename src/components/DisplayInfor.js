import React from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg';

// class DisplayInfor extends React.Component {
//     render() {
//         const {listUsers} = this.props;
        
//         // DRY don't repeat yourself
//         //props => viết tắt properties
//         return (
//             <div className="display-infor-container">
//                 {/* <img src={logo}/> */}
//                 {true &&
//                     <>
//                         { listUsers.map((user, index) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 22 ? 'green' : 'red'}>
//                                     <div>My name {user.name}</div>
//                                     <div>My age {user.age}</div>
//                                     <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     <hr/>
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const {listUsers} = props;
    // DRY don't repeat yourself
    //props => viết tắt properties
    return (
        <div className="display-infor-container">
            {/* <img src={logo}/> */}
            {true &&
                <>
                    { listUsers.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 22 ? 'green' : 'red'}>
                                <div>My name {user.name}</div>
                                <div>My age {user.age}</div>
                                <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                <hr/>
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}

export default DisplayInfor
import AddUserModal from './Model/AddUserModal'
const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <AddUserModal/>
            <div className="title">
                Manager User
            </div>
            <div className="user-content">
                <div>
                    <button>add new user</button>
                </div>
                <div>
                    table
                </div>
            </div>
        </div>
    )
}

export default ManageUser
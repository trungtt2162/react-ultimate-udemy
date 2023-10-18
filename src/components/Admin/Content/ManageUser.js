import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss';
import { useState } from 'react';
const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    return (
        <div className="manage-user-container">
            <div className="title">
                ManageUser
            </div>
            <div className="users-content">
                <div className='btn-add-new'>
                    <button className="btn btn-primary"
                        onClick={() => setShowModalCreateUser(!showModalCreateUser)}>Add New User</button>
                </div>
            </div>
            <div className='table-users-container'>
                Table User
            </div>
            <ModalCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser} />
        </div>
    )
}

export default ManageUser;
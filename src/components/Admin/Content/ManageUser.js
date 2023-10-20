import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss';
import TableUser from './TableUser';
import { useEffect, useState } from "react";
import { getAllUsers } from './../../../services/apiServices';
const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [listUsers, setListUsers] = useState([])
    useEffect(() => {
        fetchListUsers();

    }, []);
    const fetchListUsers = async () => {
        let res = await getAllUsers();
        console.log('>>check >>', res)
        if (res.EC === 0) {
            setListUsers(res.DT);
        }
    }
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

                <TableUser listUsers={listUsers} />
            </div>
            <ModalCreateUser
                show={showModalCreateUser}
                setShow={setShowModalCreateUser}
                fetchListUsers={fetchListUsers} />
        </div>
    )
}

export default ManageUser;
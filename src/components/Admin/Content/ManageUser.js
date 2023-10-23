import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss';
import TableUser from './TableUser';
import { useEffect, useState } from "react";
import { getAllUsers } from './../../../services/apiServices';
import ModalUpdateUser from './ModalUpdateUser';
import ModalViewUser from './ModalViewUser';
import ModalDeleteUser from './ModalDeleteUser';
const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

    const [dataUpdate, setDataUpdate] = useState({});
    const [dataView, setDataView] = useState({});
    const [dataDelete, setDataDelete] = useState({});
    const [listUsers, setListUsers] = useState([])
    useEffect(() => {
        fetchListUsers();

    }, []);
    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUsers(res.DT);
        }
    }

    const handleClickBtnUpdateUser = (user) => {
        setShowModalUpdateUser(!showModalUpdateUser);
        setDataUpdate(user);
    }
    const handleClickBtnViewUser = (user) => {
        setShowModalViewUser(!showModalViewUser);
        setDataView(user);
    }
    const handleClickBtnDeleteUser = (user) => {
        setShowModalDeleteUser(!showModalDeleteUser);
        setDataDelete(user);
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

                <TableUser
                    listUsers={listUsers}
                    handleClickBtnUpdateUser={handleClickBtnUpdateUser}
                    handleClickBtnViewUser={handleClickBtnViewUser}
                    handleClickBtnDeleteUser={handleClickBtnDeleteUser}
                />
            </div>
            <ModalCreateUser
                show={showModalCreateUser}
                setShow={setShowModalCreateUser}
                fetchListUsers={fetchListUsers}
            />
            <ModalUpdateUser
                show={showModalUpdateUser}
                setShow={setShowModalUpdateUser}
                fetchListUsers={fetchListUsers}
                dataUpdate={dataUpdate}
            />
            <ModalViewUser
                show={showModalViewUser}
                setShow={setShowModalViewUser}
                dataView={dataView}
            />
            <ModalDeleteUser
                show={showModalDeleteUser}
                setShow={setShowModalDeleteUser}
                fetchListUsers={fetchListUsers}
                dataDelete={dataDelete} />
        </div>
    )
}

export default ManageUser;
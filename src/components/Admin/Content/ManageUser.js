import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss';
import TableUserPaginate from './TableUserPaginate';
import { useEffect, useState } from "react";
import { getAllUsers, getUserWithPaginate } from './../../../services/apiServices';
import ModalUpdateUser from './ModalUpdateUser';
import ModalViewUser from './ModalViewUser';
import ModalDeleteUser from './ModalDeleteUser';
const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const LIMIT_USER = 5;

    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataView, setDataView] = useState({});
    const [dataDelete, setDataDelete] = useState({});
    const [listUsers, setListUsers] = useState([])
    useEffect(() => {
        // fetchListUsers();
        fetchListUsersWithPaginate(1);
    }, []);
    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUsers(res.DT);
        }
    }
    const fetchListUsersWithPaginate = async (page) => {
        let res = await getUserWithPaginate(page, LIMIT_USER);
        if (res.EC === 0) {
            console.log(res.DT)
            setListUsers(res.DT.users);
            setPageCount(res.DT.totalPages);
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

                <TableUserPaginate
                    listUsers={listUsers}
                    handleClickBtnUpdateUser={handleClickBtnUpdateUser}
                    handleClickBtnViewUser={handleClickBtnViewUser}
                    handleClickBtnDeleteUser={handleClickBtnDeleteUser}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    pageCount={pageCount}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
            <ModalCreateUser
                show={showModalCreateUser}
                setShow={setShowModalCreateUser}
                fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <ModalUpdateUser
                show={showModalUpdateUser}
                setShow={setShowModalUpdateUser}
                fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                dataUpdate={dataUpdate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <ModalViewUser
                show={showModalViewUser}
                setShow={setShowModalViewUser}
                dataView={dataView}
            />
            <ModalDeleteUser
                show={showModalDeleteUser}
                setShow={setShowModalDeleteUser}
                fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                dataDelete={dataDelete}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

        </div>
    )
}

export default ManageUser;
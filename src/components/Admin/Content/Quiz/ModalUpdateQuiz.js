import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ManageQuiz';
import { toast } from 'react-toastify';
import { BsCardImage } from "react-icons/bs";
import { putUpdateQuiz } from '../../../../services/apiServices';
import { useEffect } from 'react';
import _ from 'lodash';
const ModalUpdateQuiz = (props) => {
    const { show, setShow, dataUpdate, setDataUpdate, fetchListQuiz } = props;
    const handleClose = () => {
        setShow(false);
        setName("");
        setDescription("");
        setLevel("");
        setImage("");
        setPreviewImage("");
        setDataUpdate({});
    };
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [level, setLevel] = useState("");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");
    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            setId(dataUpdate.id);
            setName(dataUpdate.name);
            setDescription(dataUpdate.description);
            setLevel(dataUpdate.difficulty);
            setImage("");
            if (dataUpdate.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
            }
        }
    }, [dataUpdate])
    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        }
    }
    const handleSubmitUpdateUser = async () => {

        //validate?
        let data = await putUpdateQuiz(id, description, name, level, image);
        console.log('data', data);
        if (data && data.EC === 0) {
            toast.success(data.EM)
            handleClose();
            await fetchListQuiz();
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Add New User
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className="modal-add-user">

                <Modal.Header closeButton>
                    <Modal.Title>Update Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">ID</label>
                            <input disabled type="email" className="form-control" value={id}
                                onChange={(event) => setId(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" value={name}
                                onChange={(event) => setName(event.target.value)} />

                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Description</label>
                            <input type="text" className="form-control" value={description}
                                onChange={(event) => setDescription(event.target.value)} />

                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Difficulty</label>
                            <select className="form-select" onChange={(event) => setLevel(event.target.value)}
                                value={level}>
                                <option value="EASY">EASY</option>
                                <option value="MEDIUM">MEDIUM</option>
                                <option value="HARD">HARD</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className="form-label lable-upload" htmlFor='labelUploadImg'>
                                <BsCardImage size={25} /> Upload File Image</label>
                            <input type='file' id='labelUploadImg' hidden
                                onChange={(event) => handleUploadImage(event)} />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage} />
                                :
                                <span>Preview Image</span>
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitUpdateUser()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalUpdateQuiz;
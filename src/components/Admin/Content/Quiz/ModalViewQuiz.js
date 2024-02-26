import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ManageQuiz.scss';
import { BsCardImage } from "react-icons/bs";
import { useEffect } from 'react';
import _ from 'lodash';
const ModalViewQuiz = (props) => {
    const { show, setShow, dataView } = props;
    const handleClose = () => {
        setShow(false)
    };

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [level, setLevel] = useState("");
    const [previewImage, setPreviewImage] = useState("");
    useEffect(() => {
        if (!_.isEmpty(dataView)) {
            setId(dataView.id);
            setName(dataView.name);
            setDescription(dataView.description);
            setLevel(dataView.difficulty);
            if (dataView.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataView.image}`);
            }
        }
    }, [dataView])

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                className="modal-add-user"
            >

                <Modal.Header closeButton>
                    <Modal.Title>View Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">ID</label>
                            <input disabled type="text" className="form-control" value={id} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Name Quiz</label>
                            <input disabled type="text" className="form-control" value={name} />

                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Description</label>
                            <input disabled type="text" className="form-control" value={description} />

                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Level</label>
                            <select disabled className="form-select"
                                value={level}>
                                <option value="EASY">EASY</option>
                                <option value="MEDIUM">MEDIUM</option>
                                <option value="HARD">HARD</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className="form-label lable-upload" >
                                <BsCardImage size={25} /> Preview Image</label>
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
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalViewQuiz;
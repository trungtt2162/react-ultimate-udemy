import './ManageQuiz.scss'
import Select from 'react-select';
import { BsCardImage } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { postCreateNewQuiz, getAllQuizForAdmin } from '../../../../services/apiServices';
import TableQuiz from './TableQuiz';
import Accordion from 'react-bootstrap/Accordion';
import ModalViewQuiz from './ModalViewQuiz';
import ModalUpdateQuiz from './ModalUpdateQuiz';
import ModalDeleteQuiz from './ModalDeleteQuiz';
const options = [
    { value: 'EASY', label: 'EASY' },
    { value: 'MEDIUM', label: 'MEDIUM' },
    { value: 'HARD', label: 'HARD' }
]
const ManageQuiz = (props) => {
    const [showModalViewQuiz, setShowModalViewQuiz] = useState(false);
    const [showModalUpdateQuiz, setShowModalUpdateQuiz] = useState(false);
    const [showModalDeleteQuiz, setShowModalDeleteQuiz] = useState(false);

    const [dataUpdate, setDataUpdate] = useState({});
    const [dataView, setDataView] = useState({});
    const [dataDelete, setDataDelete] = useState({});
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quizType, setQuizType] = useState('');
    const [newImage, setNewImage] = useState('');
    const [previewNewImage, setNewPreviewImage] = useState("");
    const [listQuiz, setListQuiz] = useState([])
    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setNewPreviewImage(URL.createObjectURL(event.target.files[0]));
            setNewImage(event.target.files[0]);
        }
    }
    const handleSubmitQuiz = async (props) => {
        if (!name || !description) {
            toast.error("Name/Description is required!!");
            return;
        }
        let data = await postCreateNewQuiz(name, description, quizType, newImage);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            setName("");
            setDescription("");
            setQuizType("");
            setNewImage(null);
            setNewPreviewImage("");
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    }
    const handleClickBtnViewQuiz = (user) => {
        setShowModalViewQuiz(!showModalViewQuiz);
        setDataView(user);
    }
    const handleClickBtnUpdateQuiz = (user) => {
        setShowModalUpdateQuiz(!showModalUpdateQuiz);
        setDataUpdate(user);
    }
    const handleClickBtnDeleteQuiz = (user) => {
        setShowModalDeleteQuiz(!showModalDeleteQuiz);
        setDataDelete(user);
    }
    useEffect(() => {
        fetchListQuiz();
    }, []);
    const fetchListQuiz = async () => {
        let res = await getAllQuizForAdmin();
        if (res.EC === 0) {
            setListQuiz(res.DT);
        }
    }
    return (
        <div className="quiz-container">
            <div className="title">
                MANAGE QUIZ
            </div>
            <hr />
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Add new quiz</Accordion.Header>
                    <Accordion.Body>
                        <div className="add-new">
                            <fieldset className="border rounded-3 p-3">
                                <legend className="float-none w-auto px-3">Add new quiz:</legend>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" placeholder='Name'
                                        value={name}
                                        onChange={(event) => setName(event.target.value)} />
                                    <label>Name</label>
                                </div>
                                <div className="form-floating">
                                    <input type="text" className="form-control" placeholder="Descreption"
                                        value={description}
                                        onChange={(event) => setDescription(event.target.value)} />
                                    <label>Descreption</label>
                                </div>
                                <div className="form-floating my-3">
                                    <Select
                                        options={options}
                                        defaultValue={quizType}
                                        onChange={setQuizType}
                                        value={quizType}
                                        placeholder={"Quiz Type ... "} />
                                </div>
                                <div className="more-actions form-group">
                                    <label className="form-label lable-upload" htmlFor='labelUpload'>
                                        <BsCardImage size={20} /> Upload File Image</label>
                                    <input type='file' id='labelUpload' className='form-control' hidden
                                        onChange={(event) => handleUploadImage(event)}
                                    />
                                </div>
                                <div className='img-preview'>
                                    {previewNewImage ?
                                        <img src={previewNewImage} />
                                        :
                                        <span>Preview Image</span>
                                    }
                                </div>
                                <div className='mt-3'>
                                    <button className='btn btn-warning'
                                        onClick={() => handleSubmitQuiz()}
                                    >Save</button>
                                </div>
                            </fieldset>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className="list-detail mt-3">
                <TableQuiz
                    fetchListQuiz={fetchListQuiz}
                    listQuiz={listQuiz}
                    handleClickBtnUpdateQuiz={handleClickBtnUpdateQuiz}
                    handleClickBtnViewQuiz={handleClickBtnViewQuiz}
                    handleClickBtnDeleteQuiz={handleClickBtnDeleteQuiz}
                />
            </div>
            <ModalViewQuiz
                show={showModalViewQuiz}
                setShow={setShowModalViewQuiz}
                dataView={dataView}
            />
            <ModalUpdateQuiz
                show={showModalUpdateQuiz}
                setShow={setShowModalUpdateQuiz}
                fetchListQuiz={fetchListQuiz}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
            />
            <ModalDeleteQuiz
                show={showModalDeleteQuiz}
                setShow={setShowModalDeleteQuiz}
                fetchListQuiz={fetchListQuiz}
                dataDelete={dataDelete}
            />
        </div>
    )
}
export default ManageQuiz;
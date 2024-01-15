import './ManageQuiz.scss'
import Select from 'react-select';
import { BsCardImage } from "react-icons/bs";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { postCreateNewQuiz } from '../../../../services/apiServices';
import TableQuiz from './TableQuiz';
import Accordion from 'react-bootstrap/Accordion';
const options = [
    { value: 'EASY', label: 'EASY' },
    { value: 'MEDIUM', label: 'MEDIUM' },
    { value: 'HARD', label: 'HARD' }
]
const ManageQuiz = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quizType, setQuizType] = useState('');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState("");
    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        }
    }
    const handleSubmitQuiz = async (props) => {
        if (!name || !description) {
            toast.error("Name/Description is required!!");
            return;
        }
        let data = await postCreateNewQuiz(name, description, quizType, image);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            setName("");
            setDescription("");
            setQuizType("");
            setImage(null);
            setPreviewImage("");
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
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
                                    {previewImage ?
                                        <img src={previewImage} />
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
                <TableQuiz />
            </div>

        </div>
    )
}
export default ManageQuiz;
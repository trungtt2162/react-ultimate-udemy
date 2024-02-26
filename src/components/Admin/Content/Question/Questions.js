import { useState } from 'react';
import Select from 'react-select';
import './Questions.scss'
import { BsCardImage, BsCloudPlus } from "react-icons/bs";
const Questions = (props) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    return (
        <div className="questions-container">
            <div className="title">
                MANAGE QUESTIONS
            </div>
            <div className="add-new-question">
                <div className='col-6 form-group'>
                    <label>
                        Select Quiz
                    </label>
                    <Select
                        defaultValue={selectedQuiz}
                        onChange={setSelectedQuiz}
                        options={options}
                    />
                </div>
                <div className='mt-3'>
                    Add New Questions:
                </div>
                <div className='questions-content'>
                    <div className="form-floating description">
                        <input type="text" class="form-control" placeholder="name@example.com" />
                        <label>Description</label>
                    </div>
                    <div className='group-add'>
                        <label className="form-label lable-upload" htmlFor='labelUpload'>
                            <BsCardImage size={25} /> Upload File Image</label>
                        <input type='file' id='labelUpload' hidden
                        />
                    </div>
                    <div className='btn-add'>
                        <span><BsCloudPlus size={28} /></span>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Questions;
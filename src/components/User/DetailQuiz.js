import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz, postSubmitQuiz } from "../../services/apiServices";
import { chain, iteratee } from "lodash";
import { toast } from 'react-toastify';
import './DetailQuiz.scss';
import _ from "lodash";
import Question from "./Question";
import ModalResult from "./ModalResult";
const DetailQuiz = (props) => {
    const location = useLocation();
    const params = useParams();
    const quizID = params.id;
    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [dataModalResult, setDataModalResult] = useState({});
    const handlePrevQ = () => {
        if (index - 1 < 0) return;
        setIndex(index - 1);
    }
    const handleNextQ = () => {
        if (dataQuiz && dataQuiz.length > index + 1) {
            setIndex(index + 1);
        }
    }
    const handleFinishQuiz = async () => {
        let payload = {
            quizId: +quizID,
            answers: []
        };
        let answers = [];
        console.log('dataquiz', dataQuiz);
        if (dataQuiz && dataQuiz.length > 0) {
            dataQuiz.forEach(question => {
                let questionId = question.questionId;
                let userAnswerId = [];
                question.answers.forEach(ans => {
                    if (ans.isSelected) {
                        userAnswerId.push(ans.id);
                    }
                })
                answers.push({
                    questionId: +questionId,
                    userAnswerId: userAnswerId
                });
            })
            payload.answers = answers;
            let res = await postSubmitQuiz(payload);
            console.log('check res', res);
            if (res && +res.EC === 0) {
                toast.success({
                    countCorrect: res.DT.countCorrect,
                    countTotal: res.DT.countTotal,
                    quizData: res.DT.quizData
                });
                setShowResult(!showResult);
                setDataModalResult(res.DT)
                // navigate('/');
            }
            if (res && +res.EC !== 0) {
                toast.error(res.EM);
            }
        }
    }
    useEffect(() => {
        fetchQuestion();
    }, [quizID]
    )
    const fetchQuestion = async () => {
        let res = await getDataQuiz(quizID);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                .groupBy("id")
                .map((value, key) => {
                    let answers = []
                    let questionDesc, image = null;
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDesc = item.description;
                            image = item.image;
                        }
                        item.answers.isSelected = false;
                        answers.push(item.answers)
                    })


                    return { questionId: key, answers, questionDesc, image }
                }
                )
                .value()
            setDataQuiz(data);

        }
    }
    const handleCheckBox = (answerID, questionID) => {
        let dataQuizClone = _.cloneDeep(dataQuiz);
        let question = dataQuizClone.find((item) => +item.questionId === +questionID)
        if (question && question.answers) {
            question.answers.map(item => {
                if (+item.id === +answerID) {
                    item.isSelected = !item.isSelected;
                }
                return item;
            })
        }
        let index = dataQuizClone.findIndex(item => +item.questionId === +questionID)
        if (index > -1) {
            dataQuizClone[index] = question;
            setDataQuiz(dataQuizClone);
        }
    }

    return (
        <div className="detail-quiz-container container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizID}: {location?.state.quizDescrip}
                </div>
                <hr />
                <div className="q-body">

                </div>
                <div className="q-content">
                    <Question
                        index={index}
                        handleCheckBox={handleCheckBox}
                        data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []} />
                </div>
                <div className="footer">
                    <button className="btn btn-outline-danger"
                        onClick={() => handlePrevQ()}>
                        PREV
                    </button>
                    <button className="btn btn-outline-danger"
                        onClick={() => handleNextQ()}>
                        NEXT
                    </button>
                    <button className="btn btn-warning"
                        onClick={() => handleFinishQuiz()}>
                        FINISH
                    </button>
                </div>

            </div>
            <div className="right-content">
                <div className="countdown">
                    15:00
                </div>
                <div className="number-question">
                    question
                </div>
            </div>
            <ModalResult
                show={showResult}
                setShow={setShowResult}
                dataModalResult={dataModalResult}
            />
        </div>
    );
}

export default DetailQuiz;
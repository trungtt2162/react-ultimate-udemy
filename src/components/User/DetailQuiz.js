import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiServices";
import { chain } from "lodash";
import './DetailQuiz.scss';

import _ from "lodash";
import Question from "./Question";
const DetailQuiz = (props) => {
    const location = useLocation();
    console.log(location);
    const params = useParams();
    const quizID = params.id;
    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0);

    const handlePrevQ = () => {
        if (index - 1 < 0) return;
        setIndex(index - 1);
    }
    const handleNextQ = () => {
        if (dataQuiz && dataQuiz.length > index + 1) {
            setIndex(index + 1);
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
                        answers.push(item.answers)
                    })


                    return { questionId: key, answers, questionDesc, image }
                }
                )
                .value()
            setDataQuiz(data);

        }
    }
    console.log('Check data quiz', dataQuiz)
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
        </div>
    );
}

export default DetailQuiz;
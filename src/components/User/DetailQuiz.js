import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiServices";
import { chain } from "lodash";
import _ from "lodash";
const DetailQuiz = (props) => {
    const params = useParams();
    const quizID = params.id;
    useEffect(() => {
        fetchQuestion();
    }, [quizID]
    )
    const fetchQuestion = async () => {
        let res = await getDataQuiz(quizID);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                // Group the elements of Array based on `color` property
                .groupBy("id")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => {
                    let answers = []
                    let questionDesc, image = null;
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDesc = item.description;
                            image = item.image;
                        }
                        answers.push(item.answers)
                        console.log(">>item answer", item.answers)
                    })
                    

                    return { questionId: key, answers, questionDesc, image }
                }
                )
                .value()
            console.log(data)

        }
    }
    return (
        <div>
            detail quiz
        </div>
    );
}

export default DetailQuiz;
import _ from "lodash";
const Question = (props) => {
    const { data, index } = props;
    if (_.isEmpty(data)) {
        return (<></>)
    }
    return (
        <>
            {data.image &&
                <div className="img-question">
                    <img
                        src={`data:image/jpeg;base64,${data.image}`} />
                </div>
            }
            <div className="question">
                <div>Question {index + 1} : {data.questionDesc}</div>
            </div>

            <div className="answer">
                {data.answers && data.answers.length
                    && data.answers.map((a, index) => {
                        return (
                            <div key={`answer-${index}`} className="a-des">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" />
                                    <label class="form-check-label" >
                                        {a.id}. {a.description}
                                    </label>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </>
    );
}
export default Question;
import _ from "lodash";
const Question = (props) => {
    const { data, index, handleCheckBox } = props;
    if (_.isEmpty(data)) {
        return (<></>)
    }
    const handleCheckBoxClick = (event, aId, qId) => {
        handleCheckBox(aId, qId);
    }
    return (
        <>
            {data.image ?
                <div className="img-question">
                    <img
                        src={`data:image/jpeg;base64,${data.image}`} />
                </div>
                :
                <div className="img-question">

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
                                <div className="form-check">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        checked={a.isSelected}
                                        onChange={(event) => handleCheckBoxClick(event, a.id, data.questionId)} />
                                    <label className="form-check-label" >
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
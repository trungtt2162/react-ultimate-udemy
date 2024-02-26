import { useEffect, useState } from "react";
import { getAllQuizForAdmin } from "../../../../services/apiServices";
const TableQuiz = (props) => {
    const { fetchListQuiz, listQuiz, handleClickBtnViewQuiz, handleClickBtnUpdateQuiz, handleClickBtnDeleteQuiz } = props;

    useEffect(() => {
        fetchListQuiz();
    }, [])
    return (
        <div>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Level</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listQuiz && listQuiz.map((item, index) => {
                        return (
                            <tr key={`table-quiz-${index}`}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.difficulty}</td>
                                <td>
                                    <button className="btn btn-outline-info"
                                        onClick={() => { handleClickBtnViewQuiz(item) }}
                                    >View</button>
                                    <button className="btn btn-warning mx-2"
                                        onClick={() => handleClickBtnUpdateQuiz(item)}
                                    >Update</button>
                                    <button className="btn btn-danger"
                                        onClick={() => handleClickBtnDeleteQuiz(item)}
                                    >Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default TableQuiz;
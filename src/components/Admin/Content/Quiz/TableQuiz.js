import { useEffect, useState } from "react";
import { getAllQuizForAdmin } from "../../../../services/apiServices";
const TableQuiz = (props) => {
    const [listQuiz, setListQuiz] = useState("");
    useEffect(() => {
        fetchQuiz();
    }, [])
    const fetchQuiz = async () => {

        let res = await getAllQuizForAdmin();
        console.log('res', res)
        if (res && res.EC === 0) {
            setListQuiz(res.DT);

        }
    }
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
                                    // onClick={() => { handleClickBtnViewUser(item) }}
                                    >View</button>
                                    <button className="btn btn-warning mx-2"
                                    // onClick={() => handleClickBtnUpdateUser(item)}
                                    >Update</button>
                                    <button className="btn btn-danger"
                                    // onClick={() => handleClickBtnDeleteUser(item)}
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
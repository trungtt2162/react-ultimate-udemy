import './ManageQuiz.scss'
const ManageQuiz = (props) => {
    return (
        <div className="quiz-container">
            <div className="title">
                MANAGE QUIZ
            </div>
            <hr />
            <div className="add-new">
                <fieldset className="border rounded-3 p-3">
                    <legend className="float-none w-auto px-3">Personalia:</legend>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                </fieldset>
            </div>
            <div className="list-detail">
                Table
            </div>
        </div>
    )
}
export default ManageQuiz;
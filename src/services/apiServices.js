import axios from './../utils/axiosCustomize';

const postCreateNewUser = (email, password, username, role, image) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('api/v1/participant', data);
}
const getAllUsers = () => {
    return axios.get('api/v1/participant/all');
}
const putUpdateUser = (id, username, role, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.put('api/v1/participant', data);
}
// const getUser = () => {
//     return axios.get('api/v1/participant');
// }
const deleteUser = (userId) => {
    return axios.delete('api/v1/participant', { data: { id: userId } });
}
const getUserWithPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
}
const postLogin = (email, password) => {
    return axios.post('api/v1/login', { email: email, password: password, delay: 3000 });
}
const postRegister = (email, username, password) => {
    return axios.post('api/v1/register', { email, username, password });
}
const getQuizByUser = () => {
    return axios.get('api/v1/quiz-by-participant');
}
const getDataQuiz = (quizId) => {
    return axios.get(`api/v1/questions-by-quiz?quizId=${quizId}`)
}
const postSubmitQuiz = (data) => {
    return axios.post(`api/v1/quiz-submit`, { ...data });
}
const postCreateNewQuiz = (name, description, difficulty, quizImage) => {
    const data = new FormData();
    data.append('description', description);
    data.append('name', name);
    data.append('difficulty', difficulty.value);
    data.append('quizImage', quizImage);
    return axios.post(`api/v1/quiz`, data);
}
const getAllQuizForAdmin = () => {
    return axios.get('api/v1/quiz/all');
}
const putUpdateQuiz = (id, description, name, difficulty, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('description', description);
    data.append('name', name);
    data.append('difficulty', difficulty);
    data.append('quizImage', image);
    return axios.put('api/v1/quiz', data);
}
const deleteQuiz = (quizId) => {
    return axios.delete(`api/v1/quiz/${quizId}`);
}
export {
    postCreateNewUser, getAllUsers, putUpdateUser, deleteUser,
    getUserWithPaginate, postLogin, postRegister, getQuizByUser,
    getDataQuiz, postSubmitQuiz, postCreateNewQuiz, getAllQuizForAdmin,
    putUpdateQuiz, deleteQuiz
}

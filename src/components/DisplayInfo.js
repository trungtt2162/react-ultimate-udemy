import React, { useEffect, useState } from "react";
import './DisplayInfo.scss';

// class DisplayInfo extends React.Component {

//     render() {
//         console.log('callme render')
//         const { listUsers } = this.props;
//         return (
//             <div className='display-infor-container'>

//                 {true &&
//                     <div>
//                         {listUsers.map((user) => {
//                             // console.log(">>check map", user);
//                             return (
//                                 <div key={user.id} className={+user.age > 20 ? "green" : "red"}>
//                                     <div>
//                                         <div>My name is {user.name}</div>
//                                         <div>My age is {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}> X </button>
//                                     </div>
//                                     <hr></hr>
//                                 </div>
//                             )
//                         })}
//                     </div>}
//             </div>
//         );
//     }
// }

const DisplayInfo = (props) => {
    const { listUsers } = props;
    const [isShowHideListUsers, setShowHideListUsers] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUsers(!isShowHideListUsers);
    }
    console.log('Call me render')
    useEffect(() => {
        if (listUsers.length === 0) {
            alert('You delete all user')
        }
        console.log('Call me useEffect')
    }, [listUsers]
    );
    return (
        <div className='display-infor-container'>
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUsers === true ? "Hide list users" : "Show list users"}
                </span>
            </div>
            {isShowHideListUsers &&
                <div>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 20 ? "green" : "red"}>
                                <div>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}> X </button>
                                </div>
                                <hr></hr>
                            </div>
                        )
                    })}
                </div>}
        </div>
    );

}
export default DisplayInfo;
import React from "react";
import './DisplayInfo.scss';
import logo from './../logo.svg';

class DisplayInfo extends React.Component {
    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {

        const { listUsers } = this.props;
        return (
            <div className='display-infor-container'>
                <img src={logo} />
                <div>
                    <span onClick={(clickk) => { this.handleShowHide(clickk) }}>
                        {this.state.isShowListUser === true ? "Hide list users" : "Unhide list users"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user) => {
                            // console.log(">>check map", user);
                            return (
                                <div key={user.id} className={+user.age > 20 ? "green" : "red"}>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                    <hr></hr>
                                </div>
                            )
                        })}
                    </div>}
            </div>
        );
    }
}

export default DisplayInfo;
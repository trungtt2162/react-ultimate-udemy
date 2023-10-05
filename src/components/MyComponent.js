import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Tntt", age: "18" },
            { id: 2, name: "Tan Trung", age: "25" },
            { id: 3, name: "June", age: "35" },
            { id: 4, name: "YV", age: "10" }
        ]
    }
    handleAddNewUser = (userObj) => {
        console.log("check ", userObj);
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }
    handleDeleteUser = (userId) => {
        let listUsersClone = [...this.state.listUsers]
        listUsersClone = listUsersClone.filter(item => item.id != userId)
        this.setState({
            listUsers: listUsersClone
        })
    }

    render() {
        const test = { name: 'joey', age: 21 };
        return (
            <>
                {/* <button onClick={(event) => { this.handleClick(event) }}>UPDATE</button> */}
                {/* <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <label>Your Name: </label>
                    <input
                        value={this.state.name}
                        type="TEXT"
                        onChange={(event) => { this.handleOnChangeInput(event) }} />
                    <label>Your Age: </label>
                    <input
                        value={this.state.age}
                        type="TEXT"
                        onChange={(event) => { this.handleOnChangeAge(event) }} />
                    <button>SUBMIT</button>
                </form> */}
                {JSON.stringify(test)}
                <div className="a">
                    <AddUserInfo
                        handleAddNewUser={this.handleAddNewUser} />
                    <br /><br />
                    <DisplayInfo
                        listUsers={this.state.listUsers}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>
                <div className="b">
                </div>
            </>

        );
    }
}

export default MyComponent;
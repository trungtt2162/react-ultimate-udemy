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

    render() {
        return (
            <div>
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
                <AddUserInfo
                    handleAddNewUser={this.handleAddNewUser} />
                <br /><br />
                <DisplayInfo listUsers={this.state.listUsers}

                />
            </div>

        );
    }
}

export default MyComponent;
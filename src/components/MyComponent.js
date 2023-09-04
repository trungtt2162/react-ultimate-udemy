import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Tntt", age: "18" },
            { id: 2, name: "Tan Trung", age: "25" },
            { id: 3, name: "June", age: "35" },
            { id: 3, name: "YV", age: "10" }
        ]
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
                <UserInfo></UserInfo>
                <br /><br />
                <DisplayInfo listUsers={this.state.listUsers} />
            </div>

        );
    }
}

export default MyComponent;
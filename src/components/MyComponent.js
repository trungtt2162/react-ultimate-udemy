import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
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
                <DisplayInfo name="Tntt" age="24" />
                <hr />
                <DisplayInfo name="Tan Trung" age="21" />
            </div>

        );
    }
}

export default MyComponent;
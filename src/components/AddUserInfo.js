import React from "react";
class AddUserInfo extends React.Component {
    state = {
        name: 'Tấn Trung',
        age: 21,
        address: 'Đà Lạt'
    }
    // handleClick(event) {
    //     console.log(this.state.name)
    //     this.setState(
    //         {
    //             name: 'Truong Tan Trung',
    //             age: Math.floor((Math.random() * 100) + 1)
    //         }
    //     );
    // }
    // handleOnMouseOver = (event) => () {
    //     console.log(event.pageX);
    // }
    handleOnChangeInput = (event) => {
        this.setState(
            {
                name: event.target.value,
            }
        );
    }
    handleOnChangeAge = (event) => {
        this.setState(
            {
                age: event.target.value,
            }
        );
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state)
        this.props.handleAddNewUser(
            {
                id: Math.floor((Math.random() * 100) + 1) + '-random',
                name: this.state.name,
                age: this.state.age
            }
        );
    }
    render() {
        return (
            <div>
                My name is: {this.state.name} and I'm  {this.state.age}
                Address: {this.state.address}
                {/* <button onClick={(event) => { this.handleClick(event) }}>UPDATE</button> */}
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
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
                </form>
            </div>
        )
    }
}

export default AddUserInfo;
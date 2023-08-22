import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Tấn Trung',
        age: 21,
        address: 'Đà Lạt'
    }
    render() {
        return (
            <div>
                My name is: {this.state.name}
                My age: {this.state.age}
                Address: {this.state.address}
            </div>

        );
    }
}

export default MyComponent;
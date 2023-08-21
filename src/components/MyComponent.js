import React from "react";

class MyComponent extends React.Component {
    render() {
        return (
            <div>My First Component
                {
                    Math.random()
                }
            </div>

        );
    }
}

export default MyComponent;
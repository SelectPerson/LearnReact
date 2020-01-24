import React from 'react';

export default class extends React.Component {

    state = {
        cnt: 1
    };
    plus = () => {
        this.setState({
            cnt: this.state.cnt + 1
        });
    };
    render() {
        return (
            <div>
                <h2>Simple</h2>
                <strong>{this.state.cnt}</strong><br/>
                <button onClick={this.plus}>Click</button>
            </div>
        );
    }
}

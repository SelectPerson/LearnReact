import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired
    };

    state = {
        cnt: this.props.min,
        inputValue: this.props.min
    };
    plus = () => this.set(this.state.cnt + 1);
    minus = () => this.set(this.state.cnt - 1);
    set(newCnt) {
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
        this.setState({
            cnt,
            inputValue: cnt
        });
        console.log(cnt);
    }
    setValue(newStr) {
        this.setState({ inputValue: newStr});
    }
    applyValue = () => {
        let cnt = parseInt(this.state.inputValue);
        this.set(isNaN(cnt) ? this.props.min : cnt);
    };
    checkEnterKey = (e) => {
        if(e.keyCode === 13) {
            this.applyValue();
        }
    };
    test() {
        alert('test');
    }
    render() {
        return (
            <div>
                {this.state.cnt}<br/>
                {this.state.inputValue}<br/>
                <button onClick={this.minus}>-</button>
                <input value={this.state.inputValue}
                        onChange={(e) => this.setValue(e.target.value)}
                        onBlur={this.applyValue}
                        onKeyUp={this.checkEnterKey}
                    // onBlur={this.applyValue}
                />
                <button onClick={this.plus}>+</button>
            </div>
        );
    }
}
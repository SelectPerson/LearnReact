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
        this.setState({cnt});
    }
    setValue(newStr) {
        this.setState({ inputValue: newStr });
        console.log(newStr);
        // let cnt = parseInt(newStr);
        // if(isNaN(cnt)) {
        //     cnt = this.props.min;
        // }
        // this.set(cnt);
        // console.log(cnt);
    }
    render() {
        return (
            <div>
                {this.state.cnt}<br/>
                {this.state.inputValue}<br/>
                <button onClick={this.minus}>-</button>
                <input value={this.state.inputValue} onChange={(e) => this.setValue(e.target.value)}/>
                <button onClick={this.plus}>+</button>
            </div>
        );
    }
}

/*
Some.defaultProps = {
    min: 1,
    max: 5
};
*/

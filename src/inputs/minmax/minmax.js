import React from 'react';
import PropTypes from 'prop-types';
import styles from './minmax.css';

console.log(styles);

export default class extends React.Component {
    static defaultProps = {
        onChange: function (cnt) {
            console.log(cnt)
        }
    };
    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        cnt: PropTypes.number.isRequired,
        onChange: PropTypes.func
    };

    state = {
        cnt: this.props.min,
        inputValue: this.props.cnt
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.cnt !== this.props.cnt) {
            this.setState({ inputValue: this.props.cnt});
        }
    }

    plus = () => this.set(this.props.cnt + 1);
    minus = () => this.set(this.props.cnt - 1);
    set(newCnt) {
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
        this.setState({
            inputValue: cnt
        });
        // Как то сказать родителю, что cnt обновился
        this.props.onChange(cnt);
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
    render() {
        return (
            <div>
                {/*{this.state.cnt}<br/>*/}
                {/*{this.state.inputValue}<br/>*/}
                <button onClick={this.minus}>-</button>
                <input className={styles.input} value={this.state.inputValue}
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
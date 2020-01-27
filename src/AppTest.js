import React from 'react';
import AppMinMax from './inputs/lazy/lazy'

export default class extends React.Component {
    state = {
        inp1: 'start',
        inp2: 'start order'
    };

    render() {
        return (
            <div>
                <h2>
                    Lazy Input
                </h2>
                <p>{this.state.inp1}</p>
                <AppMinMax
                    nativeProps={ {type: 'text', className: 'some'} }
                    value={this.state.inp1}
                    onChange={(e) => this.setState({inp1: e.target.value})}
                />
                <h2>
                    Lazy Input no lazy
                </h2>
                <p>{this.state.inp2}</p>
                <AppMinMax
                    nativeProps={
                        {
                            type: 'text',
                            className: 'some',
                            onChange: (e) => this.setState({inp2: e.target.value})
                        }
                    }
                    value={this.state.inp2}

                />
                <hr/>
                <button onClick={(e) => this.setState({inp1: 'test'})}>Unreal change</button>
            </div>
        );
    }
}



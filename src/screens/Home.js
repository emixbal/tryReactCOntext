import React from 'react';

import '../App.css';

import {GlobalConsumer} from '../context'


class Home extends React.Component {
    render(){
        const { totalOrder } = this.props.state;
        return (
            <div className="App">
                <div>
                    {totalOrder}
                </div>
            </div>
        );
    }
}

export default GlobalConsumer(Home);

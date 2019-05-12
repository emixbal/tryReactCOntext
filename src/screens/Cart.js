import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {GlobalConsumer} from '../context.js';

class Cart extends Component{
    render(){
        const { totalOrder } = this.props.state
        return(
            <div>
                {totalOrder}
                <hr />
                <button onClick={()=>this.props.dispatch({type:"PLUS"})}>tambah</button>
                <hr />
                <button onClick={()=>this.props.dispatch({type:"MINUS"})}>kurang</button>
                <hr />
                <Link to="/">HOME</Link>
            </div>
        );
    }
}

export default GlobalConsumer(Cart);
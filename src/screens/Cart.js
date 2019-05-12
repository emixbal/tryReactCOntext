import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {GlobalConsumer} from '../context.js';
import API from '../services/index.js';

class Cart extends Component{
    state = {
        products:[],
        isLoading: true
    }
    componentDidMount(){
        API.getProducts()
        .then(result=>{
            console.log(result.products);
            
            this.setState({
                products:result,
                isLoading:false
            })
        })
    }

    render(){
        const { totalOrder } = this.props.state
        if(this.state.isLoading===true){
            return <div>Loading...</div>
        }
        return(
            <div>
                {totalOrder}
                <hr />
                <button onClick={()=>this.props.dispatch({type:"PLUS"})}>tambah</button>
                <hr />
                <button onClick={()=>this.props.dispatch({type:"MINUS"})}>kurang</button>
                <hr />
                <ul>
                    {
                        this.state.products.products.map(product => (
                            <li key={product.id}>{product.name}</li>
                        ))
                    }
                </ul>
                <Link to="/">HOME</Link>
                
            </div>
        );
    }
}

export default GlobalConsumer(Cart);
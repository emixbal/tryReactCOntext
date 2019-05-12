import React, {Component, createContext} from 'react';

const RootContext = createContext();
const Provider = RootContext.Provider;
const Consumer = RootContext.Consumer;

const GlobalProvider = (Childern) => {
    return(
        class ParentComponent extends Component{
            state = {
                totalOrder : 8,
            }
            
            dispatch = (action) => {
                if(action.type === 'PLUS'){
                    return this.setState({
                    totalOrder: this.state.totalOrder+1
                    })
                }
                if(action.type === 'MINUS'){
                    return this.setState({
                    totalOrder: this.state.totalOrder-1
                    })
                }
            }

            render(){
                return(
                    <Provider value={{
                        state: this.state,
                        dispatch: this.dispatch
                    }}>
                        <Childern {...this.props} />
                    </Provider>
                );
            }
        }
    );
}

export const GlobalConsumer = (Childern) => {
    return(
        class ParentComponent extends Component{
            render(){
                return(
                    <Consumer>
                        {
                            value => {
                                return(
                                    <Childern {...this.props} {...value} />
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }
    );
}



export default GlobalProvider;
import {applyMiddleware,compose,createStore} from 'redux'

import thunk from 'redux-thunk'
import reducer from '../Reducer'

export const store=createStore(
    reducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    )

store.subscribe(()=>console.log(store.getState()))
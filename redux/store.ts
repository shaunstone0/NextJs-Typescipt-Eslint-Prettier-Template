import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware, Middleware } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import combinedReducers from './reducers/'
import thunkMiddleware from 'redux-thunk'

const bindMiddleware = (middleware: Middleware[]) => {
    if (process.env.NODE_ENV !== 'production') {
        return composeWithDevTools(applyMiddleware(...middleware))
    }
}

const initStore = () => {
    return createStore(combinedReducers, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)

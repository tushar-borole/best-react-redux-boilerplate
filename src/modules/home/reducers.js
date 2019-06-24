import { handleActions } from 'redux-actions'
import { RECEIVE_DATA } from './constants'


const homeReducer = handleActions({
    [RECEIVE_DATA]: (state, action) => {
        if (!action.payload) { return state }
        return {
            ...state,
            githubData:action.payload
        }
    }
}, {})

export default homeReducer

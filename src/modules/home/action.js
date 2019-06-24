import { createAction } from 'redux-actions'
import { RECEIVE_DATA } from './constants'

export const receiveDATA = createAction(RECEIVE_DATA)

export const fetchFSS = () => (dispatch, getState) => {
    return fetch('https://api.github.com/users/tushariscoolster/repos?type=all&sort=updated')
        .then(response => {
            if (!response.ok) {
                throw Error()
            }
            return response.json()
        }, error => {
            throw Error(error)
        })
        .then(response => {
            dispatch(receiveDATA(response))
        })
}

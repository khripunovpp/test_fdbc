import { FETCH_LETTERS } from './types'

export default function() {
    return async (dispatch) => {
        dispatch({
            type: FETCH_LETTERS,
            payload: JSON.parse(localStorage.getItem('letterStorage')) || []
        })
    }
}
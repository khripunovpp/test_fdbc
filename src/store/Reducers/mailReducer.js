import { 
    FETCH_LETTERS, 
    SEND_MAIL 
} from '../Actions/types'

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_LETTERS:
            return [
                ...state,
                ...action.payload
            ];
        case SEND_MAIL:
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}
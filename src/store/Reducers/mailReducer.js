import { 
    FETCH_LETTERS, 
    SEND_MAIL 
} from '../Actions/types'

export default function(state = ['55', '55'], action) {
    switch(action.type) {
        case SEND_MAIL:
            return [
                ...state,
                action.payload
            ];
            break;
        default:
            return state;
            break;
    }
}
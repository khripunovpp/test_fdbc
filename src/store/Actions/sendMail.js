import { 
    SEND_MAIL,
    SEND_ERROR
} from './types'

export default function(letter) {
    return async (dispatch) => {
        const mail = {
            action: "issue.send.test",
            letter: {
                subject: letter.subject,
                "from.name": letter.fromName,
                "from.email": letter.fromEmail,
                "to.name": letter.toName,
                "message": {
                    text: letter.message
                },
                attaches: []
            },
            sendwhen: "test",
            mca: [letter.toEmail]
        }
        const req = new Promise((resolve, reject) => {
            resolve({
                "track.id": "8888"
            })
        });
        const sentLetter = {
            ...letter,
            id: "",
            status: {
                code: "progress",
                text: "В очереди"
            }
        };
        req.then(resp=>{
            const cachedStorage = JSON.parse(localStorage.getItem('letterStorage')) || [];
            const id = "8888"
            dispatch({
                type: SEND_MAIL,
                payload: {...sentLetter, id}
            })
            const newStorage = [
                ...cachedStorage,
                {
                    ...sentLetter,
                    id
                }
            ]
            localStorage.setItem('letterStorage', JSON.stringify(newStorage));
        }, err => dispatch({ type: SEND_ERROR, payload: err})).catch(err => dispatch({ type: SEND_ERROR, payload: err}))
        
    }
}
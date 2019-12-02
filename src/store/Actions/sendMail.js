import React from 'react';
import { SEND_MAIL } from './types'

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
        })
        req.then(resp=>{
            dispatch({
                type: SEND_MAIL,
                payload: resp['track.id']
            })
        })
        
    }
}
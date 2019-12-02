import React from 'react';
import { FETCH_LETTERS } from './types'
import { resolve } from 'dns';

export default function() {
    return async (dispatch, getState) => {
        const state = getState();
        state.lettersIDs.forEach(element => {
            const req = new Promise((resolve, reject) => {
                resolve({
                    id: 56,
                    excerpt: "Тема письма, которая не поместится в эту строку, потому что слишком длинная",
                    date: "2012-06-02T00:00:00.000Z",
                    status: {
                        code: "ok",
                        text: "Отправлено"
                    }
                })
            })
        });
        const letter = {
            id: 56,
            excerpt: "Тема письма, которая не поместится в эту строку, потому что слишком длинная",
            date: "2012-06-02T00:00:00.000Z",
            status: {
                code: "ok",
                text: "Отправлено"
            }
        }
        dispatch({
            type: FETCH_LETTERS,
            payload: letter
        })
        return letter
    }
}
import React, { Component } from "react";
import Moment from 'react-moment';

const NotificationTable = ({notifications}) => {
    return (
        <div className="notifications__table">
            <div className="notifications__head">
                <span className="notifications__date">Дата</span>
                <span className="notifications__excerpt">Тема</span>
                <span className="notifications__status">Статус</span>
            </div>
            <ul className="notifications__list">
                {notifications.map(notification=>(
                    <li className={`notifications__item notifications__item--${notification.status.code}`} key={notification.id}>
                        <span className="notifications__date"><Moment format="DD MMMM">{notification.date}</Moment></span>
                        <span className="notifications__excerpt">{notification.excerpt}</span>
                        <span className="notifications__status">{notification.status.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

class Notification extends Component {
    state = {
        notifications: [
            {
                id: 56,
                excerpt: "Тема письма, которая не поместится в эту строку, потому что слишком длинная",
                date: "2012-06-02T00:00:00.000Z",
                status: {
                    code: "ok",
                    text: "Отправлено"
                }
            },{
                id: 53,
                excerpt: "Тема письма, которая не поместится в эту строку, потому что слишком длинная",
                date: "2012-06-02T00:00:00.000Z",
                status: {
                    code: "progress",
                    text: "В очереди"
                }
            },{
                id: 11,
                excerpt: "Тема письма, которая не поместится в эту строку, потому что слишком длинная",
                date: "2012-06-02T00:00:00.000Z",
                status: {
                    code: "error",
                    text: "Ошибка"
                }
            }
        ]
    }
    
    render () {
        return (
            <div className="notifications">
                <h2 className="notifications__title">Отправленные сообщения</h2>
                {this.state.notifications.length > 0 
                    ? <NotificationTable notifications={this.state.notifications} />
                    : <p className="notifications__empty">Сообщения ещё не отправлялись</p> }
            </div>
        )
    }
}

export default Notification;
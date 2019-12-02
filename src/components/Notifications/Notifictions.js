import React, { Component } from "react";
import Moment from 'react-moment';
import { connect } from 'react-redux';
import fetchLetters from '../../store/Actions/fetchLetters'

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
        notifications: []
    }
    
    render () {
        console.log(this.props.ids)
        return (
            <div className="notifications">
                <h2 className="notifications__title">Отправленные сообщения</h2>
                {this.state.notifications.length > 0 
                    ? <NotificationTable notifications={this.state.notifications} />
                    : <p className="notifications__empty">Сообщения ещё не отправлялись</p> }
            </div>
        )
    }
    componentDidMount () {
        this.props.fetchLetters().then(letters=>{
            this.setState({
                notifications: [
                    ...this.state.notifications,
                    letters
                ]
            })
        })
    }
}

const mapSateToProps = (state) => ({
    ids: [...state.lettersIDs]
});

const mapDispatchToProps = {
    fetchLetters: () => fetchLetters()
};

export default connect(mapSateToProps, mapDispatchToProps)(Notification);
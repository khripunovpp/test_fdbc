import React, { Component } from "react";
import Moment from 'react-moment';
import { connect } from 'react-redux';
import fetchLetters from '../../store/Actions/fetchLetters'

const NotificationTable = ({letters}) => {
    console.log(letters);
    return (
        <div className="notifications__table">
            <div className="notifications__head">
                <span className="notifications__date">Дата</span>
                <span className="notifications__excerpt">Тема</span>
                <span className="notifications__status">Статус</span>
            </div>
            <ul className="notifications__list">
                {letters.map((letter, i)=>{
                return (
                    <li className={`notifications__item notifications__item--${letter.status.code}`} key={i}>
                        <span className="notifications__date"><Moment format="DD MMMM">{letter.date}</Moment></span>
                        <span className="notifications__excerpt">{letter.subject}</span>
                        <span className="notifications__status">{letter.status.text}</span>
                    </li>
                )})}
            </ul>
        </div>
    )
}

class Notification extends Component {    
    render () {
        console.log(this.props.letters)
        return (
            <div className="notifications">
                <h2 className="notifications__title">Отправленные сообщения</h2>
                {this.props.letters.length > 0 
                    ? <NotificationTable letters={this.props.letters} />
                    : <p className="notifications__empty">Сообщения ещё не отправлялись</p> }
            </div>
        )
    }
    componentDidMount() {
        this.props.fetchLetters()
    }
}

const mapSateToProps = (state) => ({
    letters: [...state.letters]
});

const mapDispatchToProps = {
    fetchLetters
};

export default connect(mapSateToProps, mapDispatchToProps)(Notification);
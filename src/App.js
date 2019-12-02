import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <img src={logo} className="header__logo" alt="logo" />
        </div>
      </header>
      <main className="main">
        <div className="container">
          <section className="main__top panel">
            <div className="mail">
              <h1 className="mail__title">Отправлялка сообщений</h1>
              <article className="mail__form form">
                <div className="form__group">
                  <p className="form__label">От кого</p>
                  <div className="form__field">
                    <input type="text" name="from-name" placeholder="Имя" /> 
                  </div>
                  <div className="form__field">
                    <input type="email" name="from-email" placeholder="Email" /> 
                  </div>
                </div>
                <div className="form__group">
                  <p className="form__label">Кому</p>
                  <div className="form__field">
                    <input type="text" name="to-name" placeholder="Имя" /> 
                  </div>
                  <div className="form__field">
                    <input type="email" name="to-email" placeholder="Email" /> 
                  </div>
                </div>
                <div className="form__group">
                  <p className="form__label">Тема письма</p>
                  <div className="form__field">
                    <input type="text" name="subject" /> 
                  </div>
                </div>
                <div className="form__group">
                  <p className="form__label">Сообщение</p>
                  <div className="form__field">
                    <textarea name="msg" /> 
                  </div>
                </div>
                <div className="form__filepicker filepicker">
                  <ul className="filepicker__uploads">
                    <li className="file">
                      <i className="file__icon i i-attach"></i>
                      <span className="file__name">Бесконечно длинное название файла</span>
                      <span className="file__type">.jpg</span>
                      <button className="file__delete"><i className="i i-delete"></i> Удалить</button>
                    </li>
                    <li className="file">
                      <i className="file__icon i i-attach"></i>
                      <span className="file__name">Безымянный 2</span>
                      <span className="file__type">.jpg</span>
                      <button className="file__delete"><i className="i i-delete"></i> Удалить</button>
                    </li>
                    <li className="file">
                      <i className="file__icon i i-attach"></i>
                      <span className="file__name">Безымянный 3</span>
                      <span className="file__type">.jpg</span>
                      <button className="file__delete"><i className="i i-delete"></i> Удалить</button>
                    </li>
                  </ul>
                  <button className="filepicker__btn">
                    <i className="i i-attach"></i>
                    Прикрепить файл
                  </button>
                </div> 
                <div className="form__footer">              
                  <button className="form__submit btn">Отправить</button>
                </div>
              </article>
            </div>
          </section>
          <aside className="main__bottom notifications">
            <h2 className="notifications__title">Отправленные сообщения</h2>
            <p className="notifications__empty">Сообщения ещё не отправлялись</p>
            <div className="notifications__table">
              <div className="notifications__head">
                  <span className="notifications__date">Дата</span>
                  <span className="notifications__excerpt">Тема</span>
                  <span className="notifications__status">Статус</span>
              </div>
              <ul className="notifications__list">
                <li className="notifications__item notifications__item--send-ok">
                  <span className="notifications__date">30 сентября</span>
                  <span className="notifications__excerpt">Тема письма, которая не поместится в эту строку, потому что слишком длинная</span>
                  <span className="notifications__status">Отправлено</span>
                </li>
                <li className="notifications__item notifications__item--in-progress">
                  <span className="notifications__date">30 сентября</span>
                  <span className="notifications__excerpt">Тема письма, которая не поместится в эту строку, потому что слишком длинная</span>
                  <span className="notifications__status">В очереди</span>
                </li>
                <li className="notifications__item notifications__item--has-error">
                  <span className="notifications__date">30 сентября</span>
                  <span className="notifications__excerpt">Тема письма, которая не поместится в эту строку, потому что слишком длинная</span>
                  <span className="notifications__status">Ошибка</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>  
      </main>
    </div>
  );
}

export default App;

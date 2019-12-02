import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Panel from './components/Panel/Panel';
import Letter from './components/Letter/Letter';
import Notification from './components/Notifications/Notifictions';

function App() {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <div className="container">
          <Panel classes="main__top">
            <Letter classes="mail" />
          </Panel>
          <aside className="main__bottom">
            <Notification />
          </aside>
        </div>  
      </main>
    </div>
  );
}

export default App;

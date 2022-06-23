import './App.css';
import React from 'react';
import Home from './components/Home/Home';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  return (
    <div>
      <Home />
      <MessengerCustomerChat
        pageId="100665115792644"
        appId="696869337952772" />
    </div>
  );
}

export default App;

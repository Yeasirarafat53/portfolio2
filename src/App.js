import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Loading from './components/Loading/Loading';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },3000)
  })

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Home />
          <MessengerCustomerChat
            pageId="100665115792644"
            appId="696869337952772"
          />
        </div>
      )}
    </div>
  );
}

export default App;

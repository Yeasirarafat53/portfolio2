import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Bars } from 'react-loader-spinner';


const Loading = () => {
    return (
      <div className="loading">
        <div className="loader">
          <span class="loader-inner-1"></span>
          <span class="loader-inner-2"></span>
          <span class="loader-inner-3"></span>
          <span class="loader-inner-4"></span>
        </div>
      </div>
    );
};

export default Loading;

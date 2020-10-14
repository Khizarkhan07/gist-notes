import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {UserProvider} from "./contexts/userContext";
import {GistsProvider} from "./contexts/gistContext";

ReactDOM.render(

      <UserProvider>
          <GistsProvider>
              <App />
          </GistsProvider>
      </UserProvider>

  ,
  document.getElementById('root')
);



import React from 'react';
import {Route, Switch} from 'react-router-dom'

import  HomePage  from '../pages/home-page'
import Loader from '../loader/loader'


function App() {
  return (
    <Switch>
      <Route
        path='/'
        component = {HomePage}
        exact />

      <Route
        path='/advantage'
        component={Loader}/>  

    </Switch>
  );
}

export default App;

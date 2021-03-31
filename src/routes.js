import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

const Page404 = () => <h1>Página 404</h1>;

export default function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" component={Home} exact />
            <Route component={Page404} />
         </Switch>
      </BrowserRouter>
   );
}

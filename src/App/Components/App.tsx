import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import BoughtItems from './BoughtItems/BoughtItems';
import ReceivedItems from './ReceivedItems/ReceivedItems';

const App: React.FC = (): JSX.Element => {
    return (
        <Router>
            <Switch>
                <Route exact path='/list' component={BoughtItems}/>
                <Route exact path='/received' component={ReceivedItems}/>
                <Redirect from='/' to='/list'/>
            </Switch>
        </Router>
    );
}

export default App;

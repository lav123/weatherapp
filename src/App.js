import React from 'react';
import {Route,withRouter} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
class  App extends React.Component{
  render() {
    return (
  <div>
   <Route  exact path="/" component={Login}/>
   <Route  exact path="/register" component={Register}/>
   <Route  exact path="/dashboard" component={Dashboard}/>
  </div>
    );
  }
}
export default withRouter(App);

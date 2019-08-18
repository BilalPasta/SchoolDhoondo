// import React from "react";
// import ReactDOM from "react-dom";
// // import * as serviceWorker from './serviceWorker';
// import Routes from './Routers'
// // import { Router, browserHistory } from 'react-router';

// // core components
// import Admin from "layouts/Admin.jsx";
// // import RTL from "layouts/RTL.jsx";
// import Login from './adminauthentication/login';
// import "assets/css/material-dashboard-react.css?v=1.6.0";
// import history from './history.js'


// ReactDOM.render(
//   <Routes/>
//   ,
//   document.getElementById("root") );

//   // serviceWorker.unregister();






import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "./layouts/Admin.jsx";
// import RTL from "layouts/RTL.jsx";
import SignUp from './adminauthentication/signup';
import "./assets/css/material-dashboard-react.css?v=1.6.0";
import Login from './adminauthentication/login';
const hist = createBrowserHistory();


class RouterCompont extends React.Component{
  constructor(props){
    super(props);
    this.state={loginuser:''};
    this.handleUser=this.handleUser.bind(this);
  }

  handleUser(user){
this.setState({...this.state,loginuser:user})

  }
  render(){
return(
<Router history={hist}>
  <Switch>
    <Route exact path="/" render={(routesProps) => <Login {...routesProps}  history={hist} handleUser={this.handleUser}/>}/>
    
    <Route exact path="/signup" render={(routesProps) => <SignUp {...routesProps}  history={hist} />}/>
    <Route  path="/admin" render={(routesProps) => <Admin {...routesProps}  history={hist} loginuser={this.state.loginuser}/>}/>
    


    {/* <Route path="/rtl" component={RTL} /> */}
    <Redirect from="/admin" to="/admin/dashboard" />
  </Switch>
</Router>)
  }
}




ReactDOM.render(<RouterCompont/>
  ,
  document.getElementById("root")
)

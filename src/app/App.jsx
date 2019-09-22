import React  from "react";

import ProjectsPage from "./project/index";
import ViewPostPage from "./project/ViewPost";

import "./App.css";





import { connect } from "react-redux";
import { Route, withRouter, Switch } from "react-router-dom";
import { lifecycle, compose } from "recompose";





class App extends React.Component {
  render() {
   
    return (    
             <Switch>
                  <Route exact path={"/"} component={ProjectsPage} />
                  <Route path={"/post/:slug"} component={ViewPostPage} />
              </Switch>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
 
});

const withPageLifecyle = lifecycle({
 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(compose(withPageLifecyle)(App)));

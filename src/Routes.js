import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

import Layout from './Components/Layout/MainLayout';
import ComingSoon from './Components/ComingSoon';
import AboutUs from "./Components/AboutUs";

const Routes = ({ location }) => {
    // if (window.location.pathname === "/") {
    //     return (
    //       <Switch>
    //         <Route exact path="/" render={() => (
    //           <ComingSoon />
    //         )}/>
    //         <Route exact path="/about-us" render={() => (
    //           <AboutUs />
    //         )}/>
    //       </Switch>
    //     );
    // }
    return (
      <Switch>
        {/* <Route exact component={ComingSoon} path="/" /> */}
        <Route exact path="/" render={() => (
          <ComingSoon />
        )}/>
        <Route exact path="/about-us" render={() => (
          <Layout>
            <AboutUs />
          </Layout>
        )}/>
      </Switch>
    );
};

const Wrapper = styled.div`
  .fade-appear {
    opacity: 0.01;
  }

  .fade-appear.fade-appear-active {
    opacity: 1;
    transition: opacity 500ms linear;
  }

  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms linear;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 500ms linear;
  }

  .fade-exit-done {
    opacity: 0;
  }
`;

export default withRouter(Routes);
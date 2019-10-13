import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
const RouterLinks = () => {
    return (
        <Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />   
       </Fragment>
    )

}

export  default RouterLinks;
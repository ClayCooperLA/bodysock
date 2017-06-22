import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Navigation extends React.Component {

    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="lockup">
                        <IndexLink to="/" className="logo" activeClassName="selected"><h1>BodySock</h1></IndexLink>
                        <h3>Greensock powered Bodymovin</h3>
                    </div>
                    <div className="links">
                        <Link to="/example1" activeClassName="selected">Example 1</Link>
                        <Link to="/example2" activeClassName="selected">Example 2</Link>
                        <Link to="/example3" activeClassName="selected">Example 3</Link>
                    {/* <Link to="/example4" activeClassName="selected">Example 4</Link>*/}
                        {/*<a href="/example1">Example 1</a>
                        <a href="/example2">Example 2</a>
                        <a href="/example3">Example 3</a>*/}
                    </div>
                </div>
            </div>
        );
    }

}

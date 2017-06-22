import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Application from 'components/Application';
import Home from 'components/Home';
import Example1 from 'components/Example1';
import Example2 from 'components/Example2';
import Example3 from 'components/Example3';
import Example4 from 'components/Example4';
import NotFound from 'components/NotFound';

export default (
    <Route path="/" component={Application}>
        <IndexRoute component={Home} />
        <Route path="example1" component={Example1} />
        <Route path="example2" component={Example2} />
        <Route path="example3" component={Example3} />
        <Route path="example4" component={Example4} />
        <Route path="*" component={NotFound} isNotFound />
    </Route>
);

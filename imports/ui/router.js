import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { MainLayout } from '/imports/ui/layouts';
import { TaskPage } from '/imports/ui/pages';
import { SubmitDataPage } from '/imports/ui/pages';
import { SubmitDataUniformPage } from '/imports/ui/pages';
import { ResultPage } from '/imports/ui/pages';

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={TaskPage} />
        <Route path="/submit-data" component={SubmitDataPage} />
        <Route path="/submit-data-uniforms" component={SubmitDataUniformPage} />
        <Route path="/result/:id" component={ResultPage} />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});

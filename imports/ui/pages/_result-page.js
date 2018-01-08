import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Submission from '../../api/submission/model/_submission';

class ResultPage extends Component {
  constructor(props) {
    super(props);
  }

  renderIfLikePizza(flag){
    if(flag){
      return (
          <div className="fieldset">
            <div className="fieldset-content">
              <p><strong>I Love Pizza</strong></p>
            </div>
          </div>
      )
    }
    else {
      return null;
    }
  }

  render() {
    return (
      <div>
        {this.props.record &&
        <div>
          <div id="page-header">
            <div className="content">
              <div className="content-block">
                <div className="page-title"><h1>Form</h1></div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="section">
              <div className="section-body">
                <div className="section-body-block content">
                  <form >
                    <div className="fieldset">
                      <div className="fieldset-content">
                        <p><strong>First Name: </strong> {this.props.record.firstName}</p>
                      </div>
                    </div>
                    <div className="fieldset">
                      <div className="fieldset-content">
                        <p><strong>Last Name: </strong>{this.props.record.lastName} </p>
                      </div>
                    </div>
                    <div className="fieldset">
                      <div className="fieldset-content">
                        <p><strong>Age: </strong>{this.props.record.age}</p>
                      </div>
                    </div>
                      {this.renderIfLikePizza(this.props.record.likePizza)}
                  </form>
                </div>
              </div>
            </div>
          </div> </div>}
      </div>
    );
  }
}

export default createContainer((props) => {
  const id = props.params.id;
  Meteor.subscribe('submittedRecord', id);
  return {
    record: Submission.findOne({ _id: id })
  };
}, ResultPage);

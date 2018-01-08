import React, { Component } from 'react';
import { AutoForm } from 'uniforms-semantic';
import SubmissionSchema from './../../api/submission/model/submissionSchema';
import { Grid, Segment, Header } from 'semantic-ui-react';

class SubmitDataUniformPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    Meteor.call('Submit.data', data, (err, res) => {
      if (err) {
        return null;
      }
      this.props.router.push(`/result/${res}`);
    });
  }

  render() {
    return (
      <Grid verticalAlign="middle" centered className="app-container">
        <Grid.Row>
          <Header as="h2">Form</Header>
        </Grid.Row>
        <Grid.Row>
          <Segment>
            <Grid.Column>
              <AutoForm
                schema={SubmissionSchema}
                onSubmit={this.handleSubmit}
              />
            </Grid.Column>
          </Segment>
        </Grid.Row>
      </Grid>
    );
  }
}


export default SubmitDataUniformPage;

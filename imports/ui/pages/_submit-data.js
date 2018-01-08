import React, { Component } from 'react';


class SubmitDataPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formState: {
        firstName: '',
        lastName: '',
        age: 0,
        likePizza: false
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck =  this.handleCheck.bind(this)
  }

  componentDidMount() {
  }

  handleChange(e) {
    const formState = this.state.formState;
    formState[e.target.name] = e.target.value;
    this.setState({ formState });
  }


  handleCheck(e) {
      const formState = this.state.formState;
      formState[e.target.name] = e.target.checked;
      this.setState({ formState });
  }

  handleSubmit(e) {
    if (e) {
      e.preventDefault();
    }

    const { firstName, lastName, age, likePizza } = this.state.formState;
    const ageAsNumber = parseInt(age);

    Meteor.call('Submit.data', {
      firstName,
      lastName,
      age:ageAsNumber,
      likePizza
    }, (err, res) => {
      if (err) {
        alert(`error${err}`);
        return null;
      }
      this.props.router.push(`/result/${res}`);
    });
  }

  render() {
    const { firstName, lastName, age, likePizza } = this.state.formState;

    return (
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
                <form>
                  <div className="fieldset">
                    <div className="fieldset-content">
                      <input name="firstName" type="text" placeholder="First Name*" value={firstName} onChange={this.handleChange.bind(this)} />
                    </div>
                  </div>
                  <div className="fieldset">
                    <div className="fieldset-content">
                      <input name="lastName" type="text" placeholder="Last Name" value={lastName} onChange={this.handleChange.bind(this)} />
                    </div>
                  </div>
                  <div className="fieldset">
                    <div className="fieldset-content">
                      <input name="age" type="number" placeholder="Age" pattern="[0-9]*" value={age} onChange={this.handleChange.bind(this)} />
                    </div>
                  </div>
                  <div className="fieldset">
                    <label className="checkbox">
                      <input name="likePizza" type="checkbox" value={likePizza} onChange={this.handleCheck.bind(this)} />
                      <span className="checkbox-toggle" />
                      <p className="checkbox-inner-label">I like pizza.</p>
                    </label>
                  </div>
                  <div className="popup-body-block content">
                    <button type="submit" className="button button-green button-fullwidth" onClick={this.handleSubmit}>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubmitDataPage;

/* global ValidatedMethod */

import SubmissionSchema from './../model/submissionSchema';
import Submission from './../model/_submission';

export const SubmitData = new ValidatedMethod({
  name: 'Submit.data',

  validate: SubmissionSchema.validator(),
  run({ firstName, lastName, age, likePizza }) {
    this.unblock();

    if (Meteor.isServer) {
      const doc = {
        firstName,
        lastName,
        age,
        likePizza
      };
      console.log(doc);
      const id = Submission.insert(doc);
      return id;
    }
  }
});

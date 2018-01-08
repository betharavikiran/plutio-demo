import SimpleSchema from 'simpl-schema';

const SubmissionSchema = new SimpleSchema({
  firstName: {
    type: String,
    min: 5,
    max: 15,
  },
  lastName: {
    type: String,
    max: 15,
    optional: true
  },
  age: {
    type: Number,
    min: 0,
    max: 100
  },
  likePizza: {
    type: Boolean,
    defaultValue: false,
  }
});


export default SubmissionSchema;


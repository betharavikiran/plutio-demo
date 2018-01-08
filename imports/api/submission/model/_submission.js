import { Mongo } from 'meteor/mongo';
import SubmissionSchema from './submissionSchema';

const Submission = new Mongo.Collection('Submission');

Submission.attachSchema(SubmissionSchema);

export default Submission;


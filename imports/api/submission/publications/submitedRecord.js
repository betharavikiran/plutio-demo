import { Meteor } from 'meteor/meteor';
import Submission from './../model/_submission';

Meteor.publish('submittedRecord', id => Submission.find({ _id: id }));

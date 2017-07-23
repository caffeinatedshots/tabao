import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Hawkers = new Mongo.Collection('hawkers');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('allHawkers', function() {
  	return Hawkers.find();
  });
};
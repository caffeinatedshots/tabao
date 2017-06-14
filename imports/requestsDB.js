import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Requests = new Mongo.Collection('requests');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('requests', function() {
    return Requests.find();
  });
};
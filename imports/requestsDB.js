import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Requests = new Mongo.Collection('requests');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('allRequests', function() {
  	return Requests.find();
  });

  Meteor.publish('userRequests', function(username) {
  	return Requests.find({"Requestor": username});
  });

  Meteor.publish('itemRequest', function(requestId){
  	return Requests.find({"_id": requestId});
  });
};
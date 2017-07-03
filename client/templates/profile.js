import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Requests } from '../../imports/requestsDB.js';

import './profile.html';

Template.profile.onCreated(function() {
	Meteor.subscribe("allRequests");
});



Template.profile.helpers({
	user(){
		var username = FlowRouter.getParam("username");
		Meteor.call('getUser', username, function(error, result){
			Session.set("user", result);
		});
		return Session.get("user");
	},

	userSince(){
		var username = FlowRouter.getParam("username");
		Meteor.call('getUser', username, function(error, result){
			Session.set("user", result);
		});
		return moment(Session.get("user").createdAt).fromNow();
	},

	allRequests(){
		return Requests.find({"Requestor":FlowRouter.getParam("username")});
	},

	allDeliveries(){
		return Requests.find({"Deliverer":FlowRouter.getParam("username")});
	},

	equals(item1, item2){
		return item1 == item2;
	}
});
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

	allRequests(){
		return Requests.find();
	},

	equals(item1, item2){
		return item1 == item2;
	}
});
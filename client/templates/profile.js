import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Requests } from '../../imports/requestsDB.js';

import './profile.html';

Template.profile.onCreated(function() {
	var username = FlowRouter.getParam("username");
	Meteor.subscribe("userRequests", username);
});



Template.profile.helpers({
	user(){
		var username = FlowRouter.getParam("username");
		Meteor.call('getUser', username, function(error, result){
			Session.set("user", result);
		});
		return Session.get("user");
	},

	ownRequests(){
		return Requests.find();
	}
});
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './profile.html';

Template.profile.onCreated(function() {
});

Template.profile.helpers({
	user(){
		var username = FlowRouter.getParam("username");
		Meteor.call('getUser', username, function(error, result){
			Session.set("user", result);
		});
		return Session.get("user");
	}
});
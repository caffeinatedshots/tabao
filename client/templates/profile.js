import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './profile.html';

Template.profile.onCreated(function() {
});

Template.profile.helpers({
	username(){
		var username = FlowRouter.getParam("username");
		Meteor.call('userExists', username, function(error, result){
			Session.set("validUser", result);
		});
		if (Session.get("validUser")){
			return username;
		}
		else{
			return null;
		}
	}
});
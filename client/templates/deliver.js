import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Requests } from '../../imports/requestsDB.js';

import './deliver.html';

Template.deliver.onCreated(function() {
	Meteor.subscribe('allRequests');
});

Template.deliver.events({
	
});

Template.deliver.helpers({
	requests(){
		return Requests.find();
	},

	getHawkerName(postal){
		Meteor.call('getHawkerName', parseInt(postal), function(error, result){
			Session.set('hawkerName', result);
		});
		return Session.get('hawkerName');
	}
});
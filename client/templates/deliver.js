import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Requests } from '../../imports/requestsDB.js';
import { Hawkers } from '../../imports/hawkersDB.js';

import './deliver.html';

Template.deliver.onCreated(function() {
	Meteor.subscribe('allRequests', function onReady(){
		Session.set('requestsLoaded', true);
	});
	Meteor.subscribe("allHawkers");
});

Template.deliver.events({
	
});

Template.deliver.helpers({
	requestsLoaded(){
		return Session.get('requestsLoaded');
	},

	requests(){
		return Requests.find({Deliverer: null,
			Requestor: {$ne:Meteor.user().username},
			Completed: false});
	},

	getHawkerName(postal){
		return Hawkers.findOne({_id:parseInt(postal)}).Name;
	},

	and(condition1, condition2){
		return condition1 && condition2;
	},

	equals(item1, item2){
		return item1 == item2;
	},

	or(condition1, condition2){
		return condition1 || condition2;
	}
});
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Requests } from '../../imports/requestsDB.js';
import { Hawkers } from '../../imports/hawkersDB.js';

import './deliver.html';

Template.deliver.onCreated(function() {
	Meteor.subscribe('allRequests');
	Meteor.subscribe("allHawkers");
});

Template.deliver.events({
	
});

Template.deliver.helpers({
	requests(){
		return Requests.find();
	},

	getHawkerName(postal){
		return Hawkers.findOne({_id:parseInt(postal)}).Name;
	}
});
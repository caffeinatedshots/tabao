import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
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
	}
});
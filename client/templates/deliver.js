import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Requests } from '../../imports/requestsDB.js';

import './deliver.html';

Template.deliver.onCreated(function() {
	Meteor.subscribe('requests');
});

Template.deliver.helpers({
	requests(){
		return Requests.find();
	}
});
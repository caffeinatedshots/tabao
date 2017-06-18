import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Requests } from '../../imports/requestsDB.js';

import './viewRequest.html';

Template.viewRequest.onCreated(function() {
	Meteor.subscribe("requests");
});

Template.viewRequest.helpers({
	request(){
		var requestId = FlowRouter.getParam("requestId");
		return Requests.findOne({"_id": requestId});
	},
});
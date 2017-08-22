import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Requests } from '../../imports/requestsDB.js';
import { Hawkers } from '../../imports/hawkersDB.js';

import './admin.html';


Template.admin.onCreated(function() {
	Meteor.subscribe("allUsers", function onReady(){
		Session.set("usersLoaded", true);
	});
	Meteor.subscribe("allRequests", function onReady(){
		Session.set("requestsLoaded", true);
	});
	Meteor.subscribe("allHawkers");

});

Template.admin.helpers({
	usersLoaded(){
		return Session.get("usersLoaded");
	},

	requestsLoaded(){
		return Session.get("requestsLoaded");
	},
	
	allUsers(){
		return Meteor.users.find();
	},

	momentFormat(date, formatString){
		return moment(date).format(formatString);
	},

	allRequests(){
		return Requests.find();
	},

	getHawkerName(postal){
		return Hawkers.findOne({_id:parseInt(postal)}).Name;
	},

	totalRequests(username){
		return Requests.find({'Requestor':username}).count();
	},

	totalDeliveries(username){
		return Requests.find({'Deliverer':username}).count();
	}
});

Template.admin.events({
	"click #deleteRequest"(event, template){
		if (confirm("Confirm delete request for " + this.itemName + " ?")){
			Meteor.call('deleteRequest', this._id, function(err){
				if (err){
					sAlert.error(err.reason);
				}
			});
			sAlert.success("Request has been deleted");
		};
	},
})
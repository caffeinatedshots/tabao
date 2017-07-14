import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Requests } from '../../imports/requestsDB.js';

import './admin.html';


Template.admin.onCreated(function() {
	Meteor.subscribe("allUsers");
	Meteor.subscribe("allRequests");
});

Template.admin.helpers({
	allUsers(){
		return Meteor.users.find();
	},

	momentFormat(date, formatString){
		return moment(date).format(formatString);
	},

	allRequests(){
		return Requests.find();
	}
});

Template.admin.events({
	"click #deleteRequest"(event, template){
		if (confirm("Confirm delete request for " + this.itemName + " ?")){
			Meteor.call('deleteRequest', this._id, function(err){
				if (err){
					alert(err.reason);
				}
			});
			alert("Request has been deleted");
		};
	},
})
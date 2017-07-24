import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Requests } from '../../imports/requestsDB.js';
import { Hawkers } from '../../imports/hawkersDB.js';

import './admin.html';


Template.admin.onCreated(function() {
	Meteor.subscribe("allUsers");
	Meteor.subscribe("allRequests");
	Meteor.subscribe("allHawkers");

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
	},

	getHawkerName(postal){
		return Hawkers.findOne({_id:parseInt(postal)}).Name;
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
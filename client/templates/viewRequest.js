import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Requests } from '../../imports/requestsDB.js';

import './viewRequest.html';

Template.viewRequest.onCreated(function() {
	var requestId = FlowRouter.getParam("requestId");
	Meteor.subscribe("itemRequest", requestId);
});

Template.viewRequest.events({
	"click #delete"(event, template){
		if (confirm("Confirm delete request for " + this.itemName + " ?")){
			Meteor.call('deleteRequest', this._id, function(err){
				if (err){
					alert(err.reason);
				}
			});
			alert("Request has been deleted");
			history.back();
		};
	}
});

Template.viewRequest.helpers({
	request(){
		var requestId = FlowRouter.getParam("requestId");
		return Requests.findOne({"_id":requestId});
	},

	equals(item1, item2){
		return item1 == item2;
	}
});
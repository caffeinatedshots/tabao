import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Requests } from '../../imports/requestsDB.js';

import './profile.html';

Template.profile.onCreated(function() {
	Meteor.subscribe("allRequests");
});



Template.profile.helpers({
	user(){
		var username = FlowRouter.getParam("username");
		Meteor.call('getUser', username, function(error, result){
			Session.set("user", result);
		});
		return Session.get("user");
	},

	userSince(){
		var username = FlowRouter.getParam("username");
		Meteor.call('getUser', username, function(error, result){
			Session.set("user", result);
		});
		return moment(Session.get("user").createdAt).fromNow();
	},

	completedRequests(){
		return Requests.find({"Requestor":FlowRouter.getParam("username"), "Completed":true});
	},

	completedDeliveries(){
		return Requests.find({"Deliverer":FlowRouter.getParam("username"), "Completed":true});
	},

	currentRequests(){
		return Requests.find({"Requestor":FlowRouter.getParam("username"), "Completed":false});
	},

	currentDeliveries(){
		return Requests.find({"Deliverer":FlowRouter.getParam("username"), "Completed":false});
	},

	equals(item1, item2){
		return item1 == item2;
	}
});

Template.profile.events({
	"click #requests"(event, template){
		if($("#requestsTable").css("display") == "block"){
			$("#requestsTable").hide();
		}
		else{
			$("#deliveriesTable").hide();
			$("#requestsTable").show();
		}
		
	},

	"click #deliveries"(event, template){
		if($("#deliveriesTable").css("display") == "block"){
			$("#deliveriesTable").hide();
		}
		else{
			$("#requestsTable").hide();
			$("#deliveriesTable").show();
		}
		
	},
})
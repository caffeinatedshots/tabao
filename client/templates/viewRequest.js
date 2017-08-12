import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Requests } from '../../imports/requestsDB.js';
import { Hawkers } from '../../imports/hawkersDB.js';

import './viewRequest.html';

Template.viewRequest.onCreated(function() {
	var requestId = FlowRouter.getParam("requestId");
	Meteor.subscribe("itemRequest", requestId);
	Meteor.subscribe("allHawkers");
});

Template.viewRequest.events({
	"click #delete"(event, template){
		if (confirm("Confirm delete request for " + this.itemName + " ?")){
			Meteor.call('deleteRequest', this._id, function(err){
				if (err){
					sAlert.error(err.reason);
				}
			});
			sAlert.info("Your request has been deleted");
			history.back();
		};
	},

	"click #deliver"(event, template){
		if (confirm("Confirm delivery for " + this.itemName + " ?")){
			Meteor.call('deliverRequest', this._id, Meteor.user().username, function(err){
				if (err){
					sAlert.error(err.reason);
				}
			});
			sAlert.success("Your delivery request has been confirmed");
		}
	},

	"click #markCompletedToggle"(event, template){
		if($("#ratingForm").css("display") == "none"){
            $("#ratingForm").css("display", "block");
            $("#markCompletedToggle").html("Cancel");
            $("#markCompletedToggle").addClass("special");
        }
        else{
        	$("#ratingForm").css("display", "none");
        	$("#markCompletedToggle").html("Mark Completed");
        	$("#markCompletedToggle").removeClass("special");
        }
	},

	"submit #ratingForm"(event, template){
		event.preventDefault();
		var rating = event.target.rating.value;
		if (rating == ""){
			sAlert.error("Please rate your deliverer");
		}
		else{
			if (confirm("Comfirm delivery for " + this.itemName + " is completed with " + rating + " stars?")){
			Meteor.call('markCompleted', this._id, rating, function(err){
				if (err){
					sAlert.error(err.reason);
				}
			});
			sAlert.success("Your delivery is now completed");
			}
		}
		
	},

	"submit #newComment"(event, template){
		event.preventDefault();
		var newComment = event.target.comment.value;
		Meteor.call('addComment', this._id, Meteor.user().username, newComment, function(err){
			if (err){
				sAlert.error(err.reason);
			}
		});
		$('#newComment').trigger('reset');
	}
});

Template.viewRequest.helpers({
	request(){
		var requestId = FlowRouter.getParam("requestId");
		return Requests.findOne({"_id":requestId});
	},

	getHawkerName(postal){
		return Hawkers.findOne({_id:parseInt(postal)}).Name;
	},

	mapLink(fromLocation, toLocation){
		return "http://maps.google.com/maps?saddr=" + fromLocation + "&daddr=" + toLocation
	},

	momentFormat(date, formatString){
		if (formatString == "fromNow"){
			return moment(date).fromNow();
		}
		else{
			return moment(date).format(formatString);
		}
		
	},

	equals(item1, item2){
		return item1 == item2;
	},

	or(condition1, condition2){
		return condition1 || condition2;
	},

	and(condition1, condition2){
		return condition1 && condition2;
	}
});
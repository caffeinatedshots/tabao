import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Requests } from '../../imports/requestsDB.js';

import './admin.html';


Template.admin.onCreated(function() {
	Meteor.subscribe("allUsers");
});

Template.admin.helpers({
	allUsers(){
		console.log(Meteor.users.find());
		return Meteor.users.find();
	},

	momentFormat(date, formatString){
		return moment(date).format(formatString);
	}
});
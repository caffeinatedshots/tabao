import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Requests } from '../imports/requestsDB.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
	'addRequest'(itemName, fromLocation, fromStall, toLocation, price, remarks) {

		Requests.insert({
			UserID: Meteor.userId(),
			User: Meteor.user().username,
			Date: new Date(),
			itemName: itemName,
			fromLocation: fromLocation,
			fromStall: fromStall,
			toLocation: toLocation,
			Price: price,
			Remarks: remarks
		});
  },
});
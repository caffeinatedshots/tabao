import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Requests } from '../imports/requestsDB.js';
import { Accounts } from 'meteor/accounts-base';

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

  userExists(username){
  	return Accounts.findUserByUsername(username) != null;
  }
});
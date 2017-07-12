import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Requests } from '../imports/requestsDB.js';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
	Meteor.publish('allUsers', function() {
  		return Meteor.users.find();
  });
});

Meteor.methods({
	addRequest(itemName, fromLocation, fromStall, toLocation, price, remarks, requestor) {

		Requests.insert({
			UserID: Meteor.userId(),
			User: Meteor.user().username,
			Date: new Date(),
			itemName: itemName,
			fromLocation: fromLocation,
			fromStall: fromStall,
			toLocation: toLocation,
			Price: price,
			Remarks: remarks,
			Requestor: requestor
		});
  },

  deleteRequest(requestId){
  		Requests.remove({"_id": requestId});
  },

  deliverRequest(requestId, username){
  		Requests.update(requestId, {
  			$set : {Deliverer: username}
  		});
  },

  getUser(username){
  	return Accounts.findUserByUsername(username);
  },
});
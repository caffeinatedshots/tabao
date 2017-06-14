import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

 
import './request.html';

Template.request.events({
  'submit .new-request'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const itemName = event.target.itemName.value;
    const fromLocation = event.target.fromLocation.value;
    const fromStall = event.target.fromStall.value;
    const toLocation = event.target.toLocation.value;
    const price = event.target.price.value;
    const remarks = event.target.remarks.value;

    Meteor.call('addRequest', itemName, fromLocation, fromStall, toLocation, price, remarks);

    // Clear form
    alert("Request Submitted")
  },
});
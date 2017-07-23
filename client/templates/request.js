import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Hawkers } from '../../imports/hawkersDB.js';
 
import './request.html';

Template.request.onCreated(function() {
    Meteor.subscribe("allHawkers");
});

Template.request.events({
  'submit .new-request'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const itemName = event.target.itemName.value;
    const fromLocation = event.target.fromLocation.value;
    const fromStall = event.target.fromStall.value;
    const toLocation = event.target.toLocation.value;
    const price = parseFloat(event.target.price.value).toFixed(2);
    const remarks = event.target.remarks.value;
    const requestor = Meteor.user().username;

    Meteor.call('addRequest', itemName, fromLocation, fromStall, toLocation, price, remarks, requestor);

    // Clear form
    alert("Request Submitted")
  },
});

Template.request.helpers({
    allHawkers(){
        return Hawkers.find();
    }
});
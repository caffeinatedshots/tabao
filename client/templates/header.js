import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';

 
import './header.html';

Template.header.events({
  'click .logout'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    Meteor.logout();
    alert("You are now logged out");
    FlowRouter.go("/");
  },
});
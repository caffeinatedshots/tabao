import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';

 
import './header.html';

Template.header.events({
  'click #logout, click #logoutSide'(event, template) {
    // Prevent default browser form submit
    event.preventDefault();

    Meteor.logout();
    sAlert.info("You are now logged out");
    FlowRouter.go("/");
  },
});
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';

 
import './main.html';

Template.main.events({
  'submit .login'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    var username = event.target.username.value;
    var password = event.target.password.value;

    Meteor.loginWithPassword(username, password, function(err){
        if (err){
            sAlert.error(err.reason);
        }
        else{
            sAlert.success("Welcome, " + username);
            FlowRouter.go('/');
        }
    });
    
    $('.login').trigger('reset');
  },

  'submit .signup'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    var username = event.target.username.value;
    var password = event.target.password.value;

    Accounts.createUser({
            username: username,
            password: password
    }, function(err){
        if(err){
            sAlert.error(err.reason);
        }
        else{
            $('.signup').trigger('reset');
            sAlert.success("Thank you for registering with us");
            FlowRouter.go('/');
        }
    });    
    },

    'click #loginSignupToggle'(event, template){
        if($("#loginForm").css("display") == "none"){
            $("#signupForm").hide();
            $("#loginForm").show();
        }
        else{
            $("#loginForm").hide();
            $("#signupForm").show();
        }
    },

    'click #logout'(event, template) {
    // Prevent default browser form submit
    event.preventDefault();

    Meteor.logout();
    sAlert.info("You are now logged out");
    FlowRouter.go("/");
  },


  });
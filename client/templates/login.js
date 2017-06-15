import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';

 
import './login.html';

Template.login.events({
  'submit .login'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    var username = event.target.username.value;
    var password = event.target.password.value;

    Meteor.loginWithPassword(username, password, function(err){
        if (err){
            alert(err.reason);
        }
        else{
            alert("You are now logged in");
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
            alert(err.reason);
        }
        else{
            $('.signup').trigger('reset');
            alert("Thank you for registering with us");
            FlowRouter.go('/');
        }
    });
  },
});
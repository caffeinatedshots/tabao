import { Meteor } from 'meteor/meteor';
import '../imports/startup/accounts-config.js';
import './app.html';

Meteor.startup(function(){
	sAlert.config({
		effect: 'slide',
		postiion: 'top-right',
		timeout: 3000,
		html: false,
		onRouteClose: false,
		stack: true,
		offset: 80,
		beep: false,
		onClose: _.noop
	});
});
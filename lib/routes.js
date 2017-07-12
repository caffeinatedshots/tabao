FlowRouter.route( '/', {
  action: function() {
    BlazeLayout.render( 'content', {body: 'main' } ); 
  },
  name: 'main'
});

FlowRouter.route( '/login', {
  action: function() {
    BlazeLayout.render( 'content', {body: 'login' } ); 
  },
  name: 'login'
});

FlowRouter.route( '/about', {
  action: function() {
    BlazeLayout.render( 'content', {body: 'about' } ); 
  },
  name: 'about'

});

FlowRouter.route( '/request', {
  action: function(){
  	if (Meteor.userId()){
  		BlazeLayout.render('content', {body: 'request'});
  	}
  	else{
  		BlazeLayout.render('content', {body: 'unauthorised'});
  	}	
  },
  name: 'request',
});

FlowRouter.route( '/deliver', {
  action: function(){
  	if (Meteor.userId()){
  		BlazeLayout.render('content', {body: 'deliver'});
  	}
  	else{
  		BlazeLayout.render('content', {body: 'unauthorised'});
  	}	
  },
  name: 'deliver'
});

FlowRouter.route( '/profile/:username', {
  action: function(){
  	BlazeLayout.render('content', {body: 'profile'});
  },
  name: 'profile'
});

FlowRouter.route( '/viewRequest/:requestId', {
  action: function(){
  	if (Meteor.userId()){
  		BlazeLayout.render('content', {body: 'viewRequest'});
  	}
  	else{
  		BlazeLayout.render('content', {body: 'unauthorised'});
  	}
  },
  name: 'viewRequest'
});

FlowRouter.route( '/admin', {
  action: function(){
  	if (Meteor.userId()){
  		BlazeLayout.render('content', {body: 'admin'});
  	}
  	else{
  		BlazeLayout.render('content', {body: 'unauthorised'});
  	}
  },
  name: 'admin'
});

FlowRouter.notFound = {
    action: function() {
    	BlazeLayout.render('content', {body: '404'});
    }
};
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
  action: function() {
    BlazeLayout.render( 'content', {body: 'request' } ); 
  },
  name: 'request',
});

FlowRouter.route( '/deliver', {
  action: function() {
    BlazeLayout.render( 'content', {body: 'deliver' } ); 
  },
  name: 'deliver'
});
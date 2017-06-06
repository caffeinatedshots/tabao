FlowRouter.route( '/', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { body: 'main' } ); 
  },
  name: 'main'
});

FlowRouter.route( '/about', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { body: 'about' } ); 
  },
  name: 'about'
});
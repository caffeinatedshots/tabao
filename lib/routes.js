FlowRouter.route( '/', {
  action: function() {
    BlazeLayout.render( 'content', {body: 'main' } ); 
  },
  name: 'main'
});

FlowRouter.route( '/about', {
  action: function() {
    BlazeLayout.render( 'content', {body: 'about' } ); 
  },
  name: 'about'
});
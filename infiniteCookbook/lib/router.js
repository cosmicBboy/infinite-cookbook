Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'splash'});

Router.map(function() {

	this.route('cookBook', {
		path: '/cookbook'
	});

});
Template.splash.helpers({
});

Template.splash.events({
	'click .splash-btn' : function(e) {
		// console.log("testing splash button");
		Router.go('cookBook');
	}
});
var id, url;

Template.recipePage.helpers({
	showRecipe : function() {
		return !(typeof Session.get('recipePageData') === 'undefined');
	},
	getVideoUrl : function() {
		id = Session.get('recipePageData');
		url = Recipes.findOne({'_id': id}).videoUrl;
		return url.replace("watch?v=", "v/");
	}
});

Template.recipePage.events({

});
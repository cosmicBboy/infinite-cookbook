//function to jump to template specified in element argument
var scrollTo = function(element, offset) {
  var y;
  if (typeof offset === 'undefined') {
    y = $(element).offset().top;
  } else {
    y = $(element).offset().top + offset;
    console.log(y);
  }
  $('.sidebar').animate(
    { scrollTop: y },
    { duration: 1000, easing: 'easeInOutCubic' }
  );
};

//declare id variable for recipe data to show on page
var id;

Template.sidebar.helpers({
	recipeList: function() {
		return Recipes.find();
	},
	showThisRecipe : function() {
		return Session.get('recipePageData') === this._id;
	},
	ingredientsList: function() {
		id = Session.get('recipePageData');
		return Recipes.findOne({'_id': id}).ingredients;
	}
});

Template.sidebar.events({
	'click .recipe-item' : function(e) {
		// console.log('button works!');
		id = Session.get('recipePageData');
		console.log(this._id, id);
		if (typeof id === 'undefined' || id !== this._id) {
			Session.set('recipePageData', this._id);
			console.log(e.target);
			scrollTo(e.target);
		} else if (id === this._id) {
			Session.set('recipePageData', undefined);
		}
	}
});
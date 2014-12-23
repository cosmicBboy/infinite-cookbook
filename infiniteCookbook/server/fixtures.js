var recipes = [
	{
		'title': 'Hyderabadi Lamb Biryani',
		'ingredients': [
			'2 lbs lamb',
			'8 tbsp plain yoghurt',
			'4 tsp salt', 
			'6 tsp meat masala powder', 
			'3 tsp red chilli powder', 
			'2 tsp yellow turmeric powder', 
			'1/4 cup shredded coconut', 
			'4 green chillies', 
			'2 tbsp butter', 
			'3 bay leaves', 
			'1 cinnamon stick', 
			'10 cardamom pods', 
			'10 cloves', 
			'10 balls of peppercorn', 
			'2 onions', 
			'1 cup vegetable oil', 
			'3 lemons', 
			'4 cups rice', 
			'2 bunches cilantro', 
			'2 bunches mint leaves', 
			'1 tsp saffron', 
			'dough (flour + water)'
		],
		'videoUrl': 'https://www.youtube.com/watch?v=vhUu3aDVTQU'
	},
	{
		'title': 'Japanese Curry Rice',
		'ingredients': [
			'2 lbs brisket beef (cut into bite-sized cubes)',
			'Salt and pepper (to taste)',
			'6 tbsp butter',
			'3 medium onions (sliced as thin as possible)',
			'ginger, thumb-sized piece (finely grated) ',
			'3 cloves garlic (finely grated)',
			'1 bay leaf',
			'2 large carrots (rangiri style)',
			'1 large apple (peeled and coarsely grated)',
			'5 cups beef stock',
			'1 tbsp salt',
			'4 medium potatoes (peeled and cut into bite-sized pieces)',
			'7 tbsp flour',
			'2 tbsp curry powder',
			'2 tbsp garam masala ',
			'½ tsp cayenne pepper',
			'1 tbsp Worcestershire sauce (or Tonkatsu sauce)',
			'1 tbsp tomato paste'
		],
		'videoUrl': 'https://www.youtube.com/watch?v=CF1L9_CgshY'
	},
	{
		'title': 'Ratatouille',
		'ingredients': [
			'3 tbsp olive oil',
			'1 onion, chopped',
			'2 carrots, chopped',
			'2 celery stalks, chopped',
			'1 tsp garlic powder',
			'1 yellow bell pepper',
			'1 red bell pepper',
			'1 poblano pepper',
			'2 chili peppers (optional)',
			'1 (28 ounces) can crushed tomato',
			'1 tsp herbes de Provence',
			'6 fresh basil leaves',
			'2 yellow squash, sliced into 2 mm rounds',
			'2 zucchinis, sliced into 2 mm rounds',
			'2 eggplants, sliced into 2 mm rounds',
			'6 plum tomatoes, sliced into 2 mm rounds',
			'2 tbsp olive oil',
			'1 tbsp minced garlic',
			'2 tsp thyme leaves, chopped',
			'Salt and pepper to taste'
		],
		'videoUrl': 'https://www.youtube.com/watch?v=56d1J_oCl04'
	}
];

// insert recipe objects into recipes collection
if ( Recipes.find().count() === 0 ) {
	recipes.map( function(obj) { Recipes.insert(obj) } );
}
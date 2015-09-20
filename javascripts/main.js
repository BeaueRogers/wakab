require.config({
	baseURL: "./javascripts",
	paths: {
		"jquery":"../lib/bower_components/jquery/dist/jquery.min",
		"firebase": "../lib/bower_components/firebase/firebase",
		"lodash": "../lib/bower_components/lodash/lodash.min",
		"hbs":"../lib/bower_components/require-handlebars-plugin/hbs",
		"bootstrap":"../lib/bower_components/bootstrap/dist/js/bootstrap.min"
	},
	"shim": {
		"bootstrap": ["jquery"],
		"firebase": {
			exports: "Firebase"
		}
	}
});

requirejs(
	["jquery", "lodash", "firebase", "hbs", "bootstrap", "getUnique", "getTemplates","populate-food"], function ($, _, _firebase, Handlebars, bootstrap, unique, templates, populate) {

		//dunno if we want to seperate dog and cat food or combine them.  this is unfinished and needs some work...-wd
			var allDogFoodObject = {};
			var allDogFoodArray = [];

			var allCatFoodObject = {};
			var allCatFoodArray = [];

			var wakabFirebaseRef = new Firebase("     ");

			wakabFirebaseRef.child ("dog_food").on("value", function(snapshot) {

				var dogFood = snapshot.val();


				//more to come here
			})
	}
);

define(["jquery","lodash","firebase","hbs","bootstrap","getUnique","getTemplates", "populate-food"], function($, _, firebase, Handlebars, bootstrap, unique, templates, populate) {
	populate.getFood(function(dog_food,cat_food) {
		console.log("dog_food", dog_food);
		console.log("cat_food", cat_food);
		
		require(["hbs!../templates/dogs"], function(dogsTemplate) {
		$("#    ").html(dogsTemplate(dog_food));
		});
		
		require(["hbs!../templates/cats"], function(catsTemplate) {
		$("#    ").html(catsTemplate(cat_food));	
		});
		
	})
});












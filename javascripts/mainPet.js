requirejs.config({
  baseUrl: "./javascripts",
  paths: {
      "jquery": "../lib/bower_components/jquery/dist/jquery.min",
      'firebase': '../lib/bower_components/firebase/firebase',
      "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
      "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
      "lodash": "../lib/bower_components/lodash/lodash.min",
      "material": "../lib/bower_components/bootstrap-material-design/dist/js/material.min"
    },
    shim : {
      'bootstrap':['jquery'],
      'material': ['bootstrap'],
      'firebase': {
        exports: 'Firebase'
      }
    }
});

requirejs(
  ["jquery", "lodash", "firebase", "hbs",
   "bootstrap", "material", "getUniquePet",
   "getTemplatesPet", "eventHandlersPet"],
  function($, _, _firebase, Handlebars, bootstrap, material, unique, templates, eventHandlers) {
    var allFoodObject = {};
    var allFoodArray = [];
    var originalFoodArray = [];

    // Initialize the event handlers
   /* eventHandlers.init({songArray: originalSongsArray}); */

    // Create a reference to your Firebase database
    var myFirebaseRef = new Firebase("https://petfood.firebaseio.com/");

    // Listen for when anything changes on the "songs" key
    myFirebaseRef.child("dog_brands").on("value", function(snapshot) {

      // Store the entire songs key in a local variable
      var dog_brands = snapshot.val();

      // Empty out the module-level song array
      allFoodArray = [];

      // Convert Firebase's object of objects into an array of objects
      for (var key in dog_brands) {
        allFoodArray[allFoodArray.length] = dog_brands[key];
      }

      // Now create my base object that will get bound to the
      // song list Handlebar template (Handlebar templates
      // always need objects)
      allFoodObject = { dog_brands: allFoodArray };

      /*
        Create a copy of the allSongsArray so that when
        the user clicks the "Clear Filter" button, we can
        set it back to the original data.
       */
      originalFoodArray = allFoodArray.slice();

      // Bind the song object to the song list template
      $("#dog-brands").html(templates.petFood(allFoodObject));

      // Make an array of unique artist names
      var uniqueBrands = unique(allFoodArray).uniqueBrands;

      // Bind the unique artists to the filteredArtists template
      $("#brands").html(templates.brands({name:uniqueBrands }));

      // Make an array of unique album names
      var uniqueTypes = unique(allFoodArray).uniqueTypes;

      // Bind the unique albums to the filteredAlbums template
      $("#type").html(templates.types({types:uniqueTypes }));

      // Make an array of unique genre names
      var uniqueBreeds = unique(allFoodArray).uniqueBreeds;

      // Bind the unique genres to the filteredGenres template
      $("#breeds").html(templates.breeds({breeds:uniqueBreeds }));
      // Update event handlers with new data
      eventHandlers.updateFood(originalFoodArray);

    });

    // Initialize the Material Bootstrap plugin
    $.material.init();

  }
);
